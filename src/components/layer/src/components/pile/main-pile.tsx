import PilePrimitive from './primitive';
import type { PileProps } from './pile';

const MainPile = ({ children, className, style }: PileProps) => {
  return (
    <PilePrimitive context="main-pile" className={className} style={style}>
      {children}
    </PilePrimitive>
  );
};

export default MainPile;
