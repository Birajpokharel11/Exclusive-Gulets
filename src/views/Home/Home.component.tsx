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
  EnquiryForm
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

export default function Home(props) {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.root}>
        <HeroSection {...props} />
      </Box>
      <Introduction />
      <SpecialOffers />
      <CharterYatch />
      <YatchSlider />
      <Destinations />
      <Experience />
      <NewsAndBlogs />
      <EnquiryForm />
    </div>
  );
}
