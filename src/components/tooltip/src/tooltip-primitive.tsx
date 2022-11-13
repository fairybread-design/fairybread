import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { usePopper } from 'react-popper';
import type { PopperProps } from 'react-popper';
import styled from 'styled-components';
import Layer from '../../layer';

export interface TooltipPrimitiveProps
  extends Pick<PopperProps<any>, 'placement'> {
  children: React.ReactElement;
  label: React.ReactNode | (({}: { setClose: () => void }) => React.ReactNode);
  trigger: 'hover' | 'click';
  components: {
    popper: React.FunctionComponent<any>;
    arrow: React.FunctionComponent<any>;
    label: React.FunctionComponent<any>;
  };
  componentProps?: {
    label?: any;
  };
}

const TooltipPrimitive = ({
  children,
  placement = 'top',
  label,
  trigger,
  components: {
    popper: PopperElementInner,
    arrow: ArrowElement,
    label: LabelElement,
  },
  componentProps,
}: TooltipPrimitiveProps) => {
  const [isShown, setShown] = useState(false);

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] =
    useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

  const popperElementRef = useRef<HTMLDivElement | null>(null);
  const referenceRef = useRef<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrowElement,
          // Offset arrow from corners to avoid touching rounded borders
          padding: 4,
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, 9],
        },
      },
      {
        name: 'preventOverflow',
        options: {
          altAxis: true,
          padding: 16,
        },
      },
    ],
    placement,
    strategy: 'fixed',
  });

  const showTooltip = useCallback(() => {
    setShown(true);
  }, []);

  const hideTooltip = useCallback(() => {
    setShown(false);
  }, []);

  const toggleTooltip = useCallback(() => {
    setShown((s) => !s);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        referenceRef.current &&
        referenceRef.current.contains(event.target as Node)
      ) {
        /**
         * The reference element was clicked. Do nothing because the reference
         * element already handles closing the tooltip.
         **/
        return;
      } else if (
        popperElementRef.current &&
        !popperElementRef.current.contains(event.target as Node)
      ) {
        // Clicked outside the tooltip. Close it.
        hideTooltip();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popperElementRef, referenceRef, hideTooltip]);

  if (!Children.only(children)) {
    console.error('Tooltip `children` must contain a single element.');
    return null;
  }

  const reference = Children.map(children, (child) => {
    if (isValidElement(child)) {
      let triggerProps: any = {
        ref: (ref: HTMLDivElement) => {
          setReferenceElement(ref);
          referenceRef.current = ref;
        },
      };

      if (trigger === 'click') {
        triggerProps = {
          ...triggerProps,
          onClick: toggleTooltip,
        };
      } else if (trigger === 'hover') {
        triggerProps = {
          ...triggerProps,
          onMouseEnter: showTooltip,
          onMouseLeave: hideTooltip,
          onFocus: showTooltip,
          onBlur: hideTooltip,
        };
      }

      return cloneElement(child, {
        ...triggerProps,
      });
    } else {
      console.error('Tooltip `children` is not a valid element.');
      return null;
    }
  });

  return (
    <>
      {reference}

      {isShown && (
        <Layer category="tooltip">
          <PopperElement
            ref={(ref) => {
              setPopperElement(ref);
              popperElementRef.current = ref;
            }}
            style={styles.popper}
            {...attributes.popper}
          >
            <PopperElementInner>
              <LabelElement {...componentProps?.label}>
                {typeof label === 'function'
                  ? label({ setClose: hideTooltip })
                  : label}
              </LabelElement>
              <ArrowElement ref={setArrowElement} style={styles.arrow} />
            </PopperElementInner>
          </PopperElement>
        </Layer>
      )}
    </>
  );
};

const PopperElement = styled.div`
  z-index: 9999;
`;

export default TooltipPrimitive;
