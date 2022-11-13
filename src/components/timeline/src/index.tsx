import React, { Children } from 'react';
import styled from 'styled-components';
import TimelineContext from './components/timeline-context';
import type { TimelineContextProps } from './components/timeline-context';

import Entry from './components/entry';
import type { EntryProps } from './components/entry';

type EntryChild = false | React.ReactElement<EntryProps>;

export interface TimelineProps {
  className?: string;
  children: EntryChild | EntryChild[];
  appearance?: TimelineContextProps['appearance'];
}

const _Timeline = ({
  children,
  className,
  appearance = 'narrow-title',
}: TimelineProps) => {
  // Filter out invalid entries
  const entries = Children.map(children, (entry) => {
    if (
      entry !== false &&
      React.isValidElement(entry) &&
      entry.type === Entry
    ) {
      return entry;
    } else {
      return null;
    }
  }).filter((Entry) => Entry !== null);

  return (
    <TimelineContext.Provider value={{ appearance }}>
      <ol className={className}>{entries}</ol>
    </TimelineContext.Provider>
  );
};

const Timeline = styled(_Timeline)`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default Timeline;
