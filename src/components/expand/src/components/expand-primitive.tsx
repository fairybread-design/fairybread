import React, { useState, useEffect, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useMeasure } from 'react-use';
import styled from 'styled-components';
import type { InterpolationValue } from 'styled-components';

export interface ExpandPrimitiveProps {
  id?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  /**
   * Trigger is optional. Can also be externally controlled
   */
  trigger?: ({}: { onClick: () => void; isOpen: boolean }) => React.ReactNode;
  expandStyles?: InterpolationValue;
  onOpen?({}: { id?: string }): void;
}

const ExpandPrimitive = ({
  id,
  isOpen: isOpenControl,
  trigger,
  expandStyles,
  children,
  onOpen,
}: ExpandPrimitiveProps) => {
  const [isOpen, setIsOpen] = useState(isOpenControl || false);

  useEffect(() => {
    if (isOpen && onOpen) {
      onOpen({ id });
    }
  }, [isOpen, onOpen, id]);

  useEffect(() => {
    if (isOpenControl !== undefined) {
      setIsOpen(isOpenControl);
    }
  }, [isOpenControl]);

  const [contentHeight, setContentHeight] = useState<number | string>('0px');

  const [ref, { height }] = useMeasure<HTMLDivElement>();

  const expand = useSpring({
    config: { friction: 50, tension: 400 },
    height: isOpen ? `${contentHeight}px` : '0px',
  });

  useEffect(() => {
    setContentHeight(height);
  }, [height]);

  const toggleOpen = useCallback(() => {
    // Don't do anything in controlled mode
    if (isOpenControl !== undefined) return;
    setIsOpen(!isOpen);
  }, [isOpen, isOpenControl]);

  const expandSection = (
    <ExpandSection style={expand} $customStyles={expandStyles}>
      <div ref={ref}>{children}</div>
    </ExpandSection>
  );

  /**
   * Only wrap in div if there is a trigger
   */
  return trigger ? (
    <div>
      {trigger({ onClick: toggleOpen, isOpen })}
      {expandSection}
    </div>
  ) : (
    expandSection
  );
};

const ExpandSection = styled(animated.div)<{
  $customStyles?: InterpolationValue;
}>`
  overflow: hidden;

  ${({ $customStyles }) => $customStyles}
`;

export default ExpandPrimitive;
