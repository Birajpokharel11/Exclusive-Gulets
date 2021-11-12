/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TableRow, TableCell, Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  paddingPeer: {
    padding: '3em'
  },
  paddingCatalogue: {
    padding: '1.3em 2em',
    [theme.breakpoints.down('sm')]: {
      padding: ' 1.3em .3em'
    }
  },
  spacing: {
    paddingTop: '1.5em',
    paddingLeft: '1em',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '2.8em'
    }
  },
  marginLeft: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: '2.3rem'
    },
    '@media (max-width:759.95px)': {
      marginLeft: '3.1rem'
    }
  }
}));

const CourseLoading = ({ length }) => {
  const classes = useStyles();
  const fakeArray = Array.from({ length }, (v, k) => k + 1);

  return (
    <>
      {fakeArray.map((i) => (
        <Grid item md={10} key={i}>
          <Paper style={{ marginBottom: '1.7em' }}>
            <Grid
              container
              direction="row"
              className={classes.paddingCatalogue}
            >
              <Grid item xs={12} sm={3}>
                <Skeleton
                  animation="wave"
                  style={{ margin: 'auto' }}
                  variant="rect"
                  width={200}
                  height={200}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={9}
                container
                justify="space-between"
                direction="column"
              >
                <Grid item className={classes.spacing}>
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width={150}
                    height={20}
                    className={classes.marginLeft}
                  />
                  <br />
                  <br />
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width={180}
                    height={5}
                    className={classes.marginLeft}
                  />
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width={220}
                    height={5}
                    className={classes.marginLeft}
                  />
                </Grid>
                <Grid item container justify="flex-end">
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width={130}
                    style={{ marginBottom: '1.5em' }}
                    height={40}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </>
  );
};

const CardLoading = ({ length }) => {
  const fakeArray = Array.from({ length }, (v, k) => k + 1);

  return (
    <>
      <Grid container wrap="nowrap">
        {fakeArray.map((i) => (
          <Box key={i} width={210} marginRight={32} my={5}>
            <Skeleton variant="rect" width={317.33} height={178.51} />
            <Skeleton animation="wave" />
            <Skeleton width="60%" animation="wave" />
          </Box>
        ))}
      </Grid>
    </>
  );
};

export { CourseLoading, CardLoading };
