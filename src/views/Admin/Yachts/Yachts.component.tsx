import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, CircularProgress, Grid } from '@material-ui/core';

import YachtItem from './components/YachtItem';
import AddYacht from './components/AddYacht';

import container from './Yachts.container';
import Typography from '@modules/components/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));

const Yachts = (props) => {
  const {
    onCreateYachtStart,
    yacht: { adminYachtsList, isCreating },
    onFetchYachtsStart,
    onPicAddStart
  } = props;
  const classes = useStyles();

  useEffect(() => {
    onFetchYachtsStart();
  }, []);

  const getYatchInfo = () => {
    if (isCreating && !adminYachtsList.length) {
      return <CircularProgress />;
    } else if (!isCreating && !adminYachtsList.length) {
      return <Typography variant="h2">Data Not Found!!</Typography>;
    } else {
      return adminYachtsList.map((item) => (
        <YachtItem key={item.id} {...item} />
      ));
    }
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={8}>
          {getYatchInfo()}
        </Grid>
        <Grid item md={4}>
          <AddYacht
            onCreateYachtStart={onCreateYachtStart}
            onPicAddStart={onPicAddStart}
            isCreating={isCreating}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default container(Yachts);
