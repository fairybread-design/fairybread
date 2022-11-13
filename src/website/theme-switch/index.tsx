import { useCallback, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import useSound from 'use-sound';

type Mode = 'light' | 'dark' | undefined;

export interface ThemeSwitchProps {
  mode?: Mode;
  onToggleTheme: () => void;
  controlledBy: 'system' | 'user';
}

const ThemeSwitch = ({
  mode,
  onToggleTheme,
  controlledBy,
}: ThemeSwitchProps) => {
  const [playOn] = useSound('/sounds/light-switch-on.mp3');
  const [playOff] = useSound('/sounds/light-switch-off.mp3');

  /**
   * The last known mode. This is used to detect when a sound indicator needs to be played
   */
  const lastMode = useRef<Mode>(mode);

  /**
   * The sound must be played in a useEffect, because browsers will prevent sounds playing
   * until the first interaction. Chrome seems to disregard any sounds played by the callstack
   * of the onClick handler.
   */
  useEffect(() => {
    if (lastMode.current === mode) return;

    lastMode.current = mode;

    // Don't play sounds if theme changes from system preferences
    if (controlledBy === 'system') return;

    if (mode === 'light') {
      playOn();
    } else if (mode === 'dark') {
      playOff();
    }
  }, [mode, controlledBy]);

  const handleToggleTheme = useCallback(() => {
    onToggleTheme();
  }, [mode]);

  return (
    <Wrapper
      type="button"
      $mode={mode}
      onClick={handleToggleTheme}
      title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
    >
      <Icon $mode={mode} />
    </Wrapper>
  );
};

const TOGGLE_HEIGHT = '16em';
const RADIUS = '10em';
const COLOR_NIGHT = '#423966';
const MOON_COLOR = '#d9fbff';
const DAY_COLOR = '#ffbf71';

const wrapperLightStyles = css`
  background: ${DAY_COLOR};
`;
const wrapperDarkStyles = css`
  background: ${COLOR_NIGHT};
`;

const Wrapper = styled.button<{ $mode: Mode }>`
  appearance: none;
  outline: 0;
  border: 0;
  padding: 0;
  cursor: pointer;
  margin: 0 auto;
  /* change size of toggle with font-size */
  font-size: 10%;
  position: relative;
  height: ${TOGGLE_HEIGHT};
  width: 30em;
  border-radius: ${TOGGLE_HEIGHT};
  transition: background 500ms ease-in-out, filter 200ms ease;

  &:hover {
    filter: contrast(1.15);
  }
  &:active {
    filter: contrast(1.3);
  }

  @media (prefers-color-scheme: light) {
    ${({ $mode = 'light' }) => {
      if ($mode === 'light') {
        return wrapperLightStyles;
      } else if ($mode === 'dark') {
        return wrapperDarkStyles;
      }
    }}
  }

  @media (prefers-color-scheme: dark) {
    ${({ $mode = 'dark' }) => {
      if ($mode === 'light') {
        return wrapperLightStyles;
      } else if ($mode === 'dark') {
        return wrapperDarkStyles;
      }
    }}
  }
`;

const iconLightStyles = css`
  top: 4.5em;
  left: 18em;
  transform: rotate(0deg);
  width: 7em;
  height: 7em;
  background: #fff;
  box-shadow: 3em 3em 0 5em #fff inset, 0 -5em 0 -2.7em #fff,
    3.5em -3.5em 0 -3em #fff, 5em 0 0 -2.7em #fff, 3.5em 3.5em 0 -3em #fff,
    0 5em 0 -2.7em #fff, -3.5em 3.5em 0 -3em #fff, -5em 0 0 -2.7em #fff,
    -3.5em -3.5em 0 -3em #fff;
`;

const iconDarkStyles = css`
  top: 3em;
  left: 3em;
  transform: rotate(-75deg);
  width: ${RADIUS};
  height: ${RADIUS};
  background: ${COLOR_NIGHT};
  box-shadow: 3em 2.5em 0 0em ${MOON_COLOR} inset,
    rgba(255, 255, 255, 0.1) 0em -7em 0 -4.5em,
    rgba(255, 255, 255, 0.1) 3em 7em 0 -4.5em,
    rgba(255, 255, 255, 0.1) 2em 13em 0 -4em,
    rgba(255, 255, 255, 0.1) 6em 2em 0 -4.1em,
    rgba(255, 255, 255, 0.1) 8em 8em 0 -4.5em,
    rgba(255, 255, 255, 0.1) 6em 13em 0 -4.5em,
    rgba(255, 255, 255, 0.1) -4em 7em 0 -4.5em,
    rgba(255, 255, 255, 0.1) -1em 10em 0 -4.5em;
`;

const Icon = styled.div<{ $mode: Mode }>`
  position: absolute;
  display: block;
  border-radius: 50%;
  transition: all 400ms ease-in-out;

  @media (prefers-color-scheme: light) {
    ${({ $mode = 'light' }) => {
      if ($mode === 'light') {
        return iconLightStyles;
      } else if ($mode === 'dark') {
        return iconDarkStyles;
      }
    }}
  }

  @media (prefers-color-scheme: dark) {
    ${({ $mode = 'dark' }) => {
      if ($mode === 'light') {
        return iconLightStyles;
      } else if ($mode === 'dark') {
        return iconDarkStyles;
      }
    }}
  }
`;

export default ThemeSwitch;
