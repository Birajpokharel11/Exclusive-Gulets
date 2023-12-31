import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Rating from '@material-ui/lab/Rating';
import MobileReviewsSlider from './components/MobileReviews';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      boxShadow: 'none'
    },
    Date: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '14px',
      color: '#2A398D',
      width: '79px',
      textAlign: 'center'
    },
    listHeader: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '32px',
      color: '#2A398D',
      textAlign: 'center'
    },
    listText: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '18px',
      color: '#2A398D'
    },
    listitemText: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      color: '#2A398D'
    },
    listitemText2: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '16px',
      color: '#2A398D',
      paddingBottom: '2%',
      textAlign: 'justify'
    },
    Reviews: {
      paddingTop: '5%'
    },
    Cards: {
      width: '100%',
      paddingTop: '3%',
      [theme.breakpoints.down(1030)]: {
        paddingLeft: '10%'
      },
      [theme.breakpoints.down(780)]: {
        paddingLeft: '6%'
      }
    }
  })
);
function Reviews() {
  const [value, setValue] = React.useState(2);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(500));
  const classes = useStyles();
  return (
    <Paper
      elevation={0}
      style={{
        width: '100%',
        minHeight: '870px',
        paddingBottom: '10%',
        background: ' #ffffff'
      }}
    >
      <Container className={classes.Reviews}>
        <Typography
          className={classes.listHeader}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          Reviews from Our Customers
        </Typography>
        <Typography
          className={classes.listText}
          style={{ display: 'flex', textAlign: 'justify', paddingTop: '48px' }}
        >
          A text like discover those destinations with your perfect yacht will
          be written here. Perfect location and the perfect yacht for your
          ultimate charter experience. Earth covered in water, there is always a
          new exciting destination to explore.
        </Typography>
      </Container>
      <Container maxWidth="md" className={classes.Cards}>
        {!matches ? (
          <Grid container justifyContent="space-around">
            <Grid item xs>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent style={{ backgroundColor: '#F5F0E4' }}>
                    <Typography gutterBottom className={classes.listitemText}>
                      Cyclades Islands Greece
                    </Typography>
                    <Typography gutterBottom className={classes.listitemText}>
                      portugal
                    </Typography>
                    <Rating
                      name="read-only"
                      value={value}
                      readOnly
                      style={{ paddingBottom: '2%' }}
                    />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.listitemText2}
                    >
                      “Thank you all so so so much for all of your help and
                      patience with getting through this kosher week. My family
                      had the best trip of their lives so I take my hat off to
                      you all. Please pass on my sincere thanks also to Captain
                      Askin and his team who I know showed patience and
                      professionalism throughout what was no doubt a very
                      challenging week.”
                    </Typography>
                    <Typography className={classes.Date}>
                      August 2020
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent style={{ backgroundColor: '#F5F0E4' }}>
                    <Typography gutterBottom className={classes.listitemText}>
                      Cyclades Islands Greece
                    </Typography>
                    <Typography gutterBottom className={classes.listitemText}>
                      portugal
                    </Typography>
                    <Rating
                      name="read-only"
                      value={value}
                      readOnly
                      style={{ paddingBottom: '2%' }}
                    />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.listitemText2}
                    >
                      “Thank you all so so so much for all of your help and
                      patience with getting through this kosher week. My family
                      had the best trip of their lives so I take my hat off to
                      you all. Please pass on my sincere thanks also to Captain
                      Askin and his team who I know showed patience and
                      professionalism throughout what was no doubt a very
                      challenging week.”
                    </Typography>
                    <Typography className={classes.Date}>
                      August 2020
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        ) : (
          <MobileReviewsSlider />
        )}
      </Container>
    </Paper>
  );
}

export default Reviews;
