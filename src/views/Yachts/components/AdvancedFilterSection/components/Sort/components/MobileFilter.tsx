import React, { useRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import EnquiryForm from '@components/Enquiry';
import { useSwipeable } from 'react-swipeable';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import CloseIcon from '@material-ui/icons/Close';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  ListItemIcon,
  Divider,
  Typography,
  Dialog,
  Paper,
  Button
} from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import Filters from '../../Filters';
const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  sortFilters: {
    padding: '12px',
    color: '#2A398D'
  },
  Heading: {
    fontSize: '24px',
    lineHeight: '28.8px'
  },
  Divider: {
    marginTop: '24px',
    marginBottom: '24px'
  },
  Paper: {
    background: '#F5F0E4',
    minHeight: '2vh',
    width: '100%'
  },
  Button1: {
    height: '52px',
    width: '125px',
    border: '1px solid #2A398D'
  },
  Button2: {
    height: '52px',
    width: '200px',
    background: '#2A398D',
    color: 'white',
    '&:hover': { background: '#2A398D' }
  }
});
interface Props {
  open?: any;
  setOpen?: any;
  prevOpen?: any;
  setmobileSort?: any;
  setMobileFilter?: any;
}
export default function MobileFilter({
  open,
  setOpen,
  prevOpen,
  setmobileSort,
  setMobileFilter
}: Props) {
  const classes = useStyles();

  return (
    <div>
      {/* <SwipeableDrawer
        anchor="bottom"
        open={prevOpen}
        onOpen={() => setmobileSort((prev) => !prev)}
        onClose={() => setmobileSort((prev) => !prev)}
      >
        <Filters />{' '}
      </SwipeableDrawer> */}
      <Dialog fullScreen style={{ zIndex: 2 }} open={prevOpen}>
        <Box style={{ paddingTop: '65px' }} p={1.4}>
          <Box display="flex" justifyContent="flex-end" pt={0.5}>
            <IconButton onClick={() => setMobileFilter((prev) => !prev)}>
              <CloseIcon color="primary" />
            </IconButton>
          </Box>
          <Box pb={2}>
            <Typography variant="h2" className={classes.Heading}>
              Filter
            </Typography>
          </Box>
          <Filters />
        </Box>
        <Paper className={classes.Paper}>
          <Box p={5} style={{ display: 'flex', gap: '1rem' }}>
            <Button
              disableElevation
              className={classes.Button1}
              variant="outlined"
            >
              Clear All
            </Button>
            <Button
              className={classes.Button2}
              disableElevation
              variant="contained"
            >
              Show Filtered Yachts
            </Button>
          </Box>
        </Paper>
      </Dialog>
    </div>
  );
}
