import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Layer, { MainPile } from '..';
import type { LayerMount } from './types';
import Button from '../../button';
import styled, { keyframes } from 'styled-components';
import Stack from '../../stack';
import Switch from '../../switchh';
import Pile from './components/pile/pile';

export default {
  title: 'Design System/Layer',
  component: MainPile,
  argTypes: {
    onMount: {
      action: 'mount',
    },
    onUnmount: {
      action: 'unmount',
    },
  },
} as ComponentMeta<typeof MainPile>;

const allDemoLayers: Array<
  LayerMount & {
    children: React.ReactNode;
    background: string;
  }
> = [
  {
    children: 'Front top',
    category: 'modal',
    id: '1',
    position: 'top',
    side: 'front',
    background: '0 255 187',
  },
  {
    children: 'Front top',
    category: 'modal',
    id: '2',
    position: 'top',
    side: 'front',
    background: '161 0 255',
  },
  {
    children: 'Front bottom',
    category: 'modal',
    id: '22',
    position: 'bottom',
    side: 'front',
    background: '77 77 77',
  },
  {
    children: 'Back bottom',
    category: 'modal',
    id: '3',
    position: 'bottom',
    side: 'back',
    background: '255 0 0',
  },
  {
    children: 'Back top',
    category: 'modal',
    id: '4',
    position: { insert: 'top' },
    side: 'back',
    background: '168 255 0',
  },
  {
    children: 'Back bottom',
    category: 'modal',
    id: '33',
    position: 'bottom',
    side: 'back',
    background: '155 255 255',
  },
  {
    children: 'Back top',
    category: 'modal',
    id: '5',
    position: { insert: 'top' },
    side: 'back',
    background: '255 172 0',
  },
  {
    children: 'Front top',
    category: 'modal',
    id: '6',
    position: 'top',
    side: 'front',
    background: '0 93 255',
  },
];

const Template: ComponentStory<typeof MainPile> = (args) => {
  const [is3d, setIs3d] = useState(true);
  const [sublayers, setSublayers] = useState(false);
  const [demoLayers, setDemoLayers] = useState<
    Array<
      LayerMount & {
        children: React.ReactNode;
        background: string;
      }
    >
  >([]);

  const index = 0;
  const multiplier = 0 * 30;

  return (
    <div>
      <Stack alignItems="center">
        <Button
          onClick={() =>
            setDemoLayers([...demoLayers, allDemoLayers[demoLayers.length]])
          }
        >
          Add layer
        </Button>
        <Switch
          id="toggle-3d"
          label="3D"
          defaultChecked={is3d}
          onChange={() => setIs3d(!is3d)}
        />
        <Switch
          id="toggle-sublayers"
          label="Sublayers"
          defaultChecked={sublayers}
          onChange={() => setSublayers(!sublayers)}
        />
      </Stack>

      <div
        style={{
          width: 250,
          height: 250,
          margin: '500px auto 0',
          transform: is3d
            ? `translateY(${-multiplier}px) rotateX(45deg) rotateZ(-45deg)`
            : 'none',
          transition: 'all 200ms ease',
        }}
      >
        <MainPile>
          <StyledLayer>
            <StyledPile $scale={1}>
              <StyledLayer2
                style={{
                  background: `rgba(200 200 200 / 80%)`,
                  border: is3d ? `none` : `1px solid #00000026`,
                  borderLeft: is3d
                    ? `3px solid #00000026`
                    : `1px solid #00000026`,
                  borderBottom: is3d
                    ? `3px solid #00000026`
                    : `1px solid #00000026`,
                }}
              >
                <div>
                  <Index>{index}</Index>
                  Base layer
                </div>
                {sublayers && (
                  <SubLayers>
                    <SubLayer
                      demoLayer={{
                        children: 'Front top',
                        category: 'modal',
                        id: '1',
                        position: 'top',
                        side: 'front',
                        background: '200 200 200',
                      }}
                      is3d={is3d}
                      id={1}
                    >
                      Test
                    </SubLayer>
                    <SubLayer
                      demoLayer={{
                        children: 'Front top',
                        category: 'modal',
                        id: '1',
                        position: 'top',
                        side: 'front',
                        background: '200 200 200',
                      }}
                      is3d={is3d}
                      id={2}
                    />
                    <SubLayer
                      demoLayer={{
                        children: 'Front top',
                        category: 'modal',
                        id: '1',
                        position: 'top',
                        side: 'front',
                        background: '200 200 200',
                      }}
                      is3d={is3d}
                      id={3}
                    />
                  </SubLayers>
                )}
              </StyledLayer2>
            </StyledPile>
          </StyledLayer>

          {demoLayers.map((demoLayer) => {
            return (
              <Layer
                key={demoLayer.id}
                id={demoLayer.id}
                category={demoLayer.category}
                position={demoLayer.position}
                side={demoLayer.side}
                isMainPile
                {...args}
              >
                {({ index }) => {
                  const multiplier = index * 50;
                  const scale = is3d ? 1 - index * 0.02 : 1;

                  return (
                    <StyledLayer
                      style={{
                        zIndex: index,
                        position: 'absolute',
                        transform: `translate3d(${multiplier}px, ${-multiplier}px, 0)`,
                        transition: 'all 200ms ease',
                      }}
                    >
                      <StyledPile $scale={scale}>
                        <StyledLayer2
                          style={{
                            background: `rgba(${demoLayer.background} / 80%)`,
                            border: is3d ? `none` : `1px solid #00000026`,
                            borderLeft: is3d
                              ? `3px solid #00000026`
                              : `1px solid #00000026`,
                            borderBottom: is3d
                              ? `3px solid #00000026`
                              : `1px solid #00000026`,
                          }}
                        >
                          <div>
                            <Index>{index}</Index>
                            {demoLayer.children}
                          </div>
                          {sublayers && (
                            <SubLayers>
                              <SubLayer
                                demoLayer={demoLayer}
                                is3d={is3d}
                                id={1}
                              >
                                Test
                              </SubLayer>
                              <SubLayer
                                demoLayer={demoLayer}
                                is3d={is3d}
                                id={2}
                              />
                              <SubLayer
                                demoLayer={demoLayer}
                                is3d={is3d}
                                id={3}
                              />
                            </SubLayers>
                          )}
                        </StyledLayer2>
                      </StyledPile>
                    </StyledLayer>
                  );
                }}
              </Layer>
            );
          })}
        </MainPile>
      </div>
    </div>
  );
};

