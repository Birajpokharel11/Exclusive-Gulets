import React from 'react';
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMarkup } from '@utils/misc';

import Location from '@modules/icons/Location';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    padding: '0 11px'
  },
  grid1: {
    order: 2,
    [theme.breakpoints.up('sm')]: {
      order: 1
    }
  },
  grid2: {
    order: 1,
    [theme.breakpoints.up('sm')]: {
      order: 2
    }
  },
  img: {
    height: '480px',
    width: '100%',
    objectFit: 'cover',
    transition: 'all 0.3s ease 0s',
    [theme.breakpoints.down('md')]: {
      height: '290px'
    }
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex',
    [theme.breakpoints.up('md')]: {
      marginBottom: '42px'
    }
  },
  title: {
    lineHeight: '38px',
    fontWeight: 300,
    marginBottom: '0.5rem',
    [theme.breakpoints.up('md')]: {
      marginBottom: '32px'
    }
  },
  description: {
    marginBottom: '20px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '40px'
    }
  }
}));

const SildeItem = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        lg={7}
        md={6}
        sm={6}
        xs={12}
        className={classes.grid1}
      >
        <Grid item xs={matchesSM ? undefined : 6}>
          <Typography variant="h3" className={classes.title}>
            {props?.name}
          </Typography>
        </Grid>
        <Grid
          item
          container={matchesSM ? undefined : true}
          justifyContent={matchesSM ? undefined : 'flex-end'}
          xs={matchesSM ? undefined : 6}
        >
          <Typography
            variant="subtitle1"
            align="right"
            className={classes.wrapIcon}
          >
            <Location style={{ marginRight: '8px' }} />
            {props.sailing_countries.length &&
              props.sailing_countries.map((country, i) => (
                <>
                  {i > 0 && ', '}

                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="p"
                    align="center"
                    style={{ display: ' inline-block' }}
                  >
                    {country?.name}
                  </Typography>
                </>
              ))}
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="h4"
            className={classes.description}
            dangerouslySetInnerHTML={createMarkup(props?.about)}
          />
        </Grid>

        <Grid item container>
          <Button
            fullWidth={matchesSM ? undefined : true}
            variant="contained"
            size="large"
            color="primary"
          >
            View Details
          </Button>
        </Grid>
      </Grid>
      <Grid item lg={5} md={6} sm={6} xs={12} className={classes.grid2}>
        <img src={props?.featured_image_1?.url} className={classes.img} />
      </Grid>
    </Grid>
  );
};

export default SildeItem;
