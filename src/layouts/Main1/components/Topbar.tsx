import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: ' 210px',
    minHeight: '35.84px',
    cursor: 'pointer',
    [theme.breakpoints.down(340)]: {
      width: '180px'
    }
  },
  appBar: {
    height: '72px',
    maxWidth: '100%',
    zIndex: theme.zIndex.modal + 1
  }
}));

export default function Header() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={classes.appBar}
      style={{
        backgroundColor: '#091527'
      }}
    >
      <Toolbar>
        <div onClick={() => router.push('/', undefined, { shallow: true })}>
          <img
            src="/assets/images/logo.svg"
            alt="me"
            className={classes.logo}
          />
        </div>
        <div style={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}
