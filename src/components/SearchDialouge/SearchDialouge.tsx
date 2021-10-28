import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import CustomizedInputBase from '@components/SearchTopbar';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    }
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

interface Porps {
  search?: any;
  setSearch?: any;
}
export default function FullScreenDialog({ search, setSearch }: Porps) {
  const classes = useStyles();

  const handleClose = () => {
    setSearch(!search);
  };

  return (
    <div>
      <Dialog
        fullScreen
        style={{ height: '15vh' }}
        PaperProps={{
          style: {
            background: '#091527',
            paddingTop: '100px'
          }
        }}
        open={search}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <CustomizedInputBase />
      </Dialog>
    </div>
  );
}
