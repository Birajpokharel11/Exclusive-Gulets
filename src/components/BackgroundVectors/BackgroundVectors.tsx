import React from 'react';
import Image from 'next/image';
import vector4 from '../../assets/images/icons/vector4.png';
import vector2 from '../../assets/images/Blog/blog-vector2.svg';
import vector3 from '../../assets/images/Blog_single/vector3.svg';
import vectorblog1 from '../../assets/images/Blog_single/wheel-vector.svg';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { classNames } from 'react-select/dist/declarations/src/utils';
import { Box } from '@material-ui/core';
const useStyles = makeStyles((theme) =>
  createStyles({
    Container1: {
      maxWidth: '90%'
    },
    Container3: {
      width: '350px',
      transform: 'rotate(90deg)'
    },
    Container4: {
      width: '100%',
      transform: 'rotate(-180deg)'
    },
    Container5: {
      maxWidth: '100%',
      marginLeft: '75%'
    },
    Container6: {
      maxWidth: '50%',
      position: 'absolute',
      top: 630,
      transform: 'rotate(90deg)'
    },

    vetor: {}
  })
);

export const BackgroundVectors = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.Container6}>
        <Image width={250} src={vectorblog1} alt="vector blog1" />
      </div>
      <div style={{ marginTop: '180px' }} />
      <div className={classes.Container5}>
        <Image width={280} src={vector4} alt="vector blog1" />
      </div>
      <div style={{ marginTop: '180px' }} />
      <Box display="flex">
        <div className={classes.Container3}>
          <Image width={250} height={350} src={vector2} alt="vector blog1" />
        </div>
        <div className={classes.Container4}>
          <Image width={250} src={vectorblog1} alt="vector blog1" />
        </div>
      </Box>
    </>
  );
};

export default BackgroundVectors;
