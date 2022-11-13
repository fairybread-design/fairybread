import styled from 'styled-components';
import Text from '../../text';
import type { TextProps } from '../../text';
import tokens from '../../tokens';
import Item from './components/item';
import ListContext from './components/list-context';

export interface ListProps {
  children: React.ReactNode;
  type: 'ul' | 'ol';
  size?: TextProps['size'];
}

const List = ({ children, type, size }: ListProps) => {
  return (
    <ListContext.Provider value={{ type }}>
      <Wrapper as={type} size={size}>
        {children}
      </Wrapper>
    </ListContext.Provider>
  );
};

List.Item = Item;

const Wrapper = styled(Text)`
  margin: 1.3em 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${tokens['space-xs']};

  ${({ as }) => {
    if (as === 'ol') {
      return 'counter-reset: list;';
    }
  }}
`;

export default List;
