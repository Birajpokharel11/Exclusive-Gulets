import { Box, Typography, Container, Paper } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { createMarkup } from '@utils/misc';
import wheel from '../../../assets/images/wheel.svg';
import Image from 'next/image';
const useStyles = makeStyles((theme) =>
  createStyles({
    BackgroundImage: {
      height: '100vh',
      width: '100%',
      display: 'block',
      objectFit: 'cover'
    },
    Paper: {
      backgroung: 'white',
      width: '470px',
      padding: '50px',
      position: 'relative',
      [theme.breakpoints.down('xs')]: { padding: '0px', width: '100%' }
    },
    Box: {
      position: 'relative'
    },
    Box2: {
      position: 'absolute',
      top: 200,
      right: 200,
      [theme.breakpoints.down('md')]: {
        top: 200,
        right: 100
      },
      [theme.breakpoints.down('sm')]: {
        top: 200,
        right: 100
      },
      [theme.breakpoints.down('xs')]: {
        position: 'unset'
      }
    },
    Heading: {
      color: '#00204e',
      fontWeight: 700,
      fontSize: '30px',
      marginBottom: '30px',
      textTransform: 'none',
      [theme.breakpoints.down('xs')]: {
        fontSize: '24px',
        maxWidth: '100%'
      }
    },
    description: {
      color: '#00204e',
      lineHeight: '150%',
      fontSize: '18px',
      marginBottom: '52px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '14px',
        maxWidth: '100%'
      }
    },
    Wheel1: {
      paddingLeft: '100px'
    },
    ImageBox: {
      position: 'absolute',
      bottom: 40,
      right: -60,
      [theme.breakpoints.down('xs')]: { display: 'none' }
    }
  })
);

interface Props {
  title?: string;
  heading?: string;
  description?: string;
  BottomLine?: string;
  backgroundImage?: string;
  withSocial?: boolean;
  withScroll?: string;
  route?: string;
}

export default function description({
  backgroundImage,
  heading,
  description,
  BottomLine
}: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <>
      <Box className={classes.Box}>
        <img
          className={classes.BackgroundImage}
          src={backgroundImage}
          alt="backgroundimage2"
        />
        <Box className={classes.Box2}>
          <Paper elevation={0} className={classes.Paper}>
            <Typography align="center" className={classes.Heading} variant="h1">
              {heading}
            </Typography>
            <Typography
              component="div"
              align="center"
              color="inherit"
              variant="subtitle1"
              className={classes.description}
              dangerouslySetInnerHTML={createMarkup(description)}
            />
            <Typography
              component="div"
              align="center"
              color="inherit"
              variant="subtitle1"
              className={classes.description}
              dangerouslySetInnerHTML={createMarkup(BottomLine)}
            />
            <Box className={classes.ImageBox}>
              <Image
                className={classes.Wheel1}
                src={wheel}
                alt="whell"
                width={300}
                height={200}
              />
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
