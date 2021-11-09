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
import { words } from 'lodash';
const useStyles = makeStyles((theme) =>
  createStyles({
    Heading: { paddingBottom: '10px', cursor: 'pointer' },
    Icon: {
      color: ' #2A398D'
    },
    Rotate: {
      transform: 'rotate(180deg)',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    Button: {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    Typography: {
      color: '#091527'
    },
    Increase: {
      fontWeight: 500,
      fontSize: '18px',
      fontStyle: 'normal'
    },
    Dividers: {
      [theme.breakpoints.down('xs')]: {
        marginTop: '16px',
        marginBottom: '16px'
      }
    },
    MobileHeight: {
      [theme.breakpoints.down('xs')]: {
        overflow: 'hidden',
        height: '58vh'
      }
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

  const [top, setTop] = React.useState({
    gilad: true,
    motor: false,
    sailer: false,
    catamaran: false
  });
  const [cab, setCab] = React.useState({
    master: true,
    double: false,
    twin: false,
    triple: false,
    single: false,
    extra: false
  });
  const [key, setKey] = React.useState({
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
    cockpit: false
    ////////////////
  });
  const [water, setWater] = React.useState({
    jet: false,
    scuba: false,
    inflatable: false,
    waterski: false,
    fishing: false,
    sup1: false,
    jetski1: false
    ////////////////
  });
  const [taggy, setTaggy] = React.useState({
    instant: false,
    special: false,
    finest: false,
    loved: false,
    family: false,
    SUP: false,
    gourmet: false
  });

  const { gilad, motor, sailer, catamaran } = top;
  const { master, double, twin, triple, single, extra } = cab;

  const {
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
    cockpit
  } = key;

  const { jet, scuba, inflatable, waterski, fishing, sup1, jetski1 } = water;

  const { instant, special, finest, family, loved, SUP, gourmet } = taggy;

  const handleChangeTop = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTop({ ...top, [event.target.name]: event.target.checked });
  };
  const handleChangeCab = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCab({ ...cab, [event.target.name]: event.target.checked });
  };
  const handleChangeKey = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey({ ...key, [event.target.name]: event.target.checked });
  };
  const handleChangeWater = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWater({ ...water, [event.target.name]: event.target.checked });
  };
  const handleChangeTaggy = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaggy({ ...taggy, [event.target.name]: event.target.checked });
  };
  return (
    <Box className={classes.MobileHeight}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.Heading}
        onClick={() => setPrice((prev) => !prev)}
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
            className={clsx(classes.Button, {
              [classes.Rotate]: price
            })}
          >
            <ExpandMoreIcon className={classes.Icon} />
          </IconButton>
        </Grid>
      </Grid>
      <Collapse in={price}>
        <AdvancedFilterSection
          price={price}
          Range={[0, 100]}
          RangeText={['Min Guest', 'Max Guest']}
        />
        <div style={{ paddingBottom: '32px' }} />
      </Collapse>
      <Divider className={classes.Dividers} />
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.Heading}
        onClick={() => setLength((prev) => !prev)}
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
            <Typography>()</Typography>
          </Box>
        </Grid>
        <Grid item>
          {' '}
          <IconButton
            onClick={() => setLength((prev) => !prev)}
            className={clsx(classes.Button, {
              [classes.Rotate]: price
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
      <Divider className={classes.Dividers} />
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        onClick={() => setType((prev) => !prev)}
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
            className={clsx(classes.Button, {
              [classes.Rotate]: price
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
          handleChange={handleChangeTop}
        />
        <div style={{ paddingBottom: '32px' }} />
      </Collapse>
      <Divider className={classes.Dividers} />{' '}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.Heading}
        onClick={() => setCabins((prev) => !prev)}
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
            className={clsx(classes.Button, {
              [classes.Rotate]: price
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
          handleChange={handleChangeCab}
        />
        <div style={{ paddingBottom: '32px' }} />
      </Collapse>
      <Divider className={classes.Dividers} />{' '}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.Heading}
        onClick={() => setKeyfeatures((prev) => !prev)}
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
            className={clsx(classes.Button, {
              [classes.Rotate]: price
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
          handleChange={handleChangeKey}
        />
        <div style={{ paddingBottom: '32px' }} />
      </Collapse>
      <Divider className={classes.Dividers} />{' '}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.Heading}
        onClick={() => setWatertoys((prev) => !prev)}
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
            className={clsx(classes.Button, {
              [classes.Rotate]: price
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
          handleChange={handleChangeWater}
        />
        <div style={{ paddingBottom: '32px' }} />
      </Collapse>
      <Divider className={classes.Dividers} />{' '}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.Heading}
        onClick={() => setTags((prev) => !prev)}
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
            className={clsx(classes.Button, {
              [classes.Rotate]: price
            })}
          >
            <ExpandMoreIcon className={classes.Icon} />
          </IconButton>
        </Grid>
      </Grid>
      <Collapse in={tags}>
        <CheckBoxTags
          instant={instant}
          handleChange={handleChangeTaggy}
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
