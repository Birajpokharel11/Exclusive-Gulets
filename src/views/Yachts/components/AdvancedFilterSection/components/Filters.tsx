import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import {
  Slider,
  Typography,
  Box,
  Grid,
  IconButton,
  Collapse,
  Divider
} from '@material-ui/core';
import AdvancedFilterSection from './components/AdvanceFiltersSection';
import { classNames } from 'react-select/dist/declarations/src/utils';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckBox from './components/CheckBox';
import CabinSlider from './components/CabinSlider';
import CheckBoxCabin from './components/CheckBoxCabin';
import CheckBoxKeyFeatures from './components/CheckBoxKeyFeatures';
import ChackBoxWaterToys from './components/CheckBoxWaterToys';
import CheckBoxTags from './components/CheckBoxTags';
const useStyles = makeStyles((theme) =>
  createStyles({
    Heading: { paddingBottom: '10px' },
    Icon: {
      color: ' #2A398D'
    },
    Rotate: {
      transform: 'rotate(180deg)'
    },
    Typography: {
      color: '#091527'
    },
    Increase: {
      fontWeight: 500,
      fontSize: '18px',
      fontStyle: 'normal'
    }
  })
);

export default function Filters() {
  const classes = useStyles();
  const [price, setPrice] = React.useState(false);
  const [length, setLength] = React.useState(false);
  const [type, setType] = React.useState(false);
  const [cabins, setCabins] = React.useState(false);
  const [keyFeatures, setKeyfeatures] = React.useState(false);
  const [waterToys, setWatertoys] = React.useState(false);
  const [tags, setTags] = React.useState(false);

  const [state, setState] = React.useState({
    gilad: true,
    motor: false,
    sailer: false,
    catamaran: false,
    //////////////////////////////
    master: true,
    double: false,
    twin: false,
    triple: false,
    single: false,
    extra: false,
    ////////////////////////////
    hot: false,
    satellite: false,
    large: false,
    safe: false,
    newly: false,
    fly: false,
    swim: false,
    mini: false,
    wide: false,
    gym: false,
    sauna: false,
    cockpit: false,
    ///////////////////////////////////
    jet: false,
    scuba: false,
    inflatable: false,
    waterski: false,
    fishing: false,
    sup1: false,
    jetski1: false,
    /////////////////////////////////////////// TagsCheckbox
    instant: false,
    special: false,
    finest: false,
    loved: false,
    family: false,
    SUP: false,
    gourmet: false
  });
  const {
    gilad,
    motor,
    sailer,
    catamaran,
    ///////////////////////////////// Type CheckBOx
    master,
    double,
    twin,
    triple,
    single,
    extra,
    ///////////////////////////// Cabins CheckBox
    hot,
    satellite,
    large,
    safe,
    newly,
    fly,
    swim,
    mini,
    wide,
    gym,
    sauna,
    cockpit,
    //////////////////////////////// WaterToys checkbox
    jet,
    scuba,
    inflatable,
    waterski,
    fishing,
    sup1,
    jetski1,
    ///////////////////////////////// Tags Checkbox
    instant,
    special,
    finest,
    family,
    loved,
    SUP,
    gourmet
  } = state;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Box>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.Heading}
      >
        <Grid item>
          <Box display="flex">
            <Typography
              variant="subtitle1"
              className={clsx(classes.Typography, {
                [classes.Increase]: true
              })}
            >
              Price
            </Typography>
            <div style={{ paddingRight: '5px' }} />
            <Typography>€4.000 & €100.000</Typography>
          </Box>
        </Grid>
        <Grid item>
          {' '}
          <IconButton
            onClick={() => setPrice((prev) => !prev)}
            className={clsx({
              [classes.Rotate]: price
            })}
          >
            <ExpandMoreIcon className={classes.Icon} />
          </IconButton>
        </Grid>
      </Grid>
      <Collapse in={price}>
        <AdvancedFilterSection
          Range={[0, 100]}
          RangeText={['Min Guest', 'Max Guest']}
        />
        <div style={{ paddingBottom: '32px' }} />
      </Collapse>
      <Divider />
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.Heading}
      >
        <Grid item>
          <Box display="flex">
            <Typography
              className={clsx(classes.Typography, {
                [classes.Increase]: true
              })}
            >
              Length
            </Typography>
            <div style={{ paddingRight: '5px' }} />
            <Typography>€4.000 & €100.000</Typography>
          </Box>
        </Grid>
        <Grid item>
          {' '}
          <IconButton
            onClick={() => setLength((prev) => !prev)}
            className={clsx({
              [classes.Rotate]: length
            })}
          >
            <ExpandMoreIcon className={classes.Icon} />
          </IconButton>
        </Grid>
      </Grid>
      <Collapse in={length}>
        <AdvancedFilterSection
          Range={[0, 100]}
          RangeText={['Min Guest', 'Max Guest']}
        />
        <div style={{ paddingBottom: '32px' }} />
      </Collapse>
      <Divider />{' '}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.Heading}
      >
        <Grid item>
          <Box display="flex">
            <Typography
              className={clsx(classes.Typography, {
                [classes.Increase]: true
              })}
            >
              Type
            </Typography>
            <div style={{ paddingRight: '5px' }} />
            <Typography>€4.000 & €100.000</Typography>
          </Box>
        </Grid>
        <Grid item>
          {' '}
          <IconButton
            onClick={() => setType((prev) => !prev)}
            className={clsx({
              [classes.Rotate]: type
            })}
          >
            <ExpandMoreIcon className={classes.Icon} />
          </IconButton>
        </Grid>
      </Grid>
      <Collapse in={type}>
        <CheckBox
          motor={motor}
          gilad={gilad}
          sailer={sailer}
          catamaran={catamaran}
          handleChange={handleChange}
        />
        <div style={{ paddingBottom: '32px' }} />
      </Collapse>
      <Divider />{' '}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.Heading}
      >
        <Grid item>
          <Box display="flex">
            <Typography
              className={clsx(classes.Typography, {
                [classes.Increase]: true
              })}
            >
              Cabins
            </Typography>
            <div style={{ paddingRight: '5px' }} />
            <Typography>€4.000 & €100.000</Typography>
          </Box>
        </Grid>
        <Grid item>
          {' '}
          <IconButton
            onClick={() => setCabins((prev) => !prev)}
            className={clsx({
              [classes.Rotate]: cabins
            })}
          >
            <ExpandMoreIcon className={classes.Icon} />
          </IconButton>
        </Grid>
      </Grid>
      <Collapse in={cabins}>
        <CheckBoxCabin
          master={master}
          double={double}
          twin={twin}
          triple={triple}
          single={single}
          extra={extra}
          handleChange={handleChange}
        />
        <div style={{ paddingBottom: '32px' }} />
      </Collapse>
      <Divider />{' '}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.Heading}
      >
        <Grid item>
          <Box display="flex">
            <Typography
              className={clsx(classes.Typography, {
                [classes.Increase]: true
              })}
            >
              Key Features
            </Typography>
            <div style={{ paddingRight: '5px' }} />
            <Typography>€4.000 & €100.000</Typography>
          </Box>
        </Grid>
        <Grid item>
          {' '}
          <IconButton
            onClick={() => setKeyfeatures((prev) => !prev)}
            className={clsx({
              [classes.Rotate]: keyFeatures
            })}
          >
            <ExpandMoreIcon className={classes.Icon} />
          </IconButton>
        </Grid>
      </Grid>
      <Collapse in={keyFeatures}>
        <CheckBoxKeyFeatures
          hot={hot}
          satellite={satellite}
          large={large}
          safe={safe}
          newly={newly}
          fly={fly}
          swim={swim}
          mini={mini}
          wide={wide}
          gym={gym}
          sauna={sauna}
          cockpit={cockpit}
          handleChange={handleChange}
        />
        <div style={{ paddingBottom: '32px' }} />
      </Collapse>
      <Divider />{' '}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.Heading}
      >
        <Grid item>
          <Box display="flex">
            <Typography
              className={clsx(classes.Typography, {
                [classes.Increase]: true
              })}
            >
              Water Toys
            </Typography>
            <div style={{ paddingRight: '5px' }} />
            <Typography>€4.000 & €100.000</Typography>
          </Box>
        </Grid>
        <Grid item>
          {' '}
          <IconButton
            onClick={() => setWatertoys((prev) => !prev)}
            className={clsx({
              [classes.Rotate]: waterToys
            })}
          >
            <ExpandMoreIcon className={classes.Icon} />
          </IconButton>
        </Grid>
      </Grid>
      <Collapse in={waterToys}>
        <ChackBoxWaterToys
          jet={jet}
          scuba={scuba}
          inflatable={inflatable}
          waterski={waterski}
          fishing={fishing}
          sup1={sup1}
          jetski1={jetski1}
          handleChange={handleChange}
        />
        <div style={{ paddingBottom: '32px' }} />
      </Collapse>
      <Divider />{' '}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.Heading}
      >
        <Grid item>
          <Box display="flex">
            <Typography
              className={clsx(classes.Typography, {
                [classes.Increase]: true
              })}
            >
              Tags
            </Typography>
            <div style={{ paddingRight: '5px' }} />
            <Typography>€4.000 & €100.000</Typography>
          </Box>
        </Grid>
        <Grid item>
          {' '}
          <IconButton
            onClick={() => setTags((prev) => !prev)}
            className={clsx({
              [classes.Rotate]: tags
            })}
          >
            <ExpandMoreIcon className={classes.Icon} />
          </IconButton>
        </Grid>
      </Grid>
      <Collapse in={tags}>
        <CheckBoxTags
          instant={instant}
          handleChange={handleChange}
          special={special}
          finest={finest}
          family={family}
          loved={loved}
          SUP={SUP}
          gourmet={gourmet}
        />
        <div style={{ paddingBottom: '32px' }} />
      </Collapse>
    </Box>
  );
}
