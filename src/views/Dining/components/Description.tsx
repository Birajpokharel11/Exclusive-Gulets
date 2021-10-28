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
  withSocials?: Boolean;
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
    Image1: {
      width: '50%',
      height: '1000px',
      objectFit: 'fill',
      maxHeight: '1000px',
      float: 'right',
      marginTop: '105px',
      [theme.breakpoints.down(1050)]: {
        height: 'auto'
      },
      [theme.breakpoints.down(1000)]: {
        display: 'none'
      },
      paddingLeft: '10px',
      marginLeft: '10px',
      paddingBottom: '40px'
    },
    Divider: {
      gap: '1rem',
      padding: '0px 20px',
      margin: '0px 10px',
      [theme.breakpoints.down(1000)]: {
        display: 'block'
      }
    },
    Text: {},
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
    icons: { color: '#2A398D' },
    Icons: {
      display: 'flex',
      gap: '0.1rem',
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center'
      }
    },
    DateIcons: {
      display: 'flex',
      padding: '24px 15px',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('xs')]: {
        display: 'block'
      }
    },
    Date: {
      color: '#2A398D',
      fontFamily: 'lato',
      fontSize: '18px',
      fontWeight: 300,
      display: 'flex',
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center'
      }
    }
  })
);

export default function Description({ content, SideImage, individual }: Props) {
  const classes = useStyles();
  return (
    <>
      <Box id="#Box" className={classes.Divider}>
        <img className={classes.Image1} src={`${SideImage}`} alt="sideImage" />
        <Box className={classes.ImageBox2}>
          <img className={classes.Image} src={`${SideImage}`} alt="sideImage" />
        </Box>
        <Box className={classes.Text}>
          <Typography
            component="div"
            variant="subtitle1"
            style={{ lineHeight: '150%', color: '#00204e' }}
            dangerouslySetInnerHTML={createMarkup(content)}
          />
        </Box>
        <Box className={classes.ImageBox}></Box>
      </Box>
      <Box style={{ margin: '64px 0' }}>
        <Divider style={{ padding: '0px 15px' }} />
        <Box className={classes.DateIcons}>
          <Box className={classes.Date}>
            {new Date(individual.created_at).getDate()} /{' '}
            {new Date(individual.created_at).getMonth() + 1} /{' '}
            {new Date(individual.created_at).getFullYear()}
          </Box>
          <Box className={classes.Icons}>
            <IconButton
              target="_blank"
              href="https://www.facebook.com/exclusiveguletsandyachts"
            >
              <FacebookIcon className={classes.icons} />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.instagram.com/exclusive_gulets/"
            >
              <InstagramIcon className={classes.icons} />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.linkedin.com/company/exclusive-gulets-ltd/?viewAsMember=true"
            >
              <LinkedInIcon className={classes.icons} />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://twitter.com/exclusivegulets"
            >
              <TwitterIcon className={classes.icons} />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.youtube.com/channel/UCRupGbMd1sUrXiYgRE9pePw/featured"
            >
              <YouTubeIcon className={classes.icons} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}
