import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import YachtItem from './components/YachtItem';
import AddYacht from './components/AddYacht';

import container from './Yachts.container';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));

const Yachts = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <YachtItem />
          <YachtItem />
          <YachtItem />
          <YachtItem />
        </Grid>
        <Grid item md={4}>
          <AddYacht />
        </Grid>
      </Grid>
    </Container>
  );
};

export default container(Yachts);
