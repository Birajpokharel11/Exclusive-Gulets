import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Container,
  Grid,
  Typography,
  IconButton
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import clsx from 'clsx';

import Filter from './components/Filter';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      background: '#F7F7F7',
      height: '122px'
    },
    Yatch: {
      width: ' 100%',
      display: 'block',
      height: ' 671px',
      objectFit: 'cover'
    },

    CheckIn: {
      minHeight: '132px',
      width: '100%',
      backgroundColor: '#071529',
      padding: ' 3%',
      display: 'flex',
      alignItems: 'center'
    },
    Typography: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '24px',
      color: ' #FFFFFF'
    },
    margin: {
      minWidth: '190px',
      height: '52px',
      borderRadius: '4px',
      textTransform: 'none'
    },
    enquire: {
      border: '1px solid #FFFFFF',
      color: 'white'
    },
    Book: { background: ' rgba(245, 240, 228, 1)', color: '#2A398D' },
    MiddleText: {
      fontWeight: 600
    },
    Container: {
      padding: '0%',
      position: 'relative'
    },

    ImageTextFont: {
      fontFamily: ' Lato',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: ' 60px',
      color: '#FFFFFF',
      [theme.breakpoints.down(435)]: {
        fontSize: '32px'
      }
    },
    ImageTextPosition: {
      position: 'absolute',
      left: '4.94%',
      top: '62%',
      [theme.breakpoints.down(435)]: {
        marginTop: '50px'
      }
    },
    borderShadow: {},
    ImageText2Font: {
      fontFamily: ' Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: ' 24px',
      color: '#FFFFFF',
      [theme.breakpoints.down(435)]: {
        fontSize: '16px'
      }
    },
    ImageText2Position: {
      position: 'absolute',
      marginTop: '90px',
      left: '4.94%',
      [theme.breakpoints.down(435)]: {
        marginTop: '100px'
      }
    },
    imageTextShadows: {
      position: 'absolute',
      top: '45.47%',
      width: '100%',
      [theme.breakpoints.down(445)]: {
        height: '210px',
        background:
          'linear-gradient(358.02deg, #091527 1.48%, rgba(9, 21, 39, 0.914539) 37.02%, rgba(9, 21, 39, 0.291523) 72.12%, rgba(9, 21, 39, 0) 83.12%)'
      },
      [theme.breakpoints.down(435)]: {
        height: '210px',
        background:
          'linear-gradient(358.02deg, #091527 1.48%, rgba(9, 21, 39, 0.914539) 37.02%, rgba(9, 21, 39, 0.291523) 72.12%, rgba(9, 21, 39, 0) 83.12%)',
        position: 'absolute',
        top: '47.47%'
      },
      [theme.breakpoints.down(380)]: {
        height: '210px',
        background:
          'linear-gradient(358.02deg, #091527 1.48%, rgba(9, 21, 39, 0.914539) 37.02%, rgba(9, 21, 39, 0.291523) 72.12%, rgba(9, 21, 39, 0) 83.12%)',
        position: 'absolute',
        top: '45.09%'
      },
      [theme.breakpoints.down(325)]: {
        top: '44.95%'
      }
    }
  })
);

export default function HeroSection(props) {
  const { data } = props;
  const classes = useStyles();
  const math = Math.floor(Math.random() * 10);
  console.log('yachtsdetail', data.length);
  return (
    <>
      <Container maxWidth={false} className={classes.Container}>
        <img src={data?.mainImage} alt="HeroYatch" className={classes.Yatch} />
        <div className={classes.imageTextShadows}>
          <div
            style={{
              position: 'relative'
            }}
          >
            <Typography
              className={clsx(classes.ImageTextFont, classes.ImageTextPosition)}
            >
              {data?.name}
            </Typography>
            <Typography
              className={clsx(
                classes.ImageText2Font,
                classes.ImageText2Position
              )}
            >
              {!data.length ? math : data.length}m |{' '}
              {!data?.category && 'Motor Yachts'} |{' '}
              {!data?.noOfPassengers && math} Guests
            </Typography>
          </div>
        </div>

        <Container maxWidth={false} className={classes.CheckIn}>
          <Grid
            container
            spacing={2}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Grid
              item
              container
              md={12}
              lg={8}
              style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}
            >
              <Grid
                item
                style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <Filter />
              </Grid>
              <Grid item>
                <Typography className={classes.Typography}>
                  From{' '}
                  <span
                    className={clsx(classes.Typography, classes.MiddleText)}
                  >
                    {' '}
                    € {!data?.salePrice && '10022'}{' '}
                  </span>{' '}
                  to{' '}
                  <span
                    className={clsx(classes.Typography, classes.MiddleText)}
                  >
                    {' '}
                    € {!data?.salePrice && '11302'}
                  </span>
                </Typography>
              </Grid>
            </Grid>

            <Grid item container md={4}>
              <Grid
                item
                container
                spacing={0}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <IconButton data-cy="FavouriteIcon">
                    <FavoriteIcon style={{ color: 'White' }} />
                  </IconButton>
                </Grid>
                <Grid item md container spacing={1}>
                  <Grid item>
                    <Button
                      variant="outlined"
                      className={clsx(classes.margin, classes.enquire)}
                      data-cy="Enquire"
                    >
                      Enquire
                    </Button>
                  </Grid>

                  <Grid item md>
                    <Button
                      variant="outlined"
                      size="large"
                      color="primary"
                      className={clsx(classes.margin, classes.Book)}
                      data-cy="BookNow"
                    >
                      Book Now
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}
