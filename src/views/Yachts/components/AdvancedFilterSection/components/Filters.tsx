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
            <Typography>Price</Typography>
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
            <Typography>Length</Typography>
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
            <Typography>Type</Typography>
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
        <CheckBox />

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
            <Typography>Cabins</Typography>
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
        <CheckBoxCabin />
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
            <Typography>Key Features</Typography>
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
        <CheckBoxKeyFeatures />
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
            <Typography>Water Toys</Typography>
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
        <ChackBoxWaterToys />
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
            <Typography>Tags</Typography>
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
        <CheckBoxTags />
        <div style={{ paddingBottom: '32px' }} />
      </Collapse>
    </Box>
  );
}
