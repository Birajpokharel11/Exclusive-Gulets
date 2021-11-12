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

const AddYacht = ({ onCreateYachtStart, isCreating }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3">Add Yacht</Typography>
      <Formik
        initialValues={{
          name: '',
          ratingId: 1,
          yachtTypeId: 1,
          buildYear: '',
          refitYear: '',
          yachtLength: 100,
          noOfCabins: 16
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('submit clicked!!!', values);
          onCreateYachtStart(values);
          setSubmitting(false);
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
                  name="ratingId"
                  id="rating"
                >
                  <MenuItem value={1}>3.0</MenuItem>
                  <MenuItem value={1}>4.0</MenuItem>
                  <MenuItem value={1}>5.0</MenuItem>
                </Field>
              </Grid>

              <Grid item xs={12}>
                <Field
                  component={Select}
                  fullWidth
                  label="Yacht Type"
                  variant="outlined"
                  name="yachtTypeId"
                  id="yachtType"
                >
                  <MenuItem value={1}>Catamaran</MenuItem>
                  <MenuItem value={1}>Gulet</MenuItem>
                  <MenuItem value={1}>Motor Sailer</MenuItem>
                  <MenuItem value={1}>Motor Yacht</MenuItem>
                </Field>
              </Grid>

              <Grid item xs={6}>
                <Field
                  className={classes.textField}
                  fullWidth
                  label="Year Built"
                  name="buildYear"
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
                  name="refitYear"
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
                  name="yachtLength"
                  type="number"
                  variant="outlined"
                  component={TextField}
                />
              </Grid>

              <Grid item xs={6}>
                <Field
                  className={classes.textField}
                  fullWidth
                  label="Cabin"
                  name="noOfCabins"
                  type="number"
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
                  disabled={isSubmitting || isCreating}
                >
                  {isSubmitting || isCreating ? (
                    <CircularProgress size={20} />
                  ) : (
                    <Typography variant="body1" color="secondary">
                      Save
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
