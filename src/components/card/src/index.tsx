import React, { forwardRef } from 'react';

import Wrapper from './components/wrapper';
import Content from './components/content';
import ImageSlot from './components/image-slot';
import Heading from '../../heading';
import { HeadingProps } from '../../heading';

export interface CardProps {
  title?: React.ReactNode;
  titleLevel?: HeadingProps['level'];
  children: React.ReactNode;
  image?: React.ReactNode;
  renderLink?: ({}: {
    link: typeof CardLink;
    children: React.ReactNode;
  }) => React.ReactNode;
}

const CardLink = forwardRef<HTMLAnchorElement, { children: React.ReactNode }>(
  ({ children, ...rest }, ref) => {
    return (
      <Wrapper as="a" $isLink ref={ref} {...rest}>
        {children}
      </Wrapper>
    );
  }
);

CardLink.displayName = 'CardLink';

const Card = ({
  children,
  image,
  title,
  titleLevel = 2,
  renderLink,
}: CardProps) => {
  const innerContent = (
    <>
      {image && <ImageSlot>{image}</ImageSlot>}
      <Content>
        {title && (
          <Heading level={titleLevel} variant={2} noMarginTop>
            {title}
          </Heading>
        )}
        {children}
      </Content>
    </>
  );

  return (
    <>
      {renderLink ? (
        renderLink({
          link: CardLink,
          children: innerContent,
        })
      ) : (
        <Wrapper>{innerContent}</Wrapper>
      )}
    </>
  );
};

export default Card;
