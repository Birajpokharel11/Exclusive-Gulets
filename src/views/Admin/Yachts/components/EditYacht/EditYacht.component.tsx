import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  MenuItem,
  CircularProgress,
  Button,
  Card,
  CardContent,
  Avatar,
  CardActions,
  ButtonGroup
} from '@material-ui/core';
import container from './EditYacht.container';
import BackgroundVectors from '@components/BackgroundVectors';
import { useRouter } from 'next/router';
import { Formik, Field, Form, FormikConfig, FormikValues } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';
import { IYachtState } from '@store/interfaces';
import clsx from 'clsx';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    },
    heading: {
      color: '#00204e',
      fontSize: '20px',
      fontWeight: 300,
      lineHeight: '28px'
    },
    sectionGem: {
      minHeight: '40vh',
      paddingTop: '40px',
      marginBottom: '20px',
      position: 'relative'
    }
  })
);
interface Props {
  yacht?: IYachtState;
  loading?: any;
  route?: string;
  next_page?: number;
  onEditYachtStart?: (formData) => any;
  onPicAddStart?: () => any;
}
function Blogs({
  yacht: { soleYacht, isEditing },
  loading,
  onEditYachtStart,
  onPicAddStart
}: Props) {
  const classes = useStyles();
  const [page, setpage] = React.useState(0);

  const onSubmit = () => {};
  ///////////////////////////////////////////////////////////
  const [Photo, setPhoto] = React.useState('');
  const [preview, setPreview] = React.useState('');

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    const data = e.target.files[0];
    console.log('photwwwo', data);

    setPreview(window.URL.createObjectURL(data));
    setPhoto(data);
  };

  const clickSubmits = (e) => {
    e.preventDefault();
    onPicAddStart(Photo);
    console.log(onPicAddStart(), 'PICCC');
  };
  return (
    <>
      <Box mb={4} mt={6}>
        <Container>
          <Formik
            initialValues={{
              name: soleYacht.name,
              ratingId: 1,
              yachtTypeId: 1,
              buildYear: soleYacht.buildYear,
              refitYear: soleYacht.refitYear,
              yachtLength: 100,
              noOfCabins: 16
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log('submit clicked!!!', values);
              onEditYachtStart({ ...values, id: soleYacht.id });
              setSubmitting(false);
            }}
          >
            <Form>
              <Grid container spacing={3}>
                <Grid item container justify="space-between">
                  <Grid item>
                    <Typography variant="h3">
                      <strong>Edit Yacht</strong>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Field
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
                    color="primary"
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={isEditing}
                  >
                    {isEditing ? (
                      <CircularProgress />
                    ) : (
                      <Typography variant="body1" color="secondary">
                        Save
                      </Typography>
                    )}
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
          <Card className={classes.root}>
            <CardContent>
              <div className={classes.details}>
                <Avatar className={classes.avatar} src={preview} />
                {/* || `data:${user?.filename};base64,${user?.imageBase64}` */}
              </div>
            </CardContent>
            <CardActions>
              <form>
                <div className={classes.root}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    onChange={(e) => handleChange(e)}
                    type="file"
                  />
                  <label htmlFor="contained-button-file"></label>
                </div>
                <Button
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  onChange={(e) => handleChange(e)}
                  type="file"
                >
                  Choose Pic
                </Button>
              </form>
              <Button onClick={clickSubmits}>Submit</Button>
            </CardActions>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default container(Blogs);
