import Grid from '@material-ui/core/Grid';

import YachtItem from './components/YachtItem';
import AddYacht from './components/AddYacht';

import container from './Yachts.container';

const Yachts = () => {
  return (
    <Grid container>
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
  );
};

export default container(Yachts);
