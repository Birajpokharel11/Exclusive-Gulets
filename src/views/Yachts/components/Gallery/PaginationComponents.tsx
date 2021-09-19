import React from 'react';
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme
} from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import Pagination from './Pagination';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Box: { width: '100%', background: '#091527' },
    Container: {
      display: 'flex',
      padding: '66px 100px 80px 100px',
      justifyContent: 'space-between'
    }
  })
);

export default function PaginationSection() {
  const classes = useStyles();

  const [offers, setOffers] = React.useState(true);

  return (
    <Box className={classes.Box}>
      <Container maxWidth="xl" className={classes.Container}>
        <Typography color="secondary">120 yachts are listed</Typography>
        <Pagination />
      </Container>
    </Box>
  );
}
