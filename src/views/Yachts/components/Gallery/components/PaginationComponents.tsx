import React from 'react';
import {
  createStyles,
  useTheme,
  makeStyles,
  withStyles,
  Theme
} from '@material-ui/core/styles';
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import Pagination from './Pagination';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Box: { width: '100%', background: '#091527' },
    Container: {
      display: 'flex',
      padding: '66px 100px 80px 100px',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        padding: '66px 10px 80px 10px'
      },
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        flexDirection: 'column'
      }
    }
  })
);

export default function PaginationSection() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const [offers, setOffers] = React.useState(true);

  return (
    <Box className={classes.Box}>
      <Container maxWidth="xl" className={classes.Container}>
        <Typography align={matches ? 'center' : undefined} color="secondary">
          120 yachts are listed
        </Typography>
        <Pagination />
      </Container>
    </Box>
  );
}