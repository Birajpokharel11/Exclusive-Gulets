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
  Typography
} from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

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
    paddingLeft: '13px',
    paddingBottom: '13px',
    fontSize: '24px',
    lineHeight: '28.8px'
  },
  Divider: {
    marginTop: '24px',
    marginBottom: '24px'
  }
});
interface Props {
  open?: any;
  setOpen?: any;
  prevOpen?: any;
  setmobileSort?: any;
}
export default function MobileSort({
  open,
  setOpen,
  prevOpen,
  setmobileSort
}: Props) {
  const classes = useStyles();

  return (
    <div>
      <SwipeableDrawer
        anchor="bottom"
        open={prevOpen}
        onOpen={() => setmobileSort((prev) => !prev)}
        onClose={() => setmobileSort((prev) => !prev)}
      >
        <Box pl="16px" pb="26px">
          <Box display="flex" justifyContent="flex-end" pt={2} pb={2} pr="10px">
            {' '}
            <CloseIcon />
          </Box>
          <Typography variant="h2" className={classes.Heading}>
            Sort
          </Typography>
          <Box display="flex" alignItems="center">
            <FormGroup style={{ width: '100%', paddingRight: '10px' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CircleUnchecked />}
                    style={{ color: '#2A398D' }}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                }
                label="Price - Low to High"
              />
              <Divider component="li" className={classes.Divider} />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CircleUnchecked />}
                    style={{ color: '#2A398D' }}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                }
                label="Price - High to Low"
              />{' '}
              <Divider component="li" className={classes.Divider} />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CircleUnchecked />}
                    style={{ color: '#2A398D' }}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                }
                label="Length - Low to High"
              />{' '}
              <Divider component="li" className={classes.Divider} />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CircleUnchecked />}
                    style={{ color: '#2A398D' }}
                    checkedIcon={<RadioButtonCheckedIcon />}
                  />
                }
                label="Length - High to Low"
              />
            </FormGroup>
          </Box>{' '}
        </Box>
      </SwipeableDrawer>
    </div>
  );
}
