import React, { useRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import EnquiryForm from '@components/Enquiry';
import { useSwipeable } from 'react-swipeable';

import CloseIcon from '@material-ui/icons/Close';
import { Box } from '@material-ui/core';
const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
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
        <Box display="flex" justifyContent="flex-end" pt={2} pb={2}>
          <CloseIcon />
        </Box>
        xaaassaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaassaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaassaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaassaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaassaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaassaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
        xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa xaaaaaaaaa
      </SwipeableDrawer>
    </div>
  );
}
