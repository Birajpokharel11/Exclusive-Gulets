import React from 'react';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Box, Checkbox, Divider } from '@material-ui/core';
import Typography from '@modules/components/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    },
    Dialouge: { marginTop: '100px', height: '70vh' }
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DestinationDialouge() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  ////////////////////
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder'
  ];
  const length = names.length;

  const [personName, setPersonName] = React.useState<string[]>([]);
  ///////////////////////////////
  return (
    <div>
      <Dialog
        fullScreen
        className={classes.Dialouge}
        open={true}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Box pl={3} pb={1} pt={6}>
          {' '}
          <Typography variant="h3">Select a destination</Typography>
        </Box>
        {names.map((name, i) => (
          <Box key={i}>
            {' '}
            <MenuItem style={{}} key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
            {length !== i + 1 && (
              <Divider variant="middle" style={{ marginBottom: '15px' }} />
            )}
          </Box>
        ))}
      </Dialog>
    </div>
  );
}
