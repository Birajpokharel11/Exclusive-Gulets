import React from 'react';
import Button from '@material-ui/core/Button';
import Grid, { GridSize } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { classNames } from 'react-select/dist/declarations/src/utils';
import { BLOGS_SORTING } from '@components/Sorting/sorting';
import { fetchBlogStart } from '@store/blogs/blog.actions';
import container from './DiscoverMore.container';
interface Props {
  onClick?: () => any;
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
    }
  })
);

const DiscoverMore = (props) => {
  const classes = useStyles();
  const { fetchBlogStart } = props;
  const [number, setNumber] = React.useState(10);
  const handleClick = () => {
    setNumber((prev) => prev + 5);
    console.log(number, 'number');
    fetchBlogStart({ amount_per_page: number });
  };
  console.log('props', props);

  return (
    <Card
      elevation={0}
      style={{
        height: '325px',
        color: '#00204e',
        width: '352px',
        background: '#f8f8fa'
      }}
    >
      <CardActionArea
        style={{
          padding: '30px 20px'
        }}
      >
        <CardContent style={{ padding: '30px' }}>
          <Typography
            align="center"
            style={{
              fontSize: '30px',
              lineHeight: '30px',
              fontWeight: 700,
              marginBottom: '20px'
            }}
          >
            Discover more Blogs
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              color: '#ceba9f',
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '100px'
            }}
            align="center"
          >
            Go on... be curious
          </Typography>{' '}
          <Grid container>
            <Grid item container justifyContent="center">
              <Button
                onClick={handleClick}
                variant="contained"
                className={classes.Button}
              >
                {' '}
                More
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default container(DiscoverMore);
