import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      background: ' rgba(12, 22, 37, 0.6)',

      [theme.breakpoints.down('xs')]: {
        border: 'none'
      }
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      color: 'white'
    },
    Container: {
      display: 'flex',
      padding: '40px 6%',
      justifyContent: 'space-between'
    },
    iconButton: {
      color: 'white'
    },
    Filters: { color: 'white', width: '214px', height: '53px' },
    FilterTypo: {
      paddingLeft: [theme.spacing(2)],
      textTransform: 'capitalize'
    },
    Sort: {
      maxWidth: '121px',
      height: '53px',
      color: 'white'
    }
  })
);

export default function Search() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Container maxWidth="xl" className={classes.Container}>
      <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <img src="/assets/images/Search.svg" />
        </IconButton>
        <InputBase className={classes.input} placeholder="Search By Name" />
      </Paper>
      <Divider orientation="vertical" flexItem />
      <Box style={{ display: 'flex', gap: '1.5rem' }}>
        <Button className={classes.Filters} color="primary" variant="">
          <img src="/assets/images/AFilter.svg" />
          <Typography color="inherit" className={classes.FilterTypo}>
            Advanced Filters
          </Typography>
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button className={classes.Sort} color="primary" variant="">
          <img src="/assets/images/Sort.svg" />
          <Typography
            color="inherit"
            variant="h5"
            className={classes.FilterTypo}
          >
            Sort
          </Typography>
        </Button>
      </Box>
    </Container>
  );
}
