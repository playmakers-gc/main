import {
  Entity,
  BananaTradersPlayerCommand,
  BananaTradersPlayerContext,
  WithSenderId,
} from '@explorers-club/schema';
import { World } from 'miniplex';
import { createMachine } from 'xstate';

export const createStrikersPlayerMachine = ({
  world,
}: {
  world: World;
  entity: Entity;
}) => {
  return createMachine({
    id: 'StrikersPlayerMachine',
    type: 'parallel',
    schema: {
      context: {} as BananaTradersPlayerContext,
      events: {} as WithSenderId<BananaTradersPlayerCommand>,
    },
    states: {},
  });
};
