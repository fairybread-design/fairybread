import type { NextPage } from 'next';
import Link from 'next/link';
import Heading from '../src/components/heading';
import Section from '../src/components/section';
import Text from '../src/components/text';
import Grid from '../src/components/grid';
import Card from '../src/components/card';
import Stack from '../src/components/stack';

const Home: NextPage = () => {
  return (
    <>
      {/* No <Head> is used here. Home page uses _app.tsx site-wide defaults. */}
      <Section>
        <Stack direction="vertical" size="lg">
          <Grid>
            <Grid.Item span={{ xxs: 12, md: 9, lg: 7 }}>
              <Heading level={1} noMarginTop>
                Figura Design System
              </Heading>
              <Text>TODO</Text>
            </Grid.Item>
          </Grid>
          <Grid>
            <Grid.Item span={{ xxs: 12, md: 6, lg: 6 }}>
              <Card
                title="Components"
                renderLink={({ link: LinkComponent, children }) => (
                  <Link passHref href="/components">
                    <LinkComponent>{children}</LinkComponent>
                  </Link>
                )}
              >
                <Text>TODO</Text>
              </Card>
            </Grid.Item>
          </Grid>
        </Stack>
      </Section>
    </>
  );
};

export default Home;
