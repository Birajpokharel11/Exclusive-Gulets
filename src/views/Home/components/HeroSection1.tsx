import React, { useState, useEffect, useRef } from 'react';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import ReactPlayer from 'react-player/lazy';
import * as _screenfull from 'screenfull';
import { Screenfull } from 'screenfull';

const screenfull = _screenfull as Screenfull;

import Spinner from '@components/Spinner';

const useStyles = makeStyles((theme) =>
  createStyles({
    videoWrapper: {
      position: 'relative',
      display: 'grid',
      backgroundColor: '#061528',
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    },
    loaderWrapper: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 0
    },
    player: {
      position: 'absolute',
      left: 0,
      top: 0,
      padding: 0,
      zIndex: 1,
      [theme.breakpoints.up('md')]: {
        transform: 'scale(1.3)'
      },
      [theme.breakpoints.down('sm')]: {
        transform: 'scale(2)'
      }
    }
  })
);

export const HomeVideo = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

  // constants
  const MAX_VOLUME = 0.5;

  const URLS_LIST = {
    window: {
      sm: 'https://vimeo.com/475024302',
      lg: 'https://vimeo.com/475024094'
    },
    fullscreen: {
      sm: 'https://vimeo.com/475024261',
      lg: 'https://vimeo.com/475024129'
    }
  };

  // refs
  let playerRef = useRef(null);

  //  state
  const [url, setUrl] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const screenfullCallback = () => !screenfull.isFullscreen && setMuted(true);

    screenfull.isEnabled && screenfull.on('change', screenfullCallback);

    return () => screenfull.off('change', screenfullCallback);
  }, []);

  useEffect(() => {
    let url = '';
    if (matchesMD) {
      url = screenfull.isFullscreen
        ? URLS_LIST.fullscreen.lg
        : URLS_LIST.window.lg;
    } else {
      url = screenfull.isFullscreen
        ? URLS_LIST.fullscreen.sm
        : URLS_LIST.window.sm;
    }

    setUrl(url);
  }, [matchesMD]);

  return (
    <Box className={classes.videoWrapper}>
      {isLoading ? (
        <div className={classes.loaderWrapper}>
          <Spinner width="100%" height="50%" />
        </div>
      ) : null}

      <ReactPlayer
        url={url}
        playing={true}
        volume={MAX_VOLUME}
        muted={muted}
        className={classes.player}
        style={{ visibility: isLoading ? 'hidden' : 'visible' }}
        width="100%"
        height="100%"
        loop
        autoPlay
        playsinline
        ref={playerRef}
        onStart={() => setLoading(false)}
      />
    </Box>
  );
};

export default HomeVideo;
