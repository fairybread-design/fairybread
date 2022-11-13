import PilePrimitive from './primitive';
import type { PilePrimitiveProps } from './primitive';

export interface PileProps
  extends Pick<PilePrimitiveProps, 'children' | 'style' | 'className'> {}

const Pile = ({ children, className, style }: PileProps) => {
  return (
    <PilePrimitive context="pile" className={className} style={style}>
      {children}
    </PilePrimitive>
  );
};

export default Pile;
