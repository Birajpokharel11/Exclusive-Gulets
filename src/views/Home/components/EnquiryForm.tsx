import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';
import { MenuItem, TextField } from '@material-ui/core';

import YatchParty from 'public/assets/images/yatchParty.png';
import YatchYoga from 'public/assets/images/yatchYoga.png';
import underLine from 'public/assets/images/introductionLine.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: '6rem',
      backgroundColor: '#F5F0E4'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    },
    buttonStyle: {
      backgroundColor: '#2A398D',
      color: '#FFFFFF',
      marginBottom: '4rem'
    },
    textWidth: {
      width: '100%'
    }
  })
);

export default function EnquiryForm() {
  const classes = useStyles();
  return (
    <Box maxWidth="false" className={classes.root}>
      <Container maxWidth="md">
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
              We can save you time & money.
            </Typography>
          </Grid>

          <Grid item>
            <Typography align="center" color="textPrimary" variant="subtitle1">
              We understand that your time is valuable, and it is no easy task
              to choose the right boat out of so many! Our on-line portfolio
              represents a small number of the yachts that eXclusive Gulets has
              available for charter. To discover an even wider selection and
              find out about our best offers, please fill out the form below.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3}>
          <Grid item container md={6} xs={12} spacing={2}>
            <Grid item xs={3}>
              <TextField
                id="select"
                value="title"
                select
                variant="outlined"
                className={classes.textWidth}
              >
                <MenuItem value="title">Title</MenuItem>
                <MenuItem value="ten">Ten</MenuItem>
                <MenuItem value="twenty">Twenty</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                className={classes.textWidth}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className={classes.textWidth}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="select"
                value="country"
                select
                variant="outlined"
                className={classes.textWidth}
              >
                <MenuItem value="country">Country</MenuItem>
                <MenuItem value="ten">Ten</MenuItem>
                <MenuItem value="twenty">Twenty</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="outlined-basic"
                label="Mobile Phone"
                variant="outlined"
                className={classes.textWidth}
              />
            </Grid>
          </Grid>
          <Grid item container md={6} xs={12}>
            <TextField
              id="standard-multiline-static"
              label="Your Comments"
              multiline
              rows={9}
              variant="outlined"
              className={classes.textWidth}
            />
          </Grid>
          <Grid item container justifyContent="center">
            <Button
              variant="contained"
              size="large"
              className={classes.buttonStyle}
            >
              Enquire
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
