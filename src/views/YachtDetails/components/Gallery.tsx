import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { Grid, Typography, useTheme } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingLeft: '20px',
    paddingRight: '20px',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  imageList: {
    width: '100%',
    height: 905,
    [theme.breakpoints.down(500)]: {
      display: 'none',
      MarginLeft: '100px',
      maxwidth: '80%',
      height: 'auto'
    }
  },
  MobileView: {
    display: 'none',

    [theme.breakpoints.down(500)]: {
      display: 'block',
      width: '100%',
      marginLeft: '15px',
      height: 'auto',
      background:
        'linear-gradient(354.05deg, #091527 4.18%, rgba(9, 21, 39, 0.914539) 43.61%, rgba(9, 21, 39, 0) 94.76%)'
    },
    [theme.breakpoints.down(420)]: {
      display: 'block',
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: 'auto'
    }
  },
  typography: {
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fortSize: '24px',
    color: 'white',
    position: 'relative',
    display: 'none',
    background:
      'linear-gradient(180.05deg, #091527 4.18%, rgba(9, 21, 39, 0.914539) 43.61%, rgba(9, 21, 39, 0) 94.76%)',
    [theme.breakpoints.down(500)]: {
      display: 'block',
      left: '4.30%',
      top: '18%',
      padding: '8%'
    },
    [theme.breakpoints.down(380)]: {
      display: 'block',
      left: '0%',
      top: '18%',
      padding: '8%'
    }
  },
  TitleBar: {
    width: '100%',
    height: '80px',
    background:
      'linear-gradient(180.05deg, #091527 4.18%, rgba(9, 21, 39, 0.914539) 43.61%, rgba(9, 21, 39, 0) 94.76%)'
  }
}));

const itemData = [
  {
    img: '/assets/images/Pic1.svg',
    title: 'Relaxing Jacuzzi',
    author: 'author',
    cols: 2
  },
  {
    img: '/assets/images/Pic2.svg',
    title: 'Gourmet Dining',
    author: 'author',
    cols: 1
  },
  {
    img: '/assets/images/Pic2.svg',
    title: 'Massage Services',
    author: 'author',
    cols: 1
  },
  {
    img: '/assets/images/Pic2.svg',
    title: 'Massage Services',
    author: 'author',
    cols: 1
  },
  {
    img: '/assets/images/Pic2.svg',
    title: 'Massage Services',
    author: 'author',
    cols: 1
  }
];
const MobileData = [
  {
    img: '/assets/images/MobilePic1.svg',
    title: 'Relaxing Jacuzzi',
    author: 'author',
    cols: 1
  },
  {
    img: '/assets/images/MobilePic2.svg',
    title: 'Gourmet Dining',
    author: 'author',
    cols: 1
  },
  {
    img: '/assets/images/MobilePic2.svg',
    title: 'Massage Services',
    author: 'author',
    cols: 1
  },
  {
    img: '/assets/images/MobilePic2.svg',
    title: 'assage Services',
    author: 'author',
    cols: 1
  },
  {
    img: '/assets/images/MobilePic2.svg',
    title: 'Massage Services',
    author: 'author',
    cols: 1
  }
];

export default function Gallery() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {itemData.map((item, i) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            style={{ height: '450px' }}
          >
            <img src={item.img} alt={item.title} data-cy={`BoatPic-${i}`} />
            <ImageListItemBar
              position="top"
              actionIcon={
                <IconButton>
                  <Typography
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      fontFamily: 'lato',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      fontSize: '24px',
                      color: '#ffffff'
                    }}
                  >
                    {item.title}
                  </Typography>
                </IconButton>
              }
              actionPosition="left"
              className={classes.TitleBar}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Grid container spacing={2}>
        {MobileData.map((item, i) => (
          <Grid item key={i}>
            <Typography className={classes.typography}>{item.title}</Typography>
            <img
              src={item.img}
              className={classes.MobileView}
              alt={item.title}
              data-cy={`BoatMobilePic-${i}`}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
