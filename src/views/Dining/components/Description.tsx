import React from 'react';
import { Box, Divider, IconButton, Typography } from '@material-ui/core';
import { createMarkup } from '@utils/misc';
import Image from 'next/image';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import { createStyles, makeStyles } from '@material-ui/core/styles';
interface Dates {
  created_at?: Date;
}
interface Props {
  content?: any;
  SideImage?: URL;
  individual?: Dates;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    },
    Image: {
      width: '100%',
      height: 'auto'
    },
    Divider: {
      display: 'flex',
      gap: '1rem',
      padding: '0px 15px',
      [theme.breakpoints.down(1000)]: {
        display: 'block'
      }
    },
    Text: {
      flex: '0.5',
      [theme.breakpoints.down(1000)]: {
        flex: '1'
      }
    },
    ImageBox: {
      flex: '0.5',
      marginTop: '110px',
      [theme.breakpoints.down(1000)]: {
        display: 'none'
      }
    },
    ImageBox2: {
      display: 'none',
      marginTop: '110px',
      [theme.breakpoints.down('sm')]: {
        display: 'block'
      }
    },
    icons: { color: '#2A398D' }
  })
);

export default function Description({ content, SideImage, individual }: Props) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.Divider}>
        {' '}
        <Box className={classes.ImageBox2}>
          <img className={classes.Image} src={SideImage} alt="sideImage" />
        </Box>
        <Box className={classes.Text}>
          <Typography
            component="div"
            color="inherit"
            variant="subtitle1"
            dangerouslySetInnerHTML={createMarkup(content)}
          />
        </Box>
        <Box className={classes.ImageBox}>
          <img className={classes.Image} src={SideImage} alt="sideImage" />
        </Box>
      </Box>
      <Box style={{ margin: '64px 0' }}>
        <Divider style={{ padding: '0px 15px' }} />
        <Box
          style={{
            display: 'flex',
            padding: '24px 15px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box
            style={{
              color: '#2A398D',
              fontFamily: 'lato',
              fontSize: '18px',
              fontWeight: 300
            }}
          >
            {new Date(individual.created_at).getDate()} /{' '}
            {new Date(individual.created_at).getMonth() + 1} /{' '}
            {new Date(individual.created_at).getFullYear()}
          </Box>
          <Box style={{ display: 'flex', gap: '0.1rem' }}>
            <IconButton>
              <FacebookIcon className={classes.icons} />
            </IconButton>
            <IconButton>
              <InstagramIcon className={classes.icons} />
            </IconButton>
            <IconButton>
              <LinkedInIcon className={classes.icons} />
            </IconButton>
            <IconButton>
              <TwitterIcon className={classes.icons} />
            </IconButton>
            <IconButton>
              <YouTubeIcon className={classes.icons} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}
