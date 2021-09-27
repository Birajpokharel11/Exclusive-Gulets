import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';
import YatchParty from 'public/assets/images/yatchParty.png';
import YatchYoga from 'public/assets/images/yatchYoga.png';
import underLine from 'public/assets/images/introductionLine.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: '2rem',
      backgroundColor: 'white'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    },
    buttonStyle: {
      backgroundColor: '#2A398D',
      color: '#FFFFFF',
      marginBottom: '4rem',
      '&:hover': {
        backgroundColor: '#2A398D'
      }
    }
  })
);

export default function Experiences(props) {
  const { experiences } = props;
  const classes = useStyles();
  return (
    <Box maxWidth="false" className={classes.root}>
      <Container>
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
              Do You Need Some Inspiration?
            </Typography>
          </Grid>

          <Grid item container justifyContent="center" xs={12}>
            <Image src={underLine} alt="underline" />
          </Grid>
          <Grid item>
            <Typography align="center" color="textPrimary" variant="subtitle1">
              ​There is more to yachting than just spending a week or so
              sailing. Special celebration, adrenaline-fuelled adventure or
              mindful relaxation. Our experienced team is dedicated to tailor
              your great escape, whatever the occasion is.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {experiences.length &&
            experiences.map((item) => (
              <Grid item container md={6} xs={12} spacing={2}>
                <Grid item container justifyContent="center">
                  <Image src={YatchParty} alt="guest" />
                </Grid>
                <Grid item container justifyContent="center">
                  <Typography
                    color="textPrimary"
                    align="center"
                    variant="subtitle1"
                    style={{ fontWeight: 'bold' }}
                  >
                    {item?.title}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    align="center"
                    color="textPrimary"
                    variant="subtitle2"
                  >
                    {item?.meta_description}
                  </Typography>
                </Grid>
              </Grid>
            ))}

          <Grid item container justifyContent="center">
            <Button
              variant="contained"
              size="large"
              className={classes.buttonStyle}
            >
              View All Experiences
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
