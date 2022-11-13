/**
 * TODO: Investigate why react-virtualized no longer resizes table rows
 * on window resize when using AutoSizer. I've had to fix the version to a
 * an older release as 9.21.21 was not working
 *
 * Some investigation:
 *
 * works 9.18.0
 * works 9.18.5
 * broken 9.19.0 - it broke here
 * broken 9.19.1
 *
 * Further investigation: It only occurs in React strict mode due to a
 * deprecated usage for findDOMnode. I've disabled strict mode for now.
 * Version 9.19.0 bumped 'react' so I think this deprecated it.
 *
 * https://github.com/bvaughn/react-virtualized/compare/9.18.5...9.19.0
 *
 * TODO: Look into using react-window
 * https://engineering.monday.com/building-our-recycle-list-solution-in-react/
 */

import React from 'react';
import styled from 'styled-components';

import {
  AutoSizer,
  Column,
  Table as ReactVirtualizedTable,
} from 'react-virtualized';

import type {
  ColumnProps,
  TableProps as ReactVirtualizedTableProps,
  TableCellProps as ReactVirtualizedTableCellProps,
  TableHeaderProps as ReactVirtualizedTableHeaderProps,
} from 'react-virtualized';

import { TableHeader, TableData } from '../..';
import type { TableHeaderProps } from '../..';
import tokens from '../../../tokens';

// Set custom class names to provide style scope.
// Avoids class conflicts with existing 'react-virtualized' usage.
const classes = {
  table: 'virtualized-table__table',
  tableRow: 'virtualized-table__table__row',
  tableHeader: 'virtualized-table__table-header',
  tableData: 'virtualized-table__table-data',
  grid: 'virtualized-table__grid',
};

interface ColumnData extends ColumnProps {
  align?: TableHeaderProps['align'];
}

// @ts-ignore Omit is causing type info to be lose for certain props
// extends Omit<
//   ReactVirtualizedTableProps,
//   'width' | 'height' | 'rowHeight' | 'headerHeight'
// > {
export interface VirtualizedTableProps extends ReactVirtualizedTableProps {
  columns: readonly ColumnData[];
  rowHeight?: ReactVirtualizedTableProps['rowHeight'];
  headerHeight?: ReactVirtualizedTableProps['headerHeight'];
  // Make these optional again due to Omit but
  width?: number;
  height?: number;
}

const tableDataRenderer = ({
  rowHeight,
  cellData,
  rowIndex,
  align,
}: ReactVirtualizedTableCellProps & {
  rowHeight: VirtualizedTableProps['rowHeight'];
  align?: ColumnData['align'];
}) => {
  return (
    <TableData
      ellipsis
      component="div"
      align={align}
      style={{
        height:
          typeof rowHeight === 'function'
            ? rowHeight({ index: rowIndex })
            : rowHeight,
      }}
    >
      {cellData}
    </TableData>
  );
};

const tableHeaderRenderer = ({
  headerHeight,
  label,
  align,
}: ReactVirtualizedTableHeaderProps & {
  headerHeight: VirtualizedTableProps['headerHeight'];
  align?: ColumnData['align'];
}) => {
  return (
    <TableHeader
      ellipsis
      component="div"
      style={{ height: headerHeight }}
      align={align}
    >
      {label}
    </TableHeader>
  );
};

const _VirtualizedTable = ({
  columns,
  rowHeight = 40,
  headerHeight = 40,
  rowGetter,
  rowCount,
  className,
  height: _height,
  width: _width,
  ...tableProps
}: VirtualizedTableProps) => {
  return (
    <AutoSizer>
      {({ height, width }) => {
        return (
          <ReactVirtualizedTable
            gridClassName={classes.grid}
            rowClassName={classes.tableRow}
            headerClassName={classes.tableHeader}
            height={height}
            width={width}
            rowHeight={rowHeight}
            headerHeight={headerHeight}
            rowGetter={rowGetter}
            rowCount={rowCount}
            className={className}
            {...tableProps}
          >
            {columns.map(
              ({
                dataKey,
                align,
                label,
                width,
                cellRenderer,
                headerRenderer,
                flexGrow = 1,
                ...columnProps
              }) => {
                return (
                  <Column
                    key={dataKey}
                    dataKey={dataKey}
                    label={label}
                    width={width}
                    flexGrow={flexGrow}
                    headerRenderer={({ label, ...headerProps }) =>
                      tableHeaderRenderer({
                        headerHeight,
                        ...headerProps,
                        label: headerRenderer
                          ? headerRenderer({ label, ...headerProps })
                          : label,
                        align,
                      })
                    }
                    className={classes.tableData}
                    cellRenderer={({ cellData, ...cellProps }) =>
                      tableDataRenderer({
                        rowHeight,
                        ...cellProps,
                        cellData: cellRenderer
                          ? cellRenderer({ cellData, ...cellProps })
                          : cellData,
                        align,
                      })
                    }
                    {...columnProps}
                  />
                );
              }
            )}
          </ReactVirtualizedTable>
        );
      }}
    </AutoSizer>
  );
};

const StyledVirtualizedTable = styled(_VirtualizedTable).attrs(() => ({
  className: classes.table,
}))`
  /* Prevent rows bleeding into sticky header  */
  .${classes.tableHeader} {
    background: ${tokens['color-elevation-surface']};
  }

  .${classes.tableRow} {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 2;
  }

  .${classes.tableHeader}, .${classes.tableData} {
    min-width: 0px;
  }

  .${classes.table} .ReactVirtualized__Table__headerTruncatedText {
    display: inline-block;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .${classes.table} .ReactVirtualized__Table__sortableHeaderColumn {
    cursor: pointer;
  }

  .${classes.table} .ReactVirtualized__Table__sortableHeaderIconContainer {
    display: flex;
    align-items: center;
  }
  .${classes.table} .ReactVirtualized__Table__sortableHeaderIcon {
    flex: 0 0 24px;
    height: 1em;
    width: 1em;
    fill: currentColor;
  }
`;

const VirtualizedTable = (args: VirtualizedTableProps) => (
  <StyledVirtualizedTable {...args} />
);

export default VirtualizedTable;
