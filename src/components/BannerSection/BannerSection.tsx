import { createStyles, makeStyles } from '@material-ui/core/styles';

import {
  Box,
  Button,
  Typography,
  Container,
  IconButton,
  Breadcrumbs,
  Grid
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import BreadCrumbs from '@components/BreadCrumbs';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundImage: `url('./charterYatch.png')`,
      zIndex: 1,
      backgroundPosition: 'center',
      height: '60vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      padding: 0,
      position: 'relative'
    },
    overlay: {
      position: 'absolute',
      background:
        'linear-gradient(0deg, #091527fa 0.01%, rgba(9, 21, 39, 0.87) 43.52%, rgba(9, 21, 39, 0.24) 93.23%, rgba(9, 21, 39, 0) 99.99%)',
      alignSelf: 'start',
      padding: '30px 0',
      display: 'flex',
      textAlign: 'center',
      color: '#f5f0e4',
      fontWeight: 300,
      zIndex: 1,
      bottom: 0,
      width: '100%'
    },
    iconSection: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      color: 'white',
      right: 80,
      top: 150
    },
    icon: {
      margin: '39px 0 0',
      '&:hover': { color: 'orange' }
    }
  })
);

export default function BannerSection(props) {
  const { title, description } = props;
  const classes = useStyles();

  return (
    <div>
      <Box component="section" maxWidth="false" className={classes.root}>
        <Box className={classes.overlay}>
          <Container>
            <Typography
              variant="h2"
              color="inherit"
              style={{ marginBottom: '15px' }}
            >
              {title}
            </Typography>

            <Typography
              component="div"
              color="inherit"
              variant="subtitle1"
              style={{ marginBottom: '32px' }}
            >
              {description}
            </Typography>
          </Container>
        </Box>
        <Box className={classes.iconSection}>
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
        <Box>
          <BreadCrumbs />

          <Button disableRipple>
            <Box
              style={{
                alignItems: 'center',
                width: '100px',
                cursor: 'pointer'
              }}
            >
              <Box
                mt={50}
                style={{
                  transform: 'rotate(-90deg)',
                  marginBottom: '30%'
                }}
              >
                <Typography color="secondary">Scroll Down</Typography>
              </Box>
              <IconButton
                style={{
                  display: 'flex',
                  color: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(360deg)',
                  marginLeft: '30px',
                  height: '100px'
                }}
              >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAtCAQAAAA5Z+KFAAAAQ0lEQVR42u3IQQ0AIAwEwZNUCUhBCo6QhAQkLIEWggQe3KPpjrRGIukehfLhwzNAxjZg5HkaNsE/yalSI+XU6SeDIge9v5zP4NyKjgAAAABJRU5ErkJggg==" />
              </IconButton>
            </Box>
          </Button>
        </Box>
      </Box>
    </div>
  );
}
