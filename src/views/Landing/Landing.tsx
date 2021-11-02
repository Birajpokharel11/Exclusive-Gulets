import {
  Grid,
  Button,
  IconButton,
  Typography,
  CircularProgress,
  Container,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '80px 0 100px',
    [theme.breakpoints.down('sm')]: {
      padding: '60px 0'
    }
  },
  grid: {
    height: '100%'
  },
  imgContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    position: 'absolute',
    left: '100px',
    top: '40px',
    [theme.breakpoints.down('xs')]: {
      left: '30px',
      top: '40px'
    }
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    padding: '0 200px 135px 280px',
    [theme.breakpoints.down('xs')]: {
      padding: '0 20px 13px 28px'
    }
  },
  title: {
    height: '18px',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '18px',
    letterSpacing: '.15em',
    textTransform: 'uppercase',
    color: '#ff9536',
    marginBottom: '31px',
    marginTop: '142px'
  },
  sugestion: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '48px',
    lineHeight: '56px',
    color: '#00204e',
    marginBottom: 0
  },
  form: {
    marginTop: '51px'
  },

  textField: {
    marginTop: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '1px solid #bccbe3',
        backgroundColor: '#e8f0fe'
      },
      '&:hover fieldset': {
        borderColor: '1px solid #bccbe3'
      },
      '&.Mui-focused fieldset': {
        borderColor: '1px solid #bccbe3'
      }
    }
  },
  signInButton: {
    background: '#0290d4',
    color: '#ffffff',
    borderRadius: 99999,
    padding: '15px'
  },
  link: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '150%',
    textDecoration: 'underline',
    color: '#808fa7',
    cursor: 'pointer'
  },
  header: {
    color: '#333333'
  },

  optionText: {
    color: '#777'
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={3} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              BEST THING EVER INVENTED
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              FOR CHARTER MANAGERS
            </Typography>
          </Grid>
          <Box mt={3}>
            <Grid item xs={12} style={{ backgroundColor: '#7c7b78' }}>
              <Typography
                variant="h3"
                align="center"
                color="secondary"
                style={{ padding: '10px' }}
              >
                If you are only managing one yacht, its FREE too.
                <br /> No kidding.
              </Typography>
            </Grid>
          </Box>
          <Grid item container xs={12} justifyContent="center">
            <Button variant="contained" className={classes.signInButton}>
              Get started for FREE
            </Button>
          </Grid>
        </Grid>
        <Box mt={12}>
          <Grid
            container
            justifyContent="center"
            spacing={3}
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography
                variant="h2"
                align="center"
                className={classes.header}
              >
                What does <strong>Yacht Cloud</strong> provide?
              </Typography>
            </Grid>
            <Grid item container xs={12} spacing={2}>
              <Grid item sm={3} xs={12}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.optionText}
                >
                  Charter Calendar
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.optionText}
                >
                  You can manage your confirmed charters and options at a single
                  center.
                </Typography>
              </Grid>
              <Grid item sm={3} xs={12}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.optionText}
                >
                  Security
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.optionText}
                >
                  Yacht Cloud is a cloud-based software where all your
                  information is stored securely on our cloud servers.
                </Typography>
              </Grid>
              <Grid item sm={3} xs={12}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.optionText}
                >
                  Yacht Listings
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.optionText}
                >
                  Yacht Cloud automatically generates online broker friendly
                  listing for your yachts. You can upload your own pdf documents
                  for easy access too.
                </Typography>
              </Grid>
              <Grid item sm={3} xs={12}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.optionText}
                >
                  Support
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.optionText}
                >
                  Here at Yacht Cloud, we believe at constant improvement. You
                  can reach us 7/24 for your support and features requests.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
