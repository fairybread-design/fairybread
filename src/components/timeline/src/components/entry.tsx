import React, { useContext } from 'react';
import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';
import Tag from '../../../tag';
import type { TagProps } from '../../../tag';
import tokens from '../../../tokens';
import ProgressLine from './progress-line';
import upperFirst from 'lodash/upperFirst';
import TimelineContext from './timeline-context';
import type { TimelineContextProps } from './timeline-context';
import Text from '../../../text';

export type TimelineStatus =
  | 'incomplete'
  | 'in progress'
  | 'complete'
  | 'complete-single';
export interface EntryProps {
  className?: string;
  children?: React.ReactNode;
  title?: React.ReactNode;
  groupTitle?: React.ReactNode;
  groupStatus?: TimelineStatus;
  groupContent?: React.ReactNode;
  status?: TimelineStatus;
}

const tagAppearance: { [key in TimelineStatus]: TagProps['appearance'] } = {
  incomplete: 'warning',
  'in progress': 'information',
  complete: 'success',
  'complete-single': 'success',
} as const;

const _Entry = ({
  className,
  children,
  title,
  groupTitle,
  groupStatus,
  groupContent,
  status,
}: EntryProps) => {
  const { appearance } = useContext(TimelineContext);

  return (
    <li className={className}>
      <GroupWrapper $appearance={appearance}>
        <>
          {groupTitle && (
            <Text noMarginTop>
              <strong>{groupTitle}</strong>
            </Text>
          )}
          {groupStatus && groupStatus !== 'incomplete' && (
            <Tag appearance={tagAppearance[groupStatus]}>
              {upperFirst(groupStatus)}
            </Tag>
          )}
          {groupContent}
        </>
      </GroupWrapper>
      <ProgressLine status={status} />
      <Content>
        <>
          {title && (
            <Text noMarginTop noMarginBottom={Boolean(children)}>
              <strong>{title}</strong>
            </Text>
          )}
          {typeof children === 'string' ? (
            <Text noMarginTop>{children}</Text>
          ) : (
            children
          )}
        </>
      </Content>
    </li>
  );
};

const GroupWrapper = styled.div<{
  $appearance: TimelineContextProps['appearance'];
}>`
  text-align: right;

  ${({ $appearance }) => {
    if ($appearance === 'narrow-title') {
      return 'flex: 0 85px;';
    } else if ($appearance === 'even') {
      return 'flex: 1;';
    } else if ($appearance === 'no-groups') {
      return 'display: none;';
    }
  }}
  ${breakpoints.up('md', 'flex: 1;')}
`;

const Content = styled.div`
  flex: 1;
  padding-bottom: ${tokens['space-xs']};
`;

const Entry = styled(_Entry)`
  display: flex;
  gap: ${tokens['space-sm']};

  :last-child {
    .timeline__progress-line::before {
      content: none;
    }
  }

  ${breakpoints.up('md', `gap: ${tokens['space-md']};`)}
`;

export default Entry;
