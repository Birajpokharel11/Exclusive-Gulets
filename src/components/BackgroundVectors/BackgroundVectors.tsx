import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import vector4 from '../../assets/images/icons/vector4.png';
import vector2 from '../../assets/images/Blog/blog-vector2.svg';
import vector3 from '../../assets/images/Blog_single/vector3.svg';
import vectorblog1 from '../../assets/images/Blog_single/wheel-vector.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    bgVector: {
      position: 'absolute',
      zIndex: -1
    },
    bgVector4: {
      right: '100px',
      bottom: '50%'
    },
    bgWheel: {
      right: 0,
      bottom: '10%'
    },
    bgWheel2: {
      right: '300px',
      top: '-16%'
    },
    rotate90: {
      transform: 'rotate(90deg)'
    },
    rotate180: {
      transform: 'rotate(180deg)'
    },
    vector1: {
      bottom: '150px'
    },
    vector2: {
      top: '-16%',
      left: '100px'
    },
    vector3: {
      top: '11%',
      left: '200px'
    }
  })
);

export const BackgroundVectors = () => {
  const classes = useStyles();
  return (
    <>
      <div
        className={clsx(classes.bgVector, classes.vector2, classes.rotate90)}
        id="destination_vctr2"
      >
        <img
          src="/assets/images/Blog/blog-vector2.svg"
          className="img-responsive"
          alt="Background vector art"
        />
      </div>
      <div
        className={clsx(classes.bgVector, classes.vector3, classes.rotate90)}
        id="destination_vctr3"
      >
        <img
          src="/assets/images/Blog_single/vector3.svg"
          className="img-responsive"
          alt="Background vector art"
        />
      </div>
      <div
        className={clsx(classes.bgVector, classes.vector1, classes.rotate90)}
        id="destination_vctr1"
      >
        <img
          src="/assets/images/Blog/blog-vector2.svg"
          className="img-responsive"
          alt="Background vector art"
        />
      </div>
      <div
        className={clsx(classes.bgVector, classes.bgWheel, classes.rotate180)}
      >
        <img
          src="/assets/images/Blog_single/wheel-vector.svg"
          className="img-responsive"
          alt="vector blog1"
        />
      </div>

      <div className={clsx(classes.bgVector, classes.bgVector4)}>
        <img
          src="/assets/images/icons/vector4.png"
          className="img-responsive"
          alt="vector blog1"
        />
      </div>
      <div
        className={clsx(classes.bgVector, classes.bgWheel2, classes.rotate90)}
      >
        <img
          src="/assets/images/Blog_single/wheel-vector.svg"
          className="img-responsive"
          alt="vector blog1"
        />
      </div>
    </>
  );
};

export default BackgroundVectors;
