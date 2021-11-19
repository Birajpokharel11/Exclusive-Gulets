import React, { useState } from 'react';
import { useRouter } from 'next/router';
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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
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

import { IYachtState } from '@store/interfaces';
import BackgroundVectors from '@components/BackgroundVectors';

import UploadFile from './components/UploadFile';

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
    },
    container: {
      display: 'flex',
      flexFlow: 'column wrap',
      gap: '0 30px',
      height: 320,
      overflow: 'auto'
    },
    item: {
      width: 'auto'
    }
  })
);

interface Props {
  yacht?: IYachtState;
  loading?: any;
  route?: string;
  next_page?: number;
  onEditYachtStart?: (formData) => any;
  onPicAddStart?: (formData, imgCode) => any;
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
  const router = useRouter();
  const id = router.query.slug;

  const classes = useStyles();
  const [page, setpage] = React.useState(0);

  ///////////////////////////////////////////////////////////
  const [Photo, setPhoto] = React.useState('');
  const [mainImage, setMainImage] = React.useState({
    preview: null,
    raw: null
  });
  const [sideImage, setSideImage] = React.useState({
    preview: null,
    raw: null
  });

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMainImage({
          preview: reader.result,
          raw: file
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeImg2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSideImage({
          preview: reader.result,
          raw: file
        });
      };
      reader.readAsDataURL(file);
    }
  };

  ////////
  const submitMainImage = (e) => {
    e.preventDefault();
    onPicAddStart(
      {
        selectedFile: mainImage.raw,
        id: id,
        type: 'yacht'
      },
      'main'
    );
  };

  const submitSideImage = (e) => {
    e.preventDefault();
    onPicAddStart(
      {
        selectedFile: sideImage.raw,
        id: id,
        type: 'yacht'
      },
      'side'
    );
  };

  return (
    <Box pl={4} pr={4} pt={4}>
      <Grid container spacing={3}>
        <Grid item container justify="space-between">
          <Grid item>
            <Typography variant="h3">
              <strong>Edit Yacht</strong>
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={8}>
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
              featuresId: [],
              about: soleYacht?.about ?? '',
              accommodation: soleYacht?.accomodation ?? '',
              entertainment: soleYacht?.entertainment ?? ''
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log('submit clicked!!!', values);
              onEditYachtStart({ ...values, id: soleYacht.id });
              setSubmitting(false);
            }}
            render={({ values }) => (
              <Form>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="h4">Yacht Name</Typography>

                    <Field
                      fullWidth
                      name="name"
                      type="text"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h4">Ratings</Typography>

                    <Field
                      component={Select}
                      fullWidth
                      variant="outlined"
                      name="ratingId"
                      id="rating"
                    >
                      <MenuItem value={1}>3.0</MenuItem>
                      <MenuItem value={2}>4.0</MenuItem>
                      <MenuItem value={3}>5.0</MenuItem>
                    </Field>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h4">Yacht Type</Typography>

                    <Field
                      component={Select}
                      fullWidth
                      variant="outlined"
                      name="yachtTypeId"
                      id="yachtType"
                    >
                      <MenuItem value={1}>Catamaran</MenuItem>
                      <MenuItem value={2}>Gulet</MenuItem>
                      <MenuItem value={3}>Motor Sailer</MenuItem>
                      <MenuItem value={4}>Motor Yacht</MenuItem>
                    </Field>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="h4">Year Built</Typography>

                    <Field
                      fullWidth
                      name="buildYear"
                      type="text"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="h4">Year Refit</Typography>

                    <Field
                      fullWidth
                      name="refitYear"
                      type="text"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="h4">Length</Typography>

                    <Field
                      fullWidth
                      name="length"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="h4">Cabin</Typography>

                    <Field
                      fullWidth
                      name="noOfCabins"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h4">Flags:</Typography>

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

                  <Grid item xs={12}>
                    <Typography variant="h4" className={classes.header}>
                      SAILING REGION:
                    </Typography>

                    <FieldArray
                      name="countriesId"
                      render={(arrayHelpers) => (
                        <div className={classes.container}>
                          {countryList.map((country) => {
                            return (
                              <ListItem
                                key={country.id}
                                className={classes.item}
                              >
                                <ListItemIcon>
                                  <Checkbox
                                    edge="start"
                                    disableRipple
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
                                </ListItemIcon>
                                <ListItemText primary={country.name} />
                              </ListItem>
                            );
                          })}
                        </div>
                      )}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h4">Home Port:</Typography>

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
                    <Typography variant="h4">Master Cabins</Typography>

                    <Field
                      fullWidth
                      placeholder="Master Cabins"
                      name="masterCabins"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Typography variant="h4">Double Cabins</Typography>
                    <Field
                      fullWidth
                      placeholder="Double Cabins"
                      name="doubleCabins"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Typography variant="h4">Twin Cabins</Typography>

                    <Field
                      fullWidth
                      placeholder="Twin Cabins"
                      name="twinCabins"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Typography variant="h4">Triple Cabins</Typography>

                    <Field
                      fullWidth
                      placeholder="Triple Cabins"
                      name="tripleCabins"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Typography variant="h4">Single Cabins</Typography>

                    <Field
                      fullWidth
                      placeholder="Single Cabins"
                      name="singleCabins"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Typography variant="h4">Extra Bunk Beds</Typography>

                    <Field
                      fullWidth
                      placeholder="Extra Bunk Beds"
                      name="extraBunkBeds"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Typography variant="h4">No Of Crew Members</Typography>

                    <Field
                      fullWidth
                      placeholder="No Of Crew Members"
                      name="noOfPassengers"
                      type="number"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={12} container justifyContent="space-between">
                    <Grid item>
                      <Typography
                        variant="h3"
                        style={{ margin: '10px 0 30px' }}
                      >
                        NUMBER
                        <br /> OF CABINS:{' '}
                        <span style={{ fontSize: '30px', paddingLeft: '10px' }}>
                          5
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">
                        NUMBER
                        <br /> OF PASSENGERS:{' '}
                        <span style={{ fontSize: '30px', paddingLeft: '10px' }}>
                          10
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">
                        NUMBER
                        <br /> OF MEMBERS:{' '}
                        <span style={{ fontSize: '30px', paddingLeft: '10px' }}>
                          3
                        </span>
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      borderTop: '1px solid rgba(0,32,78,.23)',
                      paddingTop: '30px'
                    }}
                  >
                    <Typography variant="h4" className={classes.header}>
                      KEY FEATURES:
                    </Typography>

                    <FieldArray
                      name="featuresId"
                      render={(arrayHelpers) => (
                        <div className={classes.container}>
                          {yachtFeaturesList.map((feature) => {
                            return (
                              <ListItem
                                key={feature.id}
                                className={classes.item}
                              >
                                <ListItemIcon>
                                  <Checkbox
                                    edge="start"
                                    disableRipple
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
                                </ListItemIcon>
                                <ListItemText primary={feature.name} />
                              </ListItem>
                            );
                          })}
                        </div>
                      )}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h4" className={classes.header}>
                      WATER TOYS:
                    </Typography>

                    <FieldArray
                      name="toysId"
                      render={(arrayHelpers) => (
                        <div
                          className={classes.container}
                          style={{ height: 410 }}
                        >
                          {waterToysList.map((toy) => {
                            return (
                              <ListItem key={toy.id} className={classes.item}>
                                <ListItemIcon>
                                  <Checkbox
                                    edge="start"
                                    disableRipple
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
                                </ListItemIcon>
                                <ListItemText primary={toy.name} />
                              </ListItem>
                            );
                          })}
                        </div>
                      )}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h4" className={classes.header}>
                      INCLUSIVE TERMS:
                    </Typography>

                    <FieldArray
                      name="termsId"
                      render={(arrayHelpers) => (
                        <div className={classes.container}>
                          {inclusiveTermList.map((term) => {
                            return (
                              <ListItem key={term.id} className={classes.item}>
                                <ListItemIcon>
                                  <Checkbox
                                    edge="start"
                                    disableRipple
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
                                </ListItemIcon>
                                <ListItemText primary={term.name} />
                              </ListItem>
                            );
                          })}
                        </div>
                      )}
                    />
                  </Grid>

                  <Grid item container xs={12} spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4" className={classes.header}>
                        OPTIONAL EXTRAS:
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <FieldArray
                        name="extrasId"
                        render={(arrayHelpers) => (
                          <div className={classes.container}>
                            {extrasList.map((extra) => {
                              return (
                                <ListItem
                                  key={extra.id}
                                  className={classes.item}
                                >
                                  <ListItemIcon>
                                    <Checkbox
                                      edge="start"
                                      disableRipple
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
                                  </ListItemIcon>
                                  <ListItemText primary={extra.name} />
                                </ListItem>
                              );
                            })}
                          </div>
                        )}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h4">Additional Costs</Typography>
                    <Field
                      component={TextField}
                      placeholder="Additional Costs"
                      variant="outlined"
                      multiline
                      rows={4}
                      rowsMax={4}
                      fullWidth
                      name="additionalCosts"
                      id="additionalCosts"
                    />
                  </Grid>

                  <Grid item sm={12}>
                    <Typography variant="h3">
                      <strong> Content</strong>
                    </Typography>
                    <br />
                    <Typography variant="h4">About Yacht</Typography>

                    <Field
                      component={TextField}
                      fullWidth
                      variant="outlined"
                      multiline
                      rows={4}
                      rowsMax={4}
                      placeholder="About"
                      name="about"
                      id="about"
                    />
                  </Grid>

                  <Grid item sm={12}>
                    <Typography variant="h4">ACCOMMODATION:</Typography>

                    <Field
                      component={TextField}
                      placeholder="Accommodation"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      rowsMax={4}
                      name="accommodation"
                      id="accommodation"
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Typography variant="h4">
                      AMENITIES & ENTERTAINMENT:
                    </Typography>

                    <Field
                      component={TextField}
                      placeholder="Entertainment"
                      variant="outlined"
                      multiline
                      rows={4}
                      rowsMax={4}
                      fullWidth
                      name="entertainment"
                      id="entertainment"
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
              </Form>
            )}
          />
        </Grid>
        <Grid item md={4}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <UploadFile
                name="Main Photo"
                code="main"
                file={mainImage}
                onChange={handleChange}
                onDelete={() => setMainImage({ preview: '', raw: '' })}
                onSubmit={submitMainImage}
              />
            </Grid>
            <Grid item>
              <UploadFile
                name="Side Photo"
                code="side"
                file={sideImage}
                onChange={handleChangeImg2}
                onDelete={() => setSideImage({ preview: '', raw: '' })}
                onSubmit={submitSideImage}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default container(Blogs);
