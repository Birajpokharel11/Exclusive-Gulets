import Router from 'next/router';
import Image from 'next/image';
import _ from 'lodash';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography, Container, Grid } from '@material-ui/core';

import { createMarkup } from '@utils/misc';

import testimonial from '../../assets/images/testimonial.png';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: '1rem'
    },
    root: {
      maxWidth: 345,
      margin: '2rem'
    },
    dividerColor: {
      backgroundColor: 'rgb(206, 186, 159)',
      margin: '1rem 0 1rem '
    },
    cardStyle: {
      borderRadius: '0'
    },
    heading: {
      fontSize: '48px',
      fontWeight: 700,
      color: '#00204e',
      lineHeight: 1.2
    },
    intro_content: {
      color: '#00204e'
    },
    testimonialImage: {
      borderRadius: 999999
    }
  })
);

export default function ContentSection(props) {
  const classes = useStyles();

  const { contentData } = props;

  return (
    <Box component="section" maxWidth="false" mt={5}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item container sm={6} xs={12}>
            <Grid item>
              <Typography variant="h2" className={classes.heading}>
                {contentData?.heading}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" className={classes.intro_content}>
                {contentData?.intro_content}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" className={classes.intro_content}>
                {contentData?.intro_content_2}
              </Typography>
            </Grid>
            <Grid item container>
              <Grid item xs={3}>
                <Image
                  src={testimonial}
                  alt="img"
                  className={classes.testimonialImage}
                />
              </Grid>
              <Grid item xs={9}>
                <Typography
                  variant="subtitle2"
                  className={classes.intro_content}
                >
                  {contentData?.testimonial}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12}>
            <img
              src={contentData?.side_image?.url}
              alt="Picture of the author"
              style={{ height: '100%', width: '100%' }}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <Typography
              variant="subtitle2"
              className={classes.intro_content}
              dangerouslySetInnerHTML={createMarkup(contentData?.content)}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
