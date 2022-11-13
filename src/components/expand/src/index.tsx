import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/sharp-solid-svg-icons';
import styled from 'styled-components';
import tokens from '../../tokens';
import ExpandPrimitive from './components/expand-primitive';
import breakpoints from '../../../styles/breakpoints';

export interface ExpandProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?({}: { id: string }): void;
}

const Expand = ({ title, children, isOpen, onOpen }: ExpandProps) => {
  return (
    <ExpandPrimitive
      id={title}
      isOpen={isOpen}
      trigger={({ onClick, isOpen }) => (
        <Trigger onClick={onClick} isOpen={isOpen} title={title} />
      )}
      onOpen={onOpen}
      expandStyles={`
        position: relative;

        &:after {
          content: '';
          height: ${tokens['size-borderWidth']};
          background: ${tokens['color-border']};
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
    `}
    >
      <Content>{children}</Content>
    </ExpandPrimitive>
  );
};

const Trigger = ({
  onClick,
  isOpen,
  title,
}: {
  onClick: () => void;
  isOpen: boolean;
  title: string;
}) => {
  // Animations
  const spin = useSpring({
    config: { friction: 30 },
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  });

  return (
    <Button type="button" onClick={onClick}>
      <Title>{title}</Title>
      <animated.div style={spin}>
        <Icon icon={faChevronDown} $isOpen={isOpen} />
      </animated.div>
    </Button>
  );
};

const Button = styled.button`
  text-align: left;
  cursor: pointer;
  appearance: none;
  font-size: ${tokens['typography-size-xs']};
  gap: ${tokens['space-sm']};
  padding: ${tokens['space-xs']} ${tokens['space-sm']};
  min-height: 44px;
  border: ${tokens['size-borderWidth']} solid ${tokens['color-border']};
  outline: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${tokens['color-background-neutral']};
  color: ${tokens['color-text']};

  ${breakpoints.up(
    'md',
    `
      padding: ${tokens['space-sm']} ${tokens['space-md']};
      font-size: ${tokens['typography-size']};
    `
  )}

  &:hover,
  &:focus {
    background: ${tokens['color-background-neutral-hovered']};
  }
  &:active {
    background: ${tokens['color-background-neutral-pressed']};
  }
`;

const Title = styled.span`
  font-weight: ${tokens['typography-weight-heading']};
`;

const Icon = styled(FontAwesomeIcon)<{ $isOpen: boolean }>`
  transition: color 200ms ease;
  color: ${({ $isOpen }) =>
    !$isOpen ? tokens['color-icon-hovered'] : tokens['color-icon-pressed']};
`;

const Content = styled.div`
  padding: ${tokens['space-sm']};
  border-left: ${tokens['size-borderWidth']} solid ${tokens['color-border']};
  border-right: ${tokens['size-borderWidth']} solid ${tokens['color-border']};

  ${breakpoints.up('md', `padding: ${tokens['space-md']};`)}

  & > :first-child {
    margin-top: 0;
  }
  & > :last-child {
    margin-bottom: 0;
  }
`;

export default Expand;
