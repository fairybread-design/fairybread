import React, { useRef, useCallback, useEffect, useMemo } from 'react';
import type { RefObject } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';

import breakpoints from '../../../../styles/breakpoints';
import tokens from '../../../tokens';
import Heading from '../../../heading';
import type { HeadingProps } from '../../../heading';
import IconButton from '../../../icon-button/index';
import { faAngleLeft, faXmark } from '@fortawesome/sharp-solid-svg-icons';
import Layer, { Pile } from '../../../layer';

export const HTML_ACTIVE_CLASSNAME = 'eds-html--modal-active';
export const HTML_OPEN_CLASSNAME = 'eds-html--modal-open';
export const HTML_CLOSING_CLASSNAME = 'eds-html--modal-closing';
export const OPEN_TRANSITION_DURATION = 400;
export const CLOSE_TRANSITION_DURATION = 300;
export const MODAL_HEADER_MOBILE_HEIGHT = '47px';
export const TRANSITION_TIMING = 'cubic-bezier(0, 0, 0.2, 1)';
export const MODAL_CATEGORY = 'modal';

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useClickOutside = (
  contentRef: RefObject<HTMLDivElement>,
  overlayRef: RefObject<HTMLDivElement>,
  onClickOutside: () => void
) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      // Check if the click was on the overlay
      const overlayClicked =
        overlayRef.current && overlayRef.current.contains(event.target as Node);

      // Check if the click was within modal content bounds
      const contentClicked =
        contentRef.current && contentRef.current.contains(event.target as Node);

      if (event.target && overlayClicked && !contentClicked) {
        onClickOutside();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contentRef, overlayRef, onClickOutside]);
};

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface BaseProps {
  isOpen: boolean;
  isClosing: boolean;
  children?: React.ReactNode;
  size?: Size;
  title: React.ReactNode;
  titleAlign?: HeadingProps['textAlign'];
  onRequestClose?(event?: React.MouseEvent | React.KeyboardEvent): void;
}

const sizes: { [key in Size]: number } = {
  xs: 500,
  sm: 750,
  md: 900,
  lg: 1200,
  xl: 1480,
  xxl: 1800,
} as const;

const Base = ({
  isClosing,
  onRequestClose,
  children,
  size = 'md',
  title,
  titleAlign,
}: BaseProps) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  const handleClose = useCallback(
    (event?: React.MouseEvent | React.KeyboardEvent) => {
      if (onRequestClose) {
        onRequestClose(event);
      }
    },
    [onRequestClose]
  );

  useClickOutside(contentRef, overlayRef, handleClose);

  const metadata = useMemo(() => ({ isClosing }), [isClosing]);

  return (
    <>
      <BodyStyle />
      <Layer category={MODAL_CATEGORY} metadata={metadata} isMainPile>
        <Pile>
          <Overlay ref={overlayRef} $isClosing={isClosing}>
            <BaseContent ref={contentRef} $size={size} $isClosing={isClosing}>
              <Header>
                <HeaderInner $titleAlign={titleAlign}>
                  <MobileCloseButtonWrapper>
                    <CloseButton
                      label="Close"
                      icon={faAngleLeft}
                      onClick={handleClose}
                      hasTooltip={false}
                      size="md"
                    />
                  </MobileCloseButtonWrapper>
                  <ModalHeading
                    noMarginTop
                    noMarginBottom
                    level={1}
                    variant={3}
                    textAlign={titleAlign}
                  >
                    {title}
                  </ModalHeading>
                  <DesktopCloseButtonWrapper>
                    <IconButton
                      label="Close"
                      icon={faXmark}
                      onClick={handleClose}
                      hasTooltip={false}
                      size="md"
                    />
                  </DesktopCloseButtonWrapper>
                </HeaderInner>
              </Header>
              <Content className="modal-content">{children}</Content>
            </BaseContent>
          </Overlay>
        </Pile>
      </Layer>
    </>
  );
};

const CloseButton = styled(IconButton)`
  padding: 8px 12px;
  margin-left: -11px;
`;

// TODO: Move to own file
const Header = styled.header`
  ${breakpoints.down(
    'md',
    ` 
      height: ${MODAL_HEADER_MOBILE_HEIGHT};
      position: sticky;
      top: 0;
      z-index: 999;
      background: ${tokens['color-elevation-surface']};
    `
  )}

  ${breakpoints.up(
    'md',
    ` 
      padding-top: 30px;
      margin-bottom: ${tokens['space-md']};
    `
  )}
`;

const HeaderInner = styled.div<{
  $titleAlign?: HeadingProps['textAlign'];
}>`
  position: relative;
  padding-right: 30px;

  ${breakpoints.down(
    'md',
    `
      padding-left: ${({
        $titleAlign,
      }: {
        $titleAlign?: HeadingProps['textAlign'];
      }) => ($titleAlign === 'center' ? '30px' : 0)};
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 15px;
      padding-bottom: 15px;
      padding-left: 30px;
    `
  )}
`;

const ModalHeading = styled(Heading)`
  ${breakpoints.down(
    'md',
    `
      font-size: ${tokens['typography-size-xs']};
  `
  )}
`;

