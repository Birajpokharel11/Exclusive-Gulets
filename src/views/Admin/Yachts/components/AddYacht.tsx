import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Typography,
  Select,
  MenuItem,
  CircularProgress
} from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  }
}));

const AddYacht = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3">Add Yacht</Typography>
      <Formik
        initialValues={{
          name: '',
          rating: 3,
          yachtType: '',
          yearBuilt: '',
          yearRefit: 1,
          length: '',
          cabin: ''
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('submit clicked!!!', values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Field
                  className={classes.textField}
                  fullWidth
                  label="Yacht Name"
                  name="name"
                  type="text"
                  variant="outlined"
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12}>
                <Field
                  component={Select}
                  fullWidth
                  label="Rating"
                  variant="outlined"
                  name="rating"
                  id="rating"
                >
                  <MenuItem value={3}>3.0</MenuItem>
                  <MenuItem value={4}>4.0</MenuItem>
                  <MenuItem value={5}>5.0</MenuItem>
                </Field>
              </Grid>

              <Grid item xs={12}>
                <Field
                  component={Select}
                  fullWidth
                  label="Yacht Type"
                  variant="outlined"
                  name="yachtType"
                  id="yachtType"
                >
                  <MenuItem value="Catamaran">Catamaran</MenuItem>
                  <MenuItem value="Gulet">Gulet</MenuItem>
                  <MenuItem value="Motor Sailer">Motor Sailer</MenuItem>
                  <MenuItem value="Motor Yacht">Motor Yacht</MenuItem>
                </Field>
              </Grid>

              <Grid item xs={6}>
                <Field
                  className={classes.textField}
                  fullWidth
                  label="Year Built"
                  name="yearBuilt"
                  type="text"
                  variant="outlined"
                  component={TextField}
                />
              </Grid>

              <Grid item xs={6}>
                <Field
                  className={classes.textField}
                  fullWidth
                  label="Year Refit"
                  name="yearRefit"
                  type="text"
                  variant="outlined"
                  component={TextField}
                />
              </Grid>

              <Grid item xs={6}>
                <Field
                  className={classes.textField}
                  fullWidth
                  label="Length"
                  name="length"
                  type="text"
                  variant="outlined"
                  component={TextField}
                />
              </Grid>

              <Grid item xs={6}>
                <Field
                  className={classes.textField}
                  fullWidth
                  label="Cabin"
                  name="cabin"
                  type="text"
                  variant="outlined"
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  className={classes.signInButton}
                  color="primary"
                  size="large"
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <CircularProgress size={20} />
                  ) : (
                    <Typography variant="body1" color="secondary">
                      Sign up
                    </Typography>
                  )}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddYacht;
