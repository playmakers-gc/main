import { useSelector } from '@xstate/react';
import { Claimable } from './claimable.component';
import { useClubScreenActor } from './club-screen.hooks';
import { selectIsClaimable } from './club-screen.selectors';
import { GameSelect } from './game-select';
import { Party } from './party';

export const ClubScreen = () => {
  const clubScreenActor = useClubScreenActor();

  const isClaimable = useSelector(clubScreenActor, selectIsClaimable);

  if (isClaimable) {
    return <Claimable />;
  }

  return (
    <>
      <GameSelect />
      <Party />
    </>
  );
};

// export const ClubScreen = () => {
//   const clubScreenActor = useClubScreenActor();

//   const playerName = useSelector(clubScreenActor, selectHostPlayerName);
//   const isClaimable = useSelector(clubScreenActor, selectIsClaimable);
//   const doesNotExist = useSelector(clubScreenActor, selectDoesNotExist);
//   const isClaiming = useSelector(clubScreenActor, selectIsClaiming);
//   const isConnecting = useSelector(clubScreenActor, selectIsConnecting);
//   const isConnected = useSelector(clubScreenActor, selectIsConnected);

//   if (!playerName) {
//     return <Container>error parsing URL</Container>;
//   }

//   if (doesNotExist) {
//     return <DoesNotExist />;
//   }

//   if (isClaimable) {
//     return <Claimable />;
//   }

//   if (isClaiming) {
//     return <Claiming />;
//   }

//   if (isConnecting) {
//     return <Connecting />;
//   }

//   if (isConnected) {
//     return <Connected />;
//   }

//   return <Loading />;
// };