import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import clsx from 'clsx';
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
import {
  Formik,
  Field,
  Form,
  FormikConfig,
  FormikValues,
  FieldArray
} from 'formik';
import { TextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';

import BackgroundVectors from '@components/BackgroundVectors';

import { IYachtState } from '@store/interfaces';

import container from './EditYacht.container';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    },
    details: {},
    input: {},
    avatar: {},
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
    },
    header: {
      fontWeight: 500
    }
  })
);
interface Props {
  yacht?: IYachtState;
  loading?: any;
  route?: string;
  next_page?: number;
  onEditYachtStart?: (formData) => any;
  onPicAddStart?: (formData) => any;
}
function Blogs({
  yacht: {
    soleYacht,
    isEditing,
    flagList,
    countryList,
    homePortList,
    waterToysList,
    inclusiveTermList,
    extrasList,
    yachtFeaturesList
  },
  loading,
  onEditYachtStart,
  onPicAddStart
}: Props) {
  const classes = useStyles();
  const [page, setpage] = React.useState(0);

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

  ////////
  const router = useRouter();
  const id = router.query.slug;
  const params = [Photo, { id: id, type: 'yacht' }];

  const clickSubmits = (e) => {
    e.preventDefault();
    onPicAddStart({
      selectedFile: Photo,
      id: id,
      type: 'yacht'
    });
    console.log(id, 'PICCC');
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
              noOfCabins: soleYacht.noOfCabins ?? '',
              flagsId: soleYacht.flagsId ?? 1,
              homePortId: soleYacht.homePortId ?? 1,
              masterCabins: soleYacht.masterCabins ?? '',
              doubleCabins: soleYacht.doubleCabins ?? '',
              twinCabins: soleYacht.twinCabins ?? '',
              length: soleYacht.length ?? '',
              tripleCabins: soleYacht.tripleCabins ?? '',
              singleCabins: soleYacht.singleCabins ?? '',
              extraBunkBeds: soleYacht.extraBunkBeds ?? '',
              noOfPassengers: soleYacht.noOfPassengers ?? '',
              registryPortId: soleYacht.registryPortId ?? 1,
              instanceCheckout: soleYacht.instanceCheckout ?? false,
              additionalCosts: soleYacht.additionalCosts ?? '',
              toysId: soleYacht.toysId ?? [],
              termsId: [],
              extrasId: [],
              countriesId: [],
              featuresId: []
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log('submit clicked!!!', values);
              onEditYachtStart({ ...values, id: soleYacht.id });
              setSubmitting(false);
            }}
            render={({ values }) => (
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
                      name="length"
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

                  <Grid item container xs={12} spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4" className={classes.header}>
                        Flags:
                      </Typography>
                    </Grid>

                    <Field
                      component={Select}
                      fullWidth
                      label="Flag"
                      variant="outlined"
                      name="flagsId"
                      id="flagsId"
                    >
                      {flagList.map((flag) => (
                        <MenuItem key={flag.id} value={flag.id}>
                          {flag.countryName}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>

                  <Grid item container xs={12} spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4" className={classes.header}>
                        SAILING REGION:
                      </Typography>
                    </Grid>

                    <FieldArray
                      name="countriesId"
                      render={(arrayHelpers) => (
                        <>
                          {countryList.map((country) => (
                            <Grid item xs={4} key={country.id}>
                              <Typography variant="h4">
                                {country.name}
                              </Typography>

                              <input
                                name="countriesId"
                                type="checkbox"
                                value={country.id}
                                checked={values.countriesId
                                  .map((e) => e)
                                  .includes(country.id)}
                                onChange={(e) => {
                                  if (e.target.checked)
                                    arrayHelpers.push(country.id);
                                  else {
                                    const index = values.countriesId
                                      .map(function (e) {
                                        return e.id;
                                      })
                                      .indexOf(country.id);
                                    arrayHelpers.remove(index);
                                  }
                                }}
                              />
                            </Grid>
                          ))}
                        </>
                      )}
                    />
                  </Grid>

                  <Grid item container xs={12} spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4" className={classes.header}>
                        Home Port:
                      </Typography>
                    </Grid>

                    <Field
                      component={Select}
                      fullWidth
                      label="Home Port"
                      variant="outlined"
                      name="homePortId"
                      id="homePortId"
                    >
                      {homePortList.map((home) => (
                        <MenuItem key={home.id} value={home.id}>
                          {home.name}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>

                  <Grid item xs={4}>
                    <Field
                      fullWidth
                      label="Master Cabins"
                      name="masterCabins"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Field
                      fullWidth
                      label="Double Cabins"
                      name="doubleCabins"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Field
                      fullWidth
                      label="Twin Cabins"
                      name="twinCabins"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Field
                      fullWidth
                      label="Triple Cabins"
                      name="tripleCabins"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Field
                      fullWidth
                      label="Single Cabins"
                      name="singleCabins"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Field
                      fullWidth
                      label="Extra Bunk Beds"
                      name="extraBunkBeds"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Field
                      fullWidth
                      label="No Of Crew Members"
                      name="noOfPassengers"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item container xs={12} spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4" className={classes.header}>
                        KEY FEATURES:
                      </Typography>
                    </Grid>

                    <FieldArray
                      name="featuresId"
                      render={(arrayHelpers) => (
                        <>
                          {yachtFeaturesList.map((feature) => (
                            <Grid item xs={4} key={feature.id}>
                              <Typography variant="h4">
                                {feature.name}
                              </Typography>

                              <input
                                name="featuresId"
                                type="checkbox"
                                value={feature.id}
                                checked={values.featuresId
                                  .map((e) => e)
                                  .includes(feature.id)}
                                onChange={(e) => {
                                  if (e.target.checked)
                                    arrayHelpers.push(feature.id);
                                  else {
                                    const index = values.featuresId
                                      .map(function (e) {
                                        return e.id;
                                      })
                                      .indexOf(feature.id);
                                    arrayHelpers.remove(index);
                                  }
                                }}
                              />
                            </Grid>
                          ))}
                        </>
                      )}
                    />
                  </Grid>

                  <Grid item container xs={12} spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4" className={classes.header}>
                        WATER TOYS:
                      </Typography>
                    </Grid>

                    <FieldArray
                      name="toysId"
                      render={(arrayHelpers) => (
                        <>
                          {waterToysList.map((toy) => (
                            <Grid item xs={4} key={toy.id}>
                              <Typography variant="h4">{toy.name}</Typography>

                              <input
                                name="toysId"
                                type="checkbox"
                                value={toy.id}
                                checked={values.toysId
                                  .map((e) => e)
                                  .includes(toy.id)}
                                onChange={(e) => {
                                  if (e.target.checked)
                                    arrayHelpers.push(toy.id);
                                  else {
                                    const index = values.toysId
                                      .map(function (e) {
                                        return e.id;
                                      })
                                      .indexOf(toy.id);
                                    arrayHelpers.remove(index);
                                  }
                                }}
                              />
                            </Grid>
                          ))}
                        </>
                      )}
                    />
                  </Grid>

                  <Grid item container xs={12} spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4" className={classes.header}>
                        INCLUSIVE TERMS:
                      </Typography>
                    </Grid>

                    <FieldArray
                      name="termsId"
                      render={(arrayHelpers) => (
                        <>
                          {inclusiveTermList.map((term) => (
                            <Grid item xs={4} key={term.id}>
                              <Typography variant="h4">{term.name}</Typography>

                              <input
                                name="termsId"
                                type="checkbox"
                                value={term.id}
                                checked={values.termsId
                                  .map((e) => e)
                                  .includes(term.id)}
                                onChange={(e) => {
                                  if (e.target.checked)
                                    arrayHelpers.push(term.id);
                                  else {
                                    const index = values.termsId
                                      .map(function (e) {
                                        return e.id;
                                      })
                                      .indexOf(term.id);
                                    arrayHelpers.remove(index);
                                  }
                                }}
                              />
                            </Grid>
                          ))}
                        </>
                      )}
                    />
                  </Grid>

                  <Grid item container xs={12} spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4" className={classes.header}>
                        OPTIONAL EXTRAS:
                      </Typography>
                    </Grid>

                    <FieldArray
                      name="extrasId"
                      render={(arrayHelpers) => (
                        <>
                          {extrasList.map((extra) => (
                            <Grid item xs={4} key={extra.id}>
                              <Typography variant="h4">{extra.name}</Typography>

                              <input
                                name="extrasId"
                                type="checkbox"
                                value={extra.id}
                                checked={values.extrasId
                                  .map((e) => e)
                                  .includes(extra.id)}
                                onChange={(e) => {
                                  if (e.target.checked)
                                    arrayHelpers.push(extra.id);
                                  else {
                                    const index = values.extrasId
                                      .map(function (e) {
                                        return e.id;
                                      })
                                      .indexOf(extra.id);
                                    arrayHelpers.remove(index);
                                  }
                                }}
                              />
                            </Grid>
                          ))}
                        </>
                      )}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      label="Additional Costs"
                      name="additionalCosts"
                      type="text"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item container sm={12}>
                    <Typography variant="h4">
                      AVAILABILITY FOR INSTANT CHECKOUT:
                    </Typography>

                    <Field
                      type="checkbox"
                      name="instanceCheckout"
                      style={{ margin: '6px 0 0 10px' }}
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
            )}
          />
          <Card>
            <CardContent>
              <div className={classes.details}>
                <img
                  className={classes.avatar}
                  src={preview}
                  alt="picture"
                  width={400}
                  height={400}
                />
                {/* || `data:${user?.filename};base64,${user?.imageBase64}` */}
              </div>
            </CardContent>
            <CardActions>
              <div className={classes.root}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  onChange={(e) => handleChange(e)}
                  type="file"
                  style={{ display: 'none' }}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    className={classes.input}
                    id="contained-button-file"
                    onChange={(e) => handleChange(e)}
                    variant="contained"
                    color="primary"
                    component="span"
                  >
                    Upload
                  </Button>
                  <Button
                    disabled={!Photo && true}
                    variant="contained"
                    onClick={clickSubmits}
                  >
                    Submit
                  </Button>
                </label>
              </div>
            </CardActions>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default container(Blogs);
