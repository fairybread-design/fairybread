import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import breakpoints from '../../../styles/breakpoints';
import tokens from '../../tokens';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/sharp-solid-svg-icons';
import Modal from '../../modal';

export interface BlockquoteProps {
  children: React.ReactNode;
  cite?:
    | {
        type: 'link';
        title?: string;
        content: string;
      }
    | {
        type: 'inline';
        title?: string;
        content: React.ReactNode;
      };
}

const Blockquote = ({ children, cite }: BlockquoteProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Wrapper>
      <div>
        <QuoteIconLeft icon={faQuoteLeft} />
        <Content>{children}</Content>
        <QuoteIconRight icon={faQuoteRight} />
      </div>
      {cite && (
        <Cite>
          -{' '}
          {cite.type === 'link' && (
            <a href={cite.content} target="_blank" rel="noreferrer">
              {cite.title || 'Source'}
            </a>
          )}
          {cite.type === 'inline' && (
            <ModalButton onClick={openModal}>
              {cite.title || 'Source'}
            </ModalButton>
          )}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            title="Source"
          >
            {cite.content}
          </Modal>
        </Cite>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.blockquote`
  border-left: 3px solid ${tokens['color-border-brand']};
  background: none;
  padding: ${tokens['space-md']};
  font-size: ${tokens['typography-size']};
  font-style: italic;
  margin: 1.6em 0 1.4em;

  ${breakpoints.up('lg', `font-size: ${tokens['typography-size-lg']};`)}
`;

const Content = styled.span`
  display: inline;

  p:only-child {
    display: inline;
  }
`;

const Cite = styled.cite`
  font-size: ${tokens['typography-size-xxs']};
`;

const ModalButton = styled.button<{}>`
  text-decoration: underline;
  cursor: pointer;
  background: none;
  padding: 0;
  align-items: center;
  display: inline;
  font-weight: normal;
  font-style: inherit;
  appearance: none;
  color: ${tokens['color-text-brand']};
  border: 0;
  outline: 0;
  font-size: inherit;
  white-space: nowrap;

  :hover,
  :focus {
    color: ${tokens['color-text-brand-hovered']};
    text-decoration: underline;
  }

  :active {
    color: ${tokens['color-text-brand-pressed']};
  }
`;

const quoteIconStyles = css`
  color: ${tokens['color-icon-brand']};
`;

const QuoteIconLeft = styled(FontAwesomeIcon)`
  ${quoteIconStyles}
  margin-right: ${tokens['space-xs']};
`;

const QuoteIconRight = styled(FontAwesomeIcon)`
  ${quoteIconStyles}
  margin-left: ${tokens['space-xs']};
`;

export default Blockquote;
