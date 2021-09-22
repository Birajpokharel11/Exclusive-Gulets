import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';
import YatchParty from 'public/assets/images/yatchParty.png';
import YatchYoga from 'public/assets/images/yatchYoga.png';
import underLine from 'public/assets/images/smallBlueUnderline.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: '2rem'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    },
    buttonStyle: {
      backgroundColor: '#2A398D',
      color: '#FFFFFF'
    }
  })
);

export default function NewsAndBlogs(props) {
  const { postsList } = props;
  const classes = useStyles();
  return (
    <Box maxWidth="false" className={classes.root}>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={2}
          style={{ paddingTop: '5rem' }}
        >
          <Grid item xs={12}>
            <Typography variant="h2" color="textPrimary" align="center">
              News & Blogs
            </Typography>
          </Grid>

          <Grid item container justifyContent="center" xs={12}>
            <Image src={underLine} alt="underline" />
          </Grid>
          <Grid item>
            <Typography align="center" color="textPrimary" variant="subtitle1">
              Keep up to date with our latest yachting news, charter
              destinations, special offers and more.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {postsList.map((post) => (
            <Grid item container md={4} xs={12} spacing={2}>
              <Grid item container justifyContent="center">
                <Image src={YatchParty} alt="guest" />
              </Grid>
              <Grid item container justifyContent="center">
                <Typography
                  align="center"
                  variant="subtitle1"
                  style={{ fontWeight: 'bold' }}
                >
                  {post.title}
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  align="center"
                  variant="subtitle2"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />
              </Grid>
            </Grid>
          ))}

          <Grid item container justifyContent="center">
            <Button variant="contained" className={classes.buttonStyle}>
              View All News & Blogs
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
