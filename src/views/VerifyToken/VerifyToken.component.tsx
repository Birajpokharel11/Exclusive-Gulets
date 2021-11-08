import React, { useEffect } from 'react';
import _ from 'lodash';
import RouterLink from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  Grid,
  Button,
  IconButton,
  Typography,
  Container,
  CircularProgress
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import container from './VerifyToken.container';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { getTenantDomain } from '@utils/data';

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
        borderColor: '1px solid #bccbe3'
        // backgroundColor: '#e8f0fe'
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
    margin: theme.spacing(2, 0),
    background: '#808FA7',
    border: '1px solid #BCCBE3',
    borderRadius: 99999
  },
  link: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '150%',
    textDecoration: 'underline',
    color: '#808fa7',
    cursor: 'pointer'
  }
}));

const SignIn = ({ onVerifyBrokerStart, auth: { loading } }) => {
  const router = useRouter();
  const { query } = router;

  const classes = useStyles();

  useEffect(() => {
    if (!_.isEmpty(query)) {
      onVerifyBrokerStart({
        token: query.token ?? '',
        email: query.username ?? ''
      });
    }
  }, []);

  const attachDomain = async () => {
    const subdomain = await getTenantDomain(query.domain);

    if (!subdomain) {
      return {
        notFound: true
      };
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid className={classes.grid} container>
          <Grid
            className={classes.content}
            item
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            {loading ? (
              <CircularProgress />
            ) : (
              <>
                <DoneIcon style={{ fontSize: '5rem' }} />
                <Typography variant="h1" color="primary">
                  Successfully verified the broker account
                </Typography>
                <Button
                  className={classes.signInButton}
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={attachDomain}
                  endIcon={<ArrowForwardIcon style={{ color: '#ffffff' }} />}
                >
                  <Typography variant="body1" color="secondary">
                    Go to domain
                  </Typography>
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default container(SignIn);
