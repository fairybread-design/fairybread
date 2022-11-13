import React, { Component, ErrorInfo, ReactNode } from 'react';
import Heading from '../../components/heading';
import Section from '../../components/section';
import Text from '../../components/text';
import Head from 'next/head';
import Grid from '../../components/grid';
import Stack from '../../components/stack';
import Alert from '../../components/alert';
import Button from '../../components/button';
import { captureMessage } from '@sentry/nextjs';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * TODO: Unsure if this prevents Sentry reporting errors through _error.tsx?
 */
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);

    if (
      typeof window !== 'undefined' &&
      process.env.VERCEL_ENV === 'production' &&
      process.env.NEXT_PUBLIC_SENTRY_DSN
    ) {
      captureMessage(`Client-side exception: ${error} '${errorInfo}'`);
    }
  }

  public render() {
    if (this.state.hasError) {
      // Clear ALL local storage incase a form input has broken the website
      if (typeof window !== 'undefined') {
        localStorage.clear();
      }

      return (
        <>
          <Head>
            <title>Client-side error · Figura</title>
          </Head>
          <Section>
            <Stack direction="vertical" size="lg">
              <Grid>
                <Grid.Item span={{ xxs: 12, md: 9, lg: 7 }}>
                  <Heading level={1} noMarginTop>
                    Something went wrong 😔
                  </Heading>
                  <Alert
                    title="Client-side error"
                    appearance="danger"
                    isInline
                  ></Alert>
                  <Text>
                    Something broke, probably because I suck at writing code.
                  </Text>
                  <Text>
                    I&apos;ve been notified of the issue. Sorry about that.
                  </Text>
                  <Button onClick={() => location.reload()}>
                    Try reloading
                  </Button>
                </Grid.Item>
              </Grid>
            </Stack>
          </Section>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
