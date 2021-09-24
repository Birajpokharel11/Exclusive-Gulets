import React, { useEffect } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

import BannerSection from '@components/BannerSection';
import CardList from '@components/CardList';

import container from './BespokeExperiences.container';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    }
  })
);

const BespokeExperiences = (props) => {
  const classes = useStyles();

  const {
    experience: { loading, experiences }
  } = props;

  return (
    <div>
      <BannerSection
        {...props}
        title="EXCLUSIVE GULETS"
        description="Experience Exceptional Yachting"
      />
      {loading ? <CircularProgress /> : <CardList cardList={experiences} />}
    </div>
  );
};

export default container(BespokeExperiences);
