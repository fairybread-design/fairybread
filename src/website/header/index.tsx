import { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import Stack from '../../components/stack';
import tokens from '../../components/tokens';
import Container from '../../components/container';
import breakpoints from '../../styles/breakpoints';
import Link from 'next/link';
import Image from 'next/image';
import logoMark from '../../../public/logo-figura-finance.svg';
import ThemeSwitch from '../theme-switch';

export interface HeaderProps {}

type Theme = 'light' | 'dark' | undefined;

const Header = ({}: HeaderProps) => {
  const handleColorSchemeChange = useCallback((event: MediaQueryListEvent) => {
    const newColorScheme = event.matches ? 'dark' : 'light';

    setSystemTheme(newColorScheme);
  }, []);

  /**
   * The user-set theme. It takes priority over the system theme
   */
  const [theme, setTheme] = useState<Theme>(undefined);
  const [systemTheme, setSystemTheme] = useState<Theme>(undefined);

  // The actual current theme, taking system them and override into account
  const currentTheme = theme || systemTheme;

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  // Monitor the system theme
  useEffect(() => {
    if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        setSystemTheme('light');
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setSystemTheme('dark');
      }

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      /**
       * Check for compatibility differences across browsers.
       *
       * @see https://www.designcise.com/web/tutorial/how-to-fix-the-javascript-typeerror-matchmedia-addeventlistener-is-not-a-function
       *
       * It was causing this issue in Sentry
       * @see https://sentry.io/organizations/figura-finance/issues/3561561478/?project=6696297
       */
      if (mediaQuery?.addEventListener) {
        // TODO: Remove event listener on unmount
        mediaQuery.addEventListener('change', handleColorSchemeChange);
      } else {
        mediaQuery.addListener(handleColorSchemeChange);
      }
    }
  }, [setSystemTheme, handleColorSchemeChange]);

  const toggleTheme = useCallback(() => {
    let themeToSet: Theme;

    setTheme((currentTheme) => {
      if (currentTheme === undefined && window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
          themeToSet = 'dark';
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          themeToSet = 'light';
        }
      } else if (currentTheme !== 'dark') {
        themeToSet = 'dark';
      } else if (currentTheme === 'dark') {
        themeToSet = 'light';
      }
      return themeToSet;
    });
  }, []);

  return (
    <>
      <Head>
        {theme && (
          <>
            <meta
              name="theme-color"
              content={theme !== 'dark' ? '#4200fe' : '#464aff'}
              media={`(prefers-color-scheme: ${theme})`}
            />
            <meta
              name="theme-color"
              content={theme !== 'dark' ? '#4200fe' : '#464aff'}
            />
          </>
        )}
      </Head>
      <StyledHeader>
        <Container>
          <Stack justifyContent="space-between" isInline={false}>
            <Link href="/" passHref>
              <LogoWrapper>
                <LogoMark>
                  <Image
                    src={logoMark}
                    alt="Figura Finance logo"
                    width={40}
                    height={40}
                  />
                </LogoMark>
                <Logo>Figura</Logo>
              </LogoWrapper>
            </Link>

            <Stack alignItems="center">
              {/* 
              TODO: Navigation
              <nav>
                <Stack alignItems="baseline">
                  <Link href="/todo" passHref>
                    <NavigationLink>TODO</NavigationLink>
                  </Link>
                </Stack>
              </nav> */}
              <ThemeSwitch
                mode={currentTheme}
                onToggleTheme={toggleTheme}
                controlledBy={theme ? 'user' : 'system'}
              />
            </Stack>
          </Stack>
        </Container>
      </StyledHeader>
    </>
  );
};

// const NavigationLink = styled.a`
//   appearance: none;
//   border: 0;
//   outline: 0;
//   background: none;
//   padding: 0;
//   cursor: pointer;
//   width: auto;
//   color: ${tokens['color-text']};
//   text-decoration: none;
//   line-height: 1.1;

//   &:hover,
//   &:focus {
//     color: ${tokens['color-text-brand']};
//   }
//   &:active {
//     color: ${tokens['color-text-brand-hovered']};
//   }
// `;

const LogoWrapper = styled.a`
  color: ${tokens['color-text']};
  text-decoration: none;
  font-weight: bold;
  line-height: 1.1;
  display: flex;
  align-items: center;
  gap: ${tokens['space-xs']};

  ${breakpoints.up('sm', `gap: 12px;`)}
  ${breakpoints.up('md', `gap: ${tokens['space-sm']};`)}
`;

const Logo = styled.span`
  color: ${tokens['color-text']};
  font-size: 18px;
  font-weight: bold;
  line-height: 1.1;
  text-transform: lowercase;

  ${breakpoints.up('sm', 'font-size: 22px;')}
  ${breakpoints.up('md', 'font-size: 26px;')}
`;

const LogoMark = styled.span`
  width: 24px;

  ${breakpoints.up('sm', 'width: 30px;')}
  ${breakpoints.up('md', 'width: 36px;')}

  & > span {
    display: block !important;
  }
`;

const StyledHeader = styled.header`
  padding: ${tokens['space-sm']} 0;
  color: ${tokens['color-text-inverse']};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpoints.up('md', `padding: ${tokens['space-md']} 0;`)}
`;

export default Header;
