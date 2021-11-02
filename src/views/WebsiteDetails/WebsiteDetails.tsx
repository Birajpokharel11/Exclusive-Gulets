import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  TextField,
  Grid,
  Container,
  Typography,
  Button
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const CreateYourWebsite = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <TextField
              id="outlined-secondary"
              label="Domain Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-secondary"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-secondary"
              label="First Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-secondary"
              label="Last Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-secondary"
              label="Phone Number"
              variant="outlined"
              fullWidth
            />
          </Grid>
          {/* <Grid item container justifyContent="center" xs={12}>
            <Button variant="contained" color="primary" size="large">
              Submit
            </Button>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
};

export default CreateYourWebsite;
