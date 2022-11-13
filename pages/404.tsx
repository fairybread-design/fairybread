import type { NextPage } from 'next';
import Heading from '../src/components/heading';
import Section from '../src/components/section';
import Text from '../src/components/text';
import Head from 'next/head';
import Grid from '../src/components/grid';
import Stack from '../src/components/stack';
import Alert from '../src/components/alert';
import { captureMessage } from '@sentry/browser';
import { useRouter } from 'next/router';
import Button from '../src/components/button';

const FourOhFour: NextPage = () => {
  if (
    typeof window !== 'undefined' &&
    process.env.VERCEL_ENV === 'production' &&
    process.env.NEXT_PUBLIC_SENTRY_DSN
  ) {
    captureMessage(`404 error: ${window.location.href}`);
  }

  const router = useRouter();

  return (
    <>
      <Head>
        <title>404 error · Figura</title>
      </Head>
      <Section>
        <Stack direction="vertical" size="lg">
          <Grid>
            <Grid.Item span={{ xxs: 12, md: 9, lg: 7 }}>
              <Heading level={1} noMarginTop>
                404 error 🔥
              </Heading>
              <Alert title="Page not found" appearance="danger" isInline>
                😱
              </Alert>
              <Text>
                I&apos;ve been notified of the issue. Sorry about that.
              </Text>
              <Button onClick={() => router.back()}>Go back</Button>
            </Grid.Item>
          </Grid>
        </Stack>
      </Section>
    </>
  );
};

export default FourOhFour;
