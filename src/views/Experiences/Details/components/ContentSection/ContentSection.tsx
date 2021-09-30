import Router from 'next/router';
import Image from 'next/image';
import _ from 'lodash';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography, Container, Grid } from '@material-ui/core';
import EnquiryForm from '@components/EnquiryForm';

import { createMarkup } from '@utils/misc';

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

  const { contentData, route } = props;

  return (
    <Box component="section" maxWidth="false" mt={5}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item sm={8} xs={12}>
            <Typography
              variant="subtitle2"
              className={classes.intro_content}
              dangerouslySetInnerHTML={createMarkup(contentData?.content)}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <EnquiryForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
