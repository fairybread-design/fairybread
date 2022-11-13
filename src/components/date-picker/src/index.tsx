import React, { forwardRef, useState, useEffect, useRef } from 'react';
import ReactDatePicker, { CalendarContainer } from 'react-datepicker';
import type { ReactDatePickerProps } from 'react-datepicker';
import Button from '../../button';
import Stack from '../../stack';
import { NumberInput } from '../../input';
import type { InputProps } from '../../input';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/sharp-solid-svg-icons';

// Styles have been copied from this file.
// There will be missing styles in some cases due to simplifying the CSS.
// import 'react-datepicker/dist/react-datepicker.css';
import styled, { createGlobalStyle } from 'styled-components';
import breakpoints from '../../../styles/breakpoints';
import tokens from '../../tokens';
import Layer from '../../layer';

export interface DatePickerProps
  extends Omit<
      ReactDatePickerProps,
      'customInput' | 'placeholderText' | 'selected' | 'value' | 'onChange'
    >,
    Pick<InputProps, 'placeholder' | 'label' | 'help' | 'onOpenHelp'> {
  defaultValue?: Date;
  value?: ReactDatePickerProps['selected'];
  onChange?: ReactDatePickerProps['onChange'];
  inputMode?: InputProps['inputMode'];
  showDone?: boolean;
  showClear?: boolean;
  disableAutocomplete?: boolean;
}

const CustomInput = forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <NumberInput
      ref={ref}
      numberFormat={{
        format: '##/##/####',
        mask: '_',
      }}
      {...props}
    />
  );
});

CustomInput.displayName = 'CustomInput';

const _CalendarContainer = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <CalendarContainer className={className}>{children}</CalendarContainer>
  );
};

const GlobalStyle = createGlobalStyle`
  .react-datepicker-popper {
    z-index: 99999;

    ${breakpoints.down('sm', 'width: calc(100vw - (16px * 2));')}
  }
`;

const DatePicker = ({
  className,
  defaultValue,
  onChange,
  placeholder = 'dd/mm/yyyy',
  label,
  inputMode = 'numeric',
  dateFormat = 'dd/MM/yyyy',
  value,
  showDone = true,
  showClear = true,
  disableAutocomplete,
  help,
  onOpenHelp,
  popperModifiers = [
    {
      name: 'offset',
      options: {
        // Offset Y
        offset: [0, 8],
      },
    },
  ],
  ...rest
}: DatePickerProps) => {
  // Necessary for uncontrolled behavior by default
  const [startDate, setStartDate] = useState<Date | null>(defaultValue || null);

  const pickerRef = useRef<ReactDatePicker>(null);

  useEffect(() => {
    if (value !== undefined) {
      setStartDate(value);
    }
  }, [value]);

  return (
    <div className={className}>
      <ReactDatePicker
        ref={pickerRef}
        popperContainer={(props) => {
          return (
            <Layer category="date-picker">
              <div {...props}></div>
            </Layer>
          );
        }}
        selected={startDate || value}
        onChange={(date, event) => {
          setStartDate(date);
          if (onChange) {
            onChange(date, event);
          }
        }}
        calendarContainer={StyledCalendarContainer}
        customInput={
          <CustomInput
            disableAutocomplete={disableAutocomplete}
            label={label}
            inputMode={inputMode}
            value={value}
            help={help}
            onOpenHelp={onOpenHelp}
          />
        }
        dateFormat={dateFormat}
        placeholderText={placeholder}
        showPopperArrow={false}
        previousMonthButtonLabel={
          <span>
            <span className="react-datepicker__navigation__label">
              Next month
            </span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        }
        nextMonthButtonLabel={
          <span>
            <span className="react-datepicker__navigation__label">
              Next month
            </span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        }
        popperModifiers={popperModifiers}
        {...rest}
      >
        {(showClear === true || showDone === true) && (
          <div className="react-datepicker__footer">
            <Stack justifyContent="space-between" isInline={false}>
              {showClear && (
                <Button
                  appearance="subtle"
                  onClick={() => {
                    // Ref seems to be missing types
                    // @ts-ignore
                    pickerRef.current?.clear();
                    pickerRef.current?.setOpen(false);
                  }}
                >
                  Clear
                </Button>
              )}
              {showDone && (
                <Button onClick={() => pickerRef.current?.setOpen(false)}>
                  Done
                </Button>
              )}
            </Stack>
          </div>
        )}
      </ReactDatePicker>
      <GlobalStyle />
    </div>
  );
};

const dayWidthDesktop = '40px';
const dayWidthMobile = 'calc(100% / 7);';

// TODO: Finish styling / theming.
// Missing interaction states, colors, etc.

/**
 * This uses [react-datepicker](https://github.com/Hacker0x01/react-datepicker/), but is simplified to only support date inputs.
 * Many features like date ranges, times, months etc. are not yet supported due to the large scope of work required.
 * @see https://reactdatepicker.com/
 */
