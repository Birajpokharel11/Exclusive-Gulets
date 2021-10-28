import React, { useRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import EnquiryForm from '@components/Enquiry';
import { useSwipeable } from 'react-swipeable';
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
}
export default function Drawer({ open, setOpen }: Props) {
  const classes = useStyles();
  const handlers = useSwipeable({
    onSwipedUp: (e) => {
      setOpen(true);
    }
  });
  return (
    <div {...handlers}>
      <SwipeableDrawer
        style={{ height: '90%' }}
        anchor="bottom"
        open={open}
        onOpen={() => setOpen((prev) => !prev)}
        onClose={() => setOpen((prev) => !prev)}
      >
        <EnquiryForm setOpen={setOpen} />
      </SwipeableDrawer>
    </div>
  );
}
