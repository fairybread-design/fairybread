import { createContext } from 'react';

export interface TimelineContextProps {
  appearance: 'narrow-title' | 'even' | 'no-groups';
}

const TimelineContext = createContext<TimelineContextProps>({
  appearance: 'narrow-title',
});

export default TimelineContext;
