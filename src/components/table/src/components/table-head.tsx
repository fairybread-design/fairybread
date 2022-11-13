import styled from 'styled-components';
import { MODAL_HEADER_MOBILE_HEIGHT } from '../../../modal/src/components/base';
import tokens from '../../../tokens';

export interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
}

const _TableHead = ({ children, className }: TableHeadProps) => {
  return <thead className={className}>{children}</thead>;
};

const TableHead = styled(_TableHead)`
  position: sticky;
  top: 0;
  background: ${tokens['color-elevation-surface']};
  z-index: 2;

  .modal-content & {
    top: ${MODAL_HEADER_MOBILE_HEIGHT};
  }
`;

export default TableHead;
