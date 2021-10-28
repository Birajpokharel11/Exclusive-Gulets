import React from 'react';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Button,
  Container,
  Grid,
  Typography,
  IconButton,
  Box,
  Paper,
  useMediaQuery,
  Drawer,
  Divider
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';

import ExperiencesFrom from './components/ExperiencesForm';
import { createMarkup } from '@utils/misc';
import EnquiryDrawer from '@components/EnquiryDrawer';
import clsx from 'clsx';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
const useStyles = makeStyles((theme) =>
  createStyles({
    Container: {
      padding: '5% 15% 5% 15%',
      [theme.breakpoints.down('lg')]: { padding: '5% 10% 5% 5%' },
      [theme.breakpoints.down('md')]: { padding: '8% 5% 5% 5%' }
    },
    Flex1: {
      flex: 0.4,
      height: 1500,
      overflow: 'hidden'
    },
    Flex2: {
      flex: 0.7,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
      [theme.breakpoints.down('lg')]: {},
      padding: '0'
    },
    Enquery: {
      height: '904px',
      width: '400px',
      [theme.breakpoints.down('md')]: {
        width: '300px'
      },
      background: '#F5F0E4',
      padding: '40px 20px 40px 20px'
    },

    Underline: { textDecoration: 'none', color: 'rgb(52, 152, 219)' },
    Heading: {
      textAlign: 'center',
      textTransform: 'uppercase',
      color: '#F5F0E4'
    },
    SubHeading: {
      textAlign: 'center',
      color: '#F5F0E4',
      fontWeight: 300
    },
    EnquireTM: {
      width: '100%',
      background: '#f5f0e4',
      position: 'fixed',
      bottom: 0,
      height: '116px',
      display: 'none',
      zIndex: 2,
      [theme.breakpoints.down('sm')]: {
        display: 'block'
      }
    },
    ButtonTM: {
      minWidth: '260px',
      minHeight: '52px',
      color: 'white',
      backgroundColor: '#2A398D',
      '&:hover': {
        backgroundColor: '#2A398D'
      }
    },
    Readmore: { color: ' #ab3996', '&:hover': { background: 'transparent' } },

    BoxShadow: {
      height: '190px',
      position: 'relative',
      bottom: 40,
      background:
        'linear-gradient(0deg,#fff,#fff,hsla(0,0%,80%,.4),hsla(0,0%,100%,.4))'
    },
    icons: { color: '#2A398D' },
    paper: {
      padding: '60px 0'
    }
  })
);

export default function BlogContentSection(props) {
  const { individual } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  const [open, setOpen] = React.useState(false);
  const [readmore, setReadmore] = React.useState(false);
  console.log('hello', individual.content.length);
  const handleclick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Box>
        <Box display="flex" className={classes.Container}>
          <Box>
            <Container
              maxWidth={matches ? 'md' : 'lg'}
              className={clsx(!readmore && classes.Flex1)}
            >
              <Typography
                variant="subtitle2"
                dangerouslySetInnerHTML={createMarkup(individual?.content)}
              />
            </Container>
            {!readmore && (
              <Box
                className={classes.BoxShadow}
                display="flex"
                justifyContent="center"
              >
                <Button
                  className={classes.Readmore}
                  onClick={() => setReadmore((prev) => !prev)}
                >
                  Read More
                </Button>
              </Box>
            )}
            <Divider />
            <Paper elevation={0} className={classes.paper}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
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
            </Paper>
          </Box>

          <Container className={classes.Flex2}>
            <Box className={classes.Enquery}>
              <ExperiencesFrom />
            </Box>
          </Container>
        </Box>
      </Box>
      <Box className={classes.EnquireTM}>
        <Grid container alignItems="center" style={{ padding: '32px 22px' }}>
          <Grid item xs>
            <Box>
              <Typography variant="h2" align="center">
                {' '}
                Create your own experience!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs>
            {' '}
            <Box alignItems="center">
              <Button className={classes.ButtonTM} onClick={handleclick}>
                Enquite
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <EnquiryDrawer open={open} setOpen={setOpen} />
    </>
  );
}
