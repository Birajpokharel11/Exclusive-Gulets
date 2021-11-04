import { makeStyles } from '@material-ui/core/styles';

import { Topbar, Footer } from './components';

import CustomAlert from '@components/CustomAlert';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  content: {
    height: '100%',
    minHeight: '80vh'
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginTop: '8px'
  }
}));

const Main = (props) => {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar {...rest} />
      <CustomAlert />
      <div className={classes.toolbarMargin} />
      <main className={classes.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
