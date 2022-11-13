import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/sharp-solid-svg-icons';
import styled, { css } from 'styled-components';
import tokens from '../../../tokens';
import ListContext from './list-context';
import type { ListContextProps } from './list-context';
import breakpoints from '../../../../styles/breakpoints';

export interface ItemProps {
  children: React.ReactNode;
}

const Item = ({ children }: ItemProps) => {
  const { type } = useContext(ListContext);

  const marker = {
    ul: <ArrowMarker />,
    ol: <NumberMarker />,
  }[type];

  return (
    <ListItem $type={type}>
      {marker}
      <Content>{children}</Content>
    </ListItem>
  );
};

const ListItem = styled.li<{ $type: ListContextProps['type'] }>`
  position: relative;
  margin: 0;
  padding: 0;
  counter-increment: list;
  display: flex;
  align-items: baseline;
`;

const Content = styled.span`
  flex: 1 1 auto;
`;

const markerStyles = css`
  color: ${tokens['color-icon-brand']};
  flex: 0 0 38px;
  padding-right: 12px;
  text-align: right;

  ${breakpoints.up(
    'md',
    `
    flex-basis: 58px;
    padding-right: ${tokens['space-sm']};
  `
  )}
`;

const ArrowMarker = () => {
  return (
    <ArrowMarkerWrapper>
      <FontAwesomeIcon icon={faArrowRight} />
    </ArrowMarkerWrapper>
  );
};

const ArrowMarkerWrapper = styled.span`
  ${markerStyles}
`;

const NumberMarker = styled.span`
  ${markerStyles}

  &:before {
    content: counter(list) '.';
    font-weight: ${tokens['typography-weight-heading']};
  }
`;

export default Item;
