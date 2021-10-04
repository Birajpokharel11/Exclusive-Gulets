import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import BannerSection from '@components/BannerSection';
import CardList from '@components/CardList';
import container from './Blogs.container';
import BackgroundVectors from '@components/BackgroundVectors';
import { CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    },
    heading: {
      color: '#00204e',
      fontSize: '20px',
      fontWeight: 300,
      lineHeight: '28px'
    }
  })
);
interface Props {
  posts?: { postList: any[]; next_page: boolean };
  loading?: any;
  route?: string;
  next_page?: number;
  fetchPostsStart?: (page) => any;
}
function Destinations({
  posts: { postsList, next_page },
  loading,
  fetchPostsStart
}: Props) {
  const classes = useStyles();
  const [page, setpage] = React.useState(0);
  const [amount_per_page, setAmount_per_page] = React.useState(5);
  const router = useRouter();
  const showMore = () => {
    setpage((prev) => prev + 1);
    console.log('helloworld', page, next_page);

    fetchPostsStart({ page, next_page });
  };
  const route = 'blogs';
  const redirectDetailsPage = (data) => {
    if (route === 'blogs') {
      router.push(`/blogs/${data.slug}`, undefined, { shallow: true });
    }
  };
  return (
    <Box>
      <BannerSection
        title="NEWS & BLOGS"
        description="Keep up to date with our latest yachting news, charter destinations, special offers and more…"
      />
      <BackgroundVectors />
      <Container>
        <Box mb={4} mt={6}>
          <Typography align="center" className={classes.heading}>
            There is more to yachting than just spending a week or so sailing.
            We share our experiences on the best itineraries to suit you,
            organise on board celebrations, exciting excursions, restaurant
            bookings, spa treatments, fitness instruction and more. Read our
            news and blogs below for some insight and get in touch for your own
            tailor-made escape on water.
          </Typography>
          {loading ? (
            <CircularProgress />
          ) : (
            <CardList
              list={postsList}
              showMore={showMore}
              redirectDetailsPage={redirectDetailsPage}
              route={route}
            />
          )}
        </Box>
      </Container>
      {/* <FooterSlider /> */}
    </Box>
  );
}

export default container(Destinations);
