import React, { useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import BannerSection from '@components/BannerSection';
import CardList from '@components/CardList';
import container from './Blogs.container';
import { CardLoading } from '@components/SkeletonLoading';

import BackgroundVectors from '@components/BackgroundVectors';
import { CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/router';
import { IPostState } from '@store/interfaces';

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
    },
    sectionGem: {
      minHeight: '40vh',
      paddingTop: '40px',
      marginBottom: '20px',
      position: 'relative'
    }
  })
);
interface Props {
  posts?: IPostState;
  siteCoordinator?: any;
  loading?: any;
  route?: string;
  next_page?: number;
  fetchPostsStart?: (id) => any;
}
function Destinations({
  posts: { postsList, next_page, loading },
  siteCoordinator: {
    domain: { data }
  },
  fetchPostsStart
}: Props) {
  const classes = useStyles();
  const [page, setpage] = React.useState(0);
  const [amount_per_page, setAmount_per_page] = React.useState(5);
  const router = useRouter();

  useEffect(() => {
    fetchPostsStart(data.id);
  }, [data]);

  const showMore = () => {
    setpage((prev) => prev + 1);
    console.log('helloworld', page, next_page);

    fetchPostsStart({ page, next_page });
  };
  const route = 'blogs';
  const redirectDetailsPage = (data) => {
    router.push({
      pathname: `/blogs/${data.id}`
    });
  };

  const filteredPosts = postsList.filter((post) => post.status === 'Active');

  const getBlogs = () => {
    if (!filteredPosts.length && !loading) {
      return (
        <Typography variant="h2" align="center">
          Data Not Found!!
        </Typography>
      );
    } else if (filteredPosts.length && !loading) {
      return (
        <CardList
          list={filteredPosts}
          showMore={showMore}
          routeRedirect={redirectDetailsPage}
          route={route}
        />
      );
    } else {
      return <CardLoading length={3} />;
    }
  };
  return (
    <>
      <BannerSection
        title="NEWS & BLOGS"
        description="Keep up to date with our latest yachting news, charter destinations, special offers and more…"
      />

      <Box mb={4} mt={6} style={{ position: 'relative' }}>
        <Container>
          <Typography align="center" className={classes.heading}>
            There is more to yachting than just spending a week or so sailing.
            We share our experiences on the best itineraries to suit you,
            organise on board celebrations, exciting excursions, restaurant
            bookings, spa treatments, fitness instruction and more. Read our
            news and blogs below for some insight and get in touch for your own
            tailor-made escape on water.
          </Typography>
          {getBlogs()}
        </Container>
        <BackgroundVectors />
      </Box>
      {/* <FooterSlider /> */}
    </>
  );
}

export default container(Destinations);