const StyledCalendarContainer = styled(_CalendarContainer)`
  position: relative;
  z-index: 999999;

  font-size: ${tokens['typography-size']};
  background-color: ${tokens['color-elevation-surface-raised']};
  border-radius: ${tokens['size-borderRadius']};
  padding: ${tokens['space-sm']};
  box-shadow: ${tokens['color-elevation-shadow-raised']};

  ${breakpoints.up('sm', 'display: inline-block;')}

  .react-datepicker-wrapper {
    padding: 0;
    border: 0;
    width: 100%;
  }
  .react-datepicker__tab-loop {
    position: relative;
  }

  .react-datepicker__header {
    text-align: center;
    position: relative;
  }
  .react-datepicker__header--time {
    padding-bottom: 8px;
    padding-left: 5px;
    padding-right: 5px;
  }

  .react-datepicker__month {
    text-align: center;
  }

  .react-datepicker__footer {
    margin-top: ${tokens['space-sm']};
  }

  .react-datepicker__year-dropdown-container--select,
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__month-year-dropdown-container--select,
  .react-datepicker__year-dropdown-container--scroll,
  .react-datepicker__month-dropdown-container--scroll,
  .react-datepicker__month-year-dropdown-container--scroll {
    display: inline-block;
    margin: 0 2px;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    font-weight: bold;
  }

  .react-datepicker-time__header {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .react-datepicker__navigation {
    appearance: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 10px;
    padding: 0;
    border: none;
    z-index: 1;
    height: ${dayWidthDesktop};
    width: ${dayWidthDesktop};
    color: ${tokens['color-icon']};
    font-size: ${tokens['size-icon-sm']};
  }

  .react-datepicker__navigation__label {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  .react-datepicker__navigation--previous {
    left: ${tokens['space-sm']};
  }
  .react-datepicker__navigation--next {
    right: ${tokens['space-sm']};
  }
  .react-datepicker__navigation:hover {
    color: ${tokens['color-icon-hovered']};
  }
  .react-datepicker__navigation:active {
    color: ${tokens['color-icon-pressed']};
  }

  .react-datepicker__year {
    text-align: center;
  }
  .react-datepicker__year-wrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: 180px;
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap;
  }

  .react-datepicker__day-name {
    font-size: ${tokens['typography-size-xxxs']};
    color: ${tokens['color-text-subtle']};
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    user-select: none;
    display: inline-block;
    width: ${dayWidthMobile};
    line-height: ${dayWidthDesktop};
    text-align: center;

    ${breakpoints.up('sm', `width: ${dayWidthDesktop};`)}
  }

  .react-datepicker__day {
    border-radius: ${tokens['size-borderRadius']};
    font-size: ${tokens['typography-size-xs']};
  }

  .react-datepicker__day--keyboard-selected {
    ${
      // Remove odd focus on mobile...
      breakpoints.down('sm', `outline: none;`)
    }
  }

  .react-datepicker__day--outside-month {
    visibility: hidden;
  }

  .react-datepicker__day,
  .react-datepicker__month-text,
  .react-datepicker__quarter-text,
  .react-datepicker__year-text {
    cursor: pointer;
  }
  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    background-color: ${tokens['color-background-neutral']};
  }
  .react-datepicker__day:active,
  .react-datepicker__month-text:active,
  .react-datepicker__quarter-text:active,
  .react-datepicker__year-text:active {
    background-color: ${tokens['color-background-brand-pressed']};
    color: ${tokens['color-text-inverse']};
  }
  .react-datepicker__day--today,
  .react-datepicker__month-text--today,
  .react-datepicker__quarter-text--today,
  .react-datepicker__year-text--today {
    font-weight: bold;
    color: ${tokens['color-text-brand']};
  }
  .react-datepicker__day--highlighted,
  .react-datepicker__month-text--highlighted,
  .react-datepicker__quarter-text--highlighted,
  .react-datepicker__year-text--highlighted {
    background-color: ${tokens['color-background-success']};
    color: ${tokens['color-text-inverse']};
  }
  .react-datepicker__day--highlighted:hover,
  .react-datepicker__month-text--highlighted:hover,
  .react-datepicker__quarter-text--highlighted:hover,
  .react-datepicker__year-text--highlighted:hover {
    background-color: ${tokens['color-background-success']};
  }
  .react-datepicker__day--highlighted-custom-1,
  .react-datepicker__month-text--highlighted-custom-1,
  .react-datepicker__quarter-text--highlighted-custom-1,
  .react-datepicker__year-text--highlighted-custom-1 {
    color: magenta;
  }
  .react-datepicker__day--highlighted-custom-2,
  .react-datepicker__month-text--highlighted-custom-2,
  .react-datepicker__quarter-text--highlighted-custom-2,
  .react-datepicker__year-text--highlighted-custom-2 {
    color: green;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    background-color: ${tokens['color-background-brand']};
    font-weight: bold;
    color: ${tokens['color-text-inverse']};
  }
  .react-datepicker__day--selected:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--in-range:hover,
  .react-datepicker__month-text--selected:hover,
  .react-datepicker__month-text--in-selecting-range:hover,
  .react-datepicker__month-text--in-range:hover,
  .react-datepicker__quarter-text--selected:hover,
  .react-datepicker__quarter-text--in-selecting-range:hover,
  .react-datepicker__quarter-text--in-range:hover,
  .react-datepicker__year-text--selected:hover,
  .react-datepicker__year-text--in-selecting-range:hover,
  .react-datepicker__year-text--in-range:hover {
    background-color: ${tokens['color-background-brand-hovered']};
  }
  .react-datepicker__day--selected:active,
  .react-datepicker__day--in-selecting-range:active,
  .react-datepicker__day--in-range:active,
  .react-datepicker__month-text--selected:active,
  .react-datepicker__month-text--in-selecting-range:active,
  .react-datepicker__month-text--in-range:active,
  .react-datepicker__quarter-text--selected:active,
  .react-datepicker__quarter-text--in-selecting-range:active,
  .react-datepicker__quarter-text--in-range:active,
  .react-datepicker__year-text--selected:active,
  .react-datepicker__year-text--in-selecting-range:active,
  .react-datepicker__year-text--in-range:active {
    background-color: ${tokens['color-background-brand-pressed']};
  }

  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range),
  .react-datepicker__month-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range),
  .react-datepicker__quarter-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range),
  .react-datepicker__year-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range) {
    background-color: ${tokens['color-background-brand']};
  }
  .react-datepicker__month--selecting-range
    .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range, .react-datepicker__month-text--in-selecting-range, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__year-text--in-selecting-range),
  .react-datepicker__month--selecting-range
    .react-datepicker__month-text--in-range:not(.react-datepicker__day--in-selecting-range, .react-datepicker__month-text--in-selecting-range, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__year-text--in-selecting-range),
  .react-datepicker__month--selecting-range
    .react-datepicker__quarter-text--in-range:not(.react-datepicker__day--in-selecting-range, .react-datepicker__month-text--in-selecting-range, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__year-text--in-selecting-range),
  .react-datepicker__month--selecting-range
    .react-datepicker__year-text--in-range:not(.react-datepicker__day--in-selecting-range, .react-datepicker__month-text--in-selecting-range, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__year-text--in-selecting-range) {
    background-color: ${tokens['color-background-neutral']};
  }
  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    cursor: not-allowed;
    color: ${tokens['color-text-disabled']};
  }
  .react-datepicker__day--disabled:hover,
  .react-datepicker__day--disabled:active,
  .react-datepicker__month-text--disabled:hover,
  .react-datepicker__month-text--disabled:active,
  .react-datepicker__quarter-text--disabled:hover,
  .react-datepicker__quarter-text--disabled:active,
  .react-datepicker__year-text--disabled:hover,
  .react-datepicker__year-text--disabled:active {
    background-color: transparent;
    color: ${tokens['color-text-disabled']};
  }

  .react-datepicker__input-container {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .react-datepicker__year-read-view,
  .react-datepicker__month-read-view,
  .react-datepicker__month-year-read-view {
    border: ${tokens['size-borderWidth']} solid transparent;
    border-radius: ${tokens['size-borderRadius']};
    position: relative;
  }
  .react-datepicker__year-read-view:hover,
  .react-datepicker__month-read-view:hover,
  .react-datepicker__month-year-read-view:hover {
    cursor: pointer;
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    transform: rotate(135deg);
    right: -16px;
    top: 0;
  }
  .react-datepicker__year-read-view:hover
    .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__year-read-view:hover
    .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-read-view:hover
    .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view:hover
    .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover
    .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover
    .react-datepicker__month-read-view--down-arrow {
    border-top-color: ${tokens['color-icon-hovered']};
  }

  .react-datepicker__close-icon {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: 0;
    padding: 0 6px 0 0;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
  }
  .react-datepicker__close-icon::after {
    cursor: pointer;
    background-color: #216ba5;
    color: ${tokens['color-text-inverse']};
    border-radius: ${tokens['size-borderRadius']};
    height: 16px;
    width: 16px;
    padding: 2px;
    font-size: 12px;
    line-height: 1;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    content: '×';
  }

  .react-datepicker__portal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: ${tokens['color-blanket']};
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 2147483647;
  }
  .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__day,
  .react-datepicker__portal .react-datepicker__time-name {
    width: 3rem;
    line-height: 3rem;
  }
  @media only screen and (max-width: 400px), (max-height: 550px) {
    .react-datepicker__portal .react-datepicker__day-name,
    .react-datepicker__portal .react-datepicker__day,
    .react-datepicker__portal .react-datepicker__time-name {
      width: 2rem;
      line-height: 2rem;
    }
  }
  .react-datepicker__portal .react-datepicker__current-month,
  .react-datepicker__portal .react-datepicker-time__header {
    font-size: 1.44rem;
  }
`;

export default DatePicker;
