import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

import tokens from '../tokens';

export interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
  noMarginTop?: boolean;
  noMarginBottom?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  id?: string;
}

const _Heading = ({ className, children, level, id }: HeadingProps) => {
  return (
    <HeadingElem as={`h${level}`} className={className} id={id}>
      {children}
    </HeadingElem>
  );
};

const HeadingElem = styled.h1``;

const Heading = styled(_Heading)`
  color: ${tokens['color-text']};
  line-height: ${tokens['typography-lineHeight-heading']};
  font-weight: ${tokens['typography-weight-heading']};

  margin-block-start: ${({ noMarginTop = false }) => {
    if (noMarginTop) {
      return '0';
    }

    return '2em';
  }};
  margin-block-end: ${({ noMarginBottom = false }) => {
    if (noMarginBottom) {
      return '0';
    }

    return '0.8em';
  }};

  ${({ textAlign }) => (textAlign ? `text-align: ${textAlign};` : '')}

  ${({ level, variant }) => {
    const displayLevel = variant || level;

    switch (displayLevel) {
      case 1:
        return `
          font-size: 34px;
      
          ${breakpoints.up('md', 'font-size: 48px;')}
          ${breakpoints.up('lg', 'font-size: 60px;')}
        `;
      case 2:
        return `
          font-size: 26px;
      
          ${breakpoints.up('md', 'font-size: 30px;')}
          ${breakpoints.up('lg', 'font-size: 36px;')}
        `;
      case 3:
        return `
          font-size: 23px;

          ${breakpoints.up('md', 'font-size: 26px;')}
          ${breakpoints.up('lg', 'font-size: 30px;')}
        `;
      case 4:
        return `
          font-size: 18px;

          ${breakpoints.up('md', 'font-size: 20px;')}
          ${breakpoints.up('lg', 'font-size: 22px;')}
        `;
      case 5:
        return `
          font-size: 17px;
      
          ${breakpoints.up('lg', 'font-size: 18px;')}
        `;
      case 6:
        return `
            font-size: 15px;
        
            ${breakpoints.up('lg', 'font-size: 16px;')}
          `;
    }
  }}
`;

export default Heading;
