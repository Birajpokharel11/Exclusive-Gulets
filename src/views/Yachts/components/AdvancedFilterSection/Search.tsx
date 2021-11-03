import React from 'react';
import {
  makeStyles,
  useTheme,
  createStyles,
  Theme
} from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import AdvanceFilter from './components/AdvanceFilter';
import Sort from './components/Sort';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      background: ' rgba(12, 22, 37, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.5)',

      [theme.breakpoints.down('xs')]: {
        border: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        width: 353
      }
    },
    MobilePaper: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      background: ' rgba(12, 22, 37, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.5)',

      [theme.breakpoints.down('xs')]: {
        border: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        width: 100
      }
    },
    MobilePaperSelected: {
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      color: '#ffffff',
      background: ' rgba(12, 22, 37, 0.6)',
      '&.Mui-focused': {
        background: 'transparent',
        color: 'red'
      }
    },

    Container: {
      padding: '40px 0',
      [theme.breakpoints.down('sm')]: {
        paddingRight: '25px',
        paddingLeft: '19px'
      },
      [theme.breakpoints.down('md')]: {
        paddingRight: '25px',
        paddingLeft: '19px'
      }
    },
    iconButton: {
      color: 'white'
    },
    Divider: {
      height: '24px',
      marginTop: '15px'
    }
  })
);

export default function Search() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const [mobileSearch, setMobileSearch] = React.useState(false);
  return (
    <Container maxWidth="lg" className={classes.Container}>
      {!matches ? (
        <>
          <Grid container>
            <Grid item md={6} sm>
              <Paper component="form" className={classes.root}>
                <IconButton className={classes.iconButton} aria-label="menu">
                  <img src="/assets/images/Search.svg" />
                </IconButton>
                <InputBase
                  classes={{ root: classes.input }}
                  placeholder="Search By Name"
                />
              </Paper>
            </Grid>
            <Grid item md={6} sm container justifyContent="flex-end">
              <AdvanceFilter />
              <Sort />
            </Grid>
          </Grid>
        </>
      ) : (
        <Box
          style={{
            display: 'flex',
            border: '1px solid rgba(255, 255, 255, 0.5)'
          }}
        >
          <Paper
            component="form"
            className={clsx(classes.MobilePaper, {
              [classes.MobilePaperSelected]: mobileSearch
            })}
          >
            <IconButton
              className={classes.iconButton}
              onClick={() => setMobileSearch((prev) => !prev)}
              aria-label="menu"
            >
              <img src="/assets/images/Search.svg" />
            </IconButton>
            {mobileSearch && (
              <InputBase
                classes={{ root: classes.input }}
                placeholder="Search By Name"
              />
            )}
            {mobileSearch && (
              <IconButton className={classes.iconButton} aria-label="menu">
                <CloseIcon />
              </IconButton>
            )}
          </Paper>
          {!mobileSearch && (
            <>
              <Divider
                orientation="vertical"
                flexItem
                className={classes.Divider}
              />
              <AdvanceFilter />
              <Divider
                orientation="vertical"
                flexItem
                className={classes.Divider}
              />
              <Sort />
            </>
          )}
        </Box>
      )}
    </Container>
  );
}
