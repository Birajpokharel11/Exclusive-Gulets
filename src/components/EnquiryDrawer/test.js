import { useSwipeable } from 'react-swipeable';

const expandPlayer = () => {
  if (playerState === 'minimized') {
    setPlayerState('maximized');
    setMinimized(true);
    history.push({
      pathname: '/play',
      search: `?id=${currentVideoSnippet.id}`,
      state: { modal: true }
    });
  }
};

const swipeHandlerMin = useSwipeable({
  onSwipedUp: (e) => {
    expandPlayer();
  }
});

const returnMinimizedPlayer = () => {
  if (playerState === 'minimized' && currentVideoSnippet.id) {
    return (
      <div {...swipeHandlerMin}>
        <EnquiryForm setOpen={setOpen} />
      </div>
    );
  }
};
