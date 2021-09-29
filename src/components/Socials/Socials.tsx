import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, IconButton, Hidden } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) =>
  createStyles({
    iconSection: {
      position: 'absolute',
      color: 'white',
      right: '5vw',
      bottom: '15%',
      zIndex: 2
    },
    icon: {
      margin: '39px 0 0',
      '&:hover': { color: 'orange' }
    }
  })
);

export const Socials = () => {
  const classes = useStyles();

  return (
    <Hidden xsDown>
      <Box
        mb={3}
        className={classes.iconSection}
        display="flex"
        flexDirection="column"
      >
        <IconButton
          className={classes.icon}
          href="https://twitter.com/exclusivegulets"
          target="_blank"
        >
          <TwitterIcon />
        </IconButton>

        <IconButton
          className={classes.icon}
          href="https://www.linkedin.com/company/exclusive-gulets-ltd/?viewAsMember=true"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          className={classes.icon}
          href="https://www.instagram.com/exclusive_gulets/"
          target="_blank"
        >
          <InstagramIcon />
        </IconButton>

        <IconButton
          className={classes.icon}
          href="https://www.facebook.com/exclusiveguletsandyachts"
          target="_blank"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          className={classes.icon}
          href="https://www.youtube.com/channel/UCRupGbMd1sUrXiYgRE9pePw/featured"
          target="_blank"
        >
          <YouTubeIcon />
        </IconButton>
      </Box>
    </Hidden>
  );
};

export default Socials;
