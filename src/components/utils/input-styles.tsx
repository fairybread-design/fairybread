import styled from 'styled-components';
import Stack from '../stack';
import tokens from '../tokens';

export const FieldWrap = styled.div`
  position: relative;
  flex: 1;
`;

export const Label = styled.label`
  text-overflow: ellipsis;
  font-size: ${tokens['typography-size-inputLabel-size']};
  color: ${tokens['color-text-subtle']};
  white-space: nowrap;
  overflow: hidden;
`;

export const LabelWrapperInner = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  height: 21px;
  z-index: 2;
  left: calc(
    ${tokens['size-input-paddingInline']} + ${tokens['size-borderWidth']}
  );
  top: 5px;
  max-width: calc(
    100% -
      (
        (${tokens['size-input-paddingInline']} + ${tokens['size-borderWidth']}) *
          2
      )
  );
`;

interface LabelWrapperProps {
  children: React.ReactNode;
}
export const LabelWrapper = ({ children }: LabelWrapperProps) => {
  return (
    <LabelWrapperInner>
      <Stack isInline={false} size="xxs" alignItems="flex-end">
        {children}
      </Stack>
    </LabelWrapperInner>
  );
};
