import React from 'react';
import Image from 'next/image';
import vector4 from '../../assets/images/icons/vector4.png';
import vector2 from '../../assets/images/Blog/blog-vector2.svg';
import vector3 from '../../assets/images/Blog_single/vector3.svg';
import vectorblog1 from '../../assets/images/Blog_single/wheel-vector.svg';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { classNames } from 'react-select/dist/declarations/src/utils';
const useStyles = makeStyles((theme) =>
  createStyles({
    Container1: {
      maxWidth: '100%'
    },
    Container4: { transform: 'rotate(-180deg)' },
    Container6: {
      maxWidth: '100%',
      overflow: 'hidden',
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
        <Image
          src={vectorblog1}
          className={classes.vector}
          alt="vector blog1"
        />
      </div>
      <div className={classes.Container1} id="destination_vctr2">
        <Image
          src={vector2}
          className={classes.vector}
          alt="Background vector art"
        />
      </div>
      <div className={classes.Container2} id="destination_vctr3">
        <Image
          src={vector3}
          className={classes.vector}
          alt="Background vector art"
        />
      </div>
      <div className={classes.Container3} id="destination_vctr1">
        <Image
          src={vector2}
          className={classes.vector}
          alt="Background vector art"
        />
      </div>
      <div className={classes.Container4}>
        <Image
          src={vectorblog1}
          className={classes.vector}
          alt="vector blog1"
        />
      </div>

      <div className={classes.Container5}>
        <Image src={vector4} className={classes.vector} alt="vector blog1" />
      </div>
    </>
  );
};

export default BackgroundVectors;
