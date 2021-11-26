import React, { useState, useEffect, useRef } from 'react';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import ReactPlayer from 'react-player/lazy';
import * as _screenfull from 'screenfull';
import { Screenfull } from 'screenfull';

const screenfull = _screenfull as Screenfull;

import Spinner from '@components/Spinner/Spinner';
import PlayIcon from '@modules/icons/PlayIcon';
import SoundVolumeIcon from '@modules/icons/SoundVolumeIcon';
import SoundMutedIcon from '@modules/icons/SoundMutedIcon';

import { smoothScroll } from '@utils/misc';

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
      zIndex: 0,
      [theme.breakpoints.up('md')]: {
        transform: 'scale(1.3)'
      },
      [theme.breakpoints.down('sm')]: {
        transform: 'scale(2)'
      }
    },
    overlay: {
      position: 'relative',
      background:
        'linear-gradient(0deg, #091527fa 0.01%, rgba(9, 21, 39, 0.87) 43.52%, rgba(9, 21, 39, 0.24) 93.23%, rgba(9, 21, 39, 0) 99.99%)',
      alignSelf: 'end',
      padding: '30px 0',
      display: 'flex',
      textAlign: 'center',
      color: '#f5f0e4',
      fontWeight: 300,
      zIndex: 0
    },
    controls: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingBottom: '1rem'
    },
    controlBtn: {
      height: 38,
      width: 38,
      padding: 0
    },
    playIcon: {
      width: '34px',
      height: '32px'
    },
    volumeIcon: {
      width: '32px',
      height: '30px'
    }
  })
);

export const HomeVideo = ({
  isIOS,
  siteCoordinator: {
    domain: { data }
  }
}) => {
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

  const scrollDownHandler = () =>
    smoothScroll.scrollToElementById('home-intro');

  return (
    <Box component="section" className={classes.videoWrapper}>
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
      <Box className={classes.overlay} style={{ paddingBottom: '3.5rem' }}>
        <Container>
          <div
            className={classes.controls}
            style={{ display: isLoading ? 'none' : 'flex' }}
          >
            <IconButton
              className={classes.controlBtn}
              id="button-play-fullscreen"
              onClick={() => {
                setMuted(false);
                if (screenfull.isEnabled) {
                  screenfull.request(playerRef.current.wrapper);
                }
              }}
              hidden={isIOS}
            >
              <PlayIcon className={classes.playIcon} />
            </IconButton>
            <IconButton
              className={classes.controlBtn}
              id="button-sound-toggle"
              onClick={() => setMuted(!muted)}
            >
              {muted ? (
                <SoundVolumeIcon className={classes.volumeIcon} />
              ) : (
                <SoundMutedIcon className={classes.volumeIcon} />
              )}
            </IconButton>
          </div>

          <Typography
            variant="h1"
            color="inherit"
            style={{ marginBottom: '15px' }}
          >
            {data?.heroHeading}
          </Typography>

          <Typography
            component="div"
            color="inherit"
            style={{ marginBottom: '32px' }}
          >
            {data?.heroSubHeading}
          </Typography>

          <Hidden xsDown>
            <Box className="scrollDown">
              <IconButton onClick={scrollDownHandler}>
                <svg
                  width="16"
                  height="21"
                  viewBox="0 0 16 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 1L8 9L1 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 11L8 19L1 11"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </IconButton>
            </Box>
          </Hidden>
        </Container>
      </Box>
    </Box>
  );
};

export default HomeVideo;