const Content = styled.main`
  padding: ${tokens['space-sm']};

  ${breakpoints.up('sm', `padding: ${tokens['space-md']};`)}

  ${breakpoints.up('md', 'padding: 0;')}
`;

const MobileCloseButtonWrapper = styled.div`
  position: absolute;
  left: ${tokens['space-sm']};
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;

  ${breakpoints.up('md', 'display: none;')}
`;
const DesktopCloseButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  ${breakpoints.down('md', 'display: none;')}
`;

// TODO: This is being added to the page once for every modal on the page
const BodyStyle = createGlobalStyle`
${breakpoints.down(
  'md',
  `
    body {
      &:before {
        pointer-events: none;
        content: "";
        background: ${tokens['color-elevation-surface']};
        height: 3px;
        display: block;
        position: fixed;
        top: -2px;
        left: 0;
        right: 0;
        z-index: 1;
        opacity: 0;
        transition: opacity 100ms ease;
        transition-delay: ${CLOSE_TRANSITION_DURATION - 100}ms;
      }
    }

    html.${HTML_OPEN_CLASSNAME} body {
      &:before {
        opacity: 1;
        transition-delay: 0ms;
      }
    }
  `
)}

  html.${HTML_OPEN_CLASSNAME} body {
    overflow: hidden;
  }
`;

const BaseContent = styled.section<{
  $size: BaseProps['size'];
  $isClosing: boolean;
}>`
  width: 100%;
  background: ${tokens['color-elevation-surface']};
  outline: 0;
  overflow-y: auto;
  animation-timing-function: ${TRANSITION_TIMING};

  @keyframes modalSlideInUp {
    0% {
      transform: translate3d(0, 32px, 0);
      opacity: 0;
    }
  }

  @keyframes modalSlideOutUp {
    100% {
      transform: translate3d(0, -16px, 0);
      opacity: 0;
    }
  }

  @keyframes modalSlideInLeft {
    0% {
      transform: translate3d(100vw, 0, 0);
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes modalSlideOutRight {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    99% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate3d(calc(100vw + 80px), 0, 0);
    }
  }

  @keyframes modalFadeInOverlayDesktop {
    100% {
      background-color: ${tokens['color-blanket']};
    }
  }

  @keyframes modalFadeOutOverlayDesktop {
    0% {
      background-color: ${tokens['color-blanket']};
    }
  }

  ${breakpoints.down(
    'md',
    `
      opacity: 0;

      box-shadow: 0 0 80px rgba(0, 0, 0, 0.5);
      animation: modalSlideInLeft ${OPEN_TRANSITION_DURATION}ms ${TRANSITION_TIMING};
      animation-fill-mode: forwards;
      min-height: 100%;
      height: 100%;
    `
  )}

  ${
    /**
     * padding-top is not applied here because it affects position: sticky of table headers
     */

    breakpoints.up(
      'md',
      `
        padding-left: ${tokens['space-lg']};
        padding-right: ${tokens['space-lg']};
        padding-bottom: ${tokens['space-lg']};
        border-radius: ${tokens['size-borderRadius']};
        margin: ${tokens['space-lg']};
        height: fit-content;
        max-height: calc(100vh - (${tokens['space-lg']} * 2));
        animation: modalSlideInUp ${CLOSE_TRANSITION_DURATION}ms ${TRANSITION_TIMING};
    `
    )
  }

  ${({ $isClosing }) =>
    $isClosing &&
    `${breakpoints.down(
      'md',
      `
        animation-name: modalSlideOutRight;
        animation-duration: ${CLOSE_TRANSITION_DURATION}ms;
      `
    )}
    
    ${breakpoints.up(
      'md',
      `
        animation-name: modalSlideOutUp;
        animation-duration: ${CLOSE_TRANSITION_DURATION}ms;
        animation-fill-mode: forwards;
      `
    )}
  `}

  ${({ $size = 'md' }) => breakpoints.up('md', `max-width: ${sizes[$size]}px`)}
`;

const Overlay = styled.div<{
  $isClosing: boolean;
}>`
  @keyframes fadeInOverlay {
    100% {
      background-color: ${tokens['color-blanket']};
    }
  }

  @keyframes fadeOutOverlay {
    100% {
      background-color: transparent;
    }
  }

  position: fixed;
  z-index: 1000;
  top: 0;
  /**
   * Prevents scrollbar hiding causing page to jump when modals disable scroll on body
   * https://stackoverflow.com/a/35437970
   */
  left: calc(100vw - 100%);
  right: 0;
  bottom: 0;
  background-color: transparent;
  justify-content: center;
  display: block;

  ${breakpoints.up(
    'md',
    `
      display: flex;
      animation: fadeInOverlay ${OPEN_TRANSITION_DURATION}ms ${TRANSITION_TIMING};
      animation-fill-mode: forwards;
    `
  )}

  ${({ $isClosing }) =>
    $isClosing &&
    css`
      animation-name: fadeOutOverlay;
      animation-duration: ${CLOSE_TRANSITION_DURATION}ms;

      ${breakpoints.up('md', 'animation-name: modalFadeOutOverlayDesktop;')}
    `}
`;

export default Base;
