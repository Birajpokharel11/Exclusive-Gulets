import { createStyles, makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import {
  Introduction,
  SpecialOffers,
  CharterYatch,
  Destinations,
  YatchSlider,
  Experience,
  NewsAndBlogs,
  EnquiryForm,
  DestinationGallery
} from './components';
import HeroSection from './components/HeroSection1';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    }
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.root}>
        <HeroSection />
      </Box>
      <Introduction />
      <SpecialOffers />
      <CharterYatch />
      <YatchSlider />
      <Destinations />
      <DestinationGallery />
      <Experience />
      <NewsAndBlogs />
      <EnquiryForm />
    </div>
  );
}
