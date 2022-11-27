// Inspired by https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/button/stories/button.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useInterpret } from '@xstate/react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import {
  defaultSnapProps,
  SnapPointProps,
} from 'react-spring-bottom-sheet/dist/types';
import { triviaJamSharedMachine } from '../../state';
import { GameContext } from '../../state/game.context';
import { Leaderboard } from './leaderboard.component';

const DEFAULT_SNAP_POINTS = ({ footerHeight, maxHeight }: SnapPointProps) => [
  footerHeight + 24,
  maxHeight * 0.6,
  maxHeight * 0.9,
];

const DEFAULT_SNAP = ({ snapPoints }: defaultSnapProps) => snapPoints[1];

export default {
  component: Leaderboard,
  title: 'Components/Leaderboard',
  decorators: [
    (Story) => {
      return (
        <BottomSheet
          open={true}
          blocking={false}
          defaultSnap={DEFAULT_SNAP}
          snapPoints={DEFAULT_SNAP_POINTS}
          expandOnContentDrag={true}
          // snapPoints={({ minHeight }) => [minHeight + 24]}
          // footer={FooterComponent}
          // header={header}
        >
          <Story />
        </BottomSheet>
      );
    },
  ],
} as ComponentMeta<typeof Leaderboard>;

export const Default: ComponentStory<typeof Leaderboard> = (args) => (
  <Leaderboard {...args} />
);

Default.args = {
  scoresByPlayerName: {
    Foo: 3,
    Bar: 2,
  },
};