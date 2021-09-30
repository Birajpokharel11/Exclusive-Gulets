import React from 'react';
import Button from '@material-ui/core/Button';
import Grid, { GridSize } from '@material-ui/core/Grid';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

interface Props {
  onClick?: () => any;
  showMore?: () => any;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    Container: {
      padding: '0%',
      position: 'relative'
    },
    Button: {
      padding: '15px 50px',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '22px',
      background: '#2A398D',
      color: 'white',
      '&:hover': {
        background: '#2A398D'
      }
    },
    card: {
      height: '325px',
      color: '#00204e',
      width: '352px',
      background: '#f8f8fa'
    },
    typography1: {
      fontSize: '30px',
      lineHeight: '30px',
      fontWeight: 700,
      marginBottom: '20px'
    },
    typography2: {
      color: '#ceba9f',
      fontSize: '20px',
      fontWeight: 700,
      marginBottom: '100px'
    }
  })
);

const DiscoverMore = ({ showMore }: Props) => {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.card}>
      <CardActionArea
        style={{
          padding: '30px 20px'
        }}
      >
        <CardContent style={{ padding: '30px' }}>
          <Typography align="center" className={classes.typography1}>
            Discover more Blogs
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.typography2}
            align="center"
          >
            Go on... be curious
          </Typography>{' '}
          <Grid container>
            <Grid item container justifyContent="center">
              <Button
                onClick={showMore}
                variant="contained"
                className={classes.Button}
              >
                More
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DiscoverMore;