const SubLayer = ({ id, demoLayer, is3d, children }: any) => {
  return (
    <Layer id={id}>
      {({ index }) => {
        const multiplier = index * 12;

        return (
          <StyledSubLayer
            style={{
              zIndex: index,
              transform: `translate3d(${multiplier}px, ${-multiplier}px, 0)`,
              top: 'calc(100% - 40px)',
              right: -40,
              background: `rgba(${demoLayer.background} / 80%)`,
              border: is3d ? `none` : `1px solid #00000026`,
              borderLeft: is3d ? `3px solid #00000026` : `1px solid #00000026`,
              borderBottom: is3d
                ? `3px solid #00000026`
                : `1px solid #00000026`,
            }}
          >
            Sublayer {id} {children}
          </StyledSubLayer>
        );
      }}
    </Layer>
  );
};

const fadeUpIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-25px, 25px, 0);
  }
  100% {
    opacity: 1;
  }
`;

const StyledPile = styled(Pile)<{ $scale: number }>`
  height: 100%;
  width: 100%;
  transform: scale(${({ $scale }) => $scale});
  transition: all 200ms ease;
`;

const SubLayers = styled.div`
  position: absolute;
  bottom: -10px;
  right: -10px;
`;

const StyledSubLayer = styled.div`
  box-shadow: -4px 4px 6px #9898c754;
  border-radius: 4px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  line-height: 1;
  position: absolute;
  right: 0;
  padding: 15px;
  background: #cfcfffc2;
  font-size: 13px;
  font-weight: bold;
  transition: all 200ms ease;
`;

const StyledLayer = styled.div`
  height: 250px;
  width: 250px;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  animation: ${fadeUpIn} 200ms ease;
`;

const StyledLayer2 = styled.div`
  box-shadow: -4px 4px 6px #9898c754;
  border-radius: 4px;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  line-height: 1;
  position: absolute;
  padding: 15px;
  background: #cfcfffc2;
  font-size: 24px;
  font-weight: bold;
  transition: all 200ms ease;
`;

const Index = styled.div`
  width: 22px;
  height: 22px;
  position: absolute;
  bottom: 5px;
  left: 5px;
  background: rgba(0, 0, 0, 0.3);
  padding: 2px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 16px;
  color: white;
`;

export const Default = Template.bind({});
Default.args = {};
