import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Box, Typography, Container } from '@material-ui/core';

import Socials from '@components/Socials';
import ScrollDown from '@components/ScrollDown';
import { createMarkup } from '@utils/misc';

type BgProps = {
  bgImg: string;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundImage: ({ bgImg }: BgProps) =>
        bgImg ? `url("${bgImg}")` : `url('/assets/images/charterYatch.png')`,
      backgroundPosition: 'center',
      height: '60vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      padding: 0,
      position: 'relative'
    },
    overlay: {
      position: 'absolute',
      background:
        'linear-gradient(0deg, #091527fa 0.01%, rgba(9, 21, 39, 0.87) 43.52%, rgba(9, 21, 39, 0.24) 93.23%, rgba(9, 21, 39, 0) 99.99%)',
      alignSelf: 'start',
      padding: '30px 0',
      display: 'flex',
      textAlign: 'center',
      color: '#f5f0e4',
      fontWeight: 300,
      zIndex: 1,
      bottom: 0,
      width: '100%'
    },
    overlay1: {
      position: 'absolute',
      padding: '30px 0',
      color: '#f5f0e4',
      fontWeight: 300,
      zIndex: 1,
      display: 'flex',
      justifyContent: 'left',
      top: 250,
      [theme.breakpoints.down('lg')]: {
        top: 120
      },
      [theme.breakpoints.down('md')]: {
        top: 50
      },
      width: '80%'
    },
    Why: {
      color: 'orange',
      textTransform: 'uppercase'
    },
    Heading: {
      marginBottom: '3px',
      fontSize: ' 72px',
      lineHeight: '150%',
      fontWeight: 700,
      textTransform: 'none',
      [theme.breakpoints.down('md')]: {
        top: 50,
        lineHeight: '100%',
        fontSize: ' 62px'
      },
      [theme.breakpoints.down('sm')]: {
        top: 50,
        lineHeight: '100%',
        fontSize: ' 52px',
        marginBottom: '52px'
      },
      [theme.breakpoints.down('xs')]: {
        top: 50,
        lineHeight: '90%',
        fontSize: ' 42px',
        marginBottom: '42px'
      }
    },
    subtitle: {
      marginBottom: '32px',
      fontSize: ' 32px',
      lineHeight: '68px',
      fontWeight: 700,
      [theme.breakpoints.down('sm')]: {
        top: 50,
        lineHeight: '100%',

        fontSize: ' 22px'
      },
      [theme.breakpoints.down('xs')]: {
        top: 50,
        lineHeight: '90%',
        fontSize: ' 18px',
        marginBottom: '52px'
      }
    }
  })
);

interface Props {
  title?: string;
  description?: string;
  backgroundImage?: string;
  withSocial?: boolean;
  withScroll?: string;
  route?: string;
  about?: string;
  why?: any | string;
}

export default function BannerSection({
  title,
  description,
  backgroundImage,
  withSocial,
  withScroll,
  route,
  why,
  about
}: Props) {
  const classes = useStyles({
    bgImg: backgroundImage
  });

  return (
    <Box component="section" maxWidth="false" className={classes.root}>
      {!about ? (
        <Box className={classes.overlay}>
          <Container>
            <Typography
              variant="h1"
              color="inherit"
              style={{
                marginBottom: '15px',
                fontSize: '26px',
                fontWeight: 400
              }}
            >
              {title}
            </Typography>

            <Typography
              component="div"
              color="inherit"
              variant="subtitle1"
              style={{ marginBottom: '32px' }}
              dangerouslySetInnerHTML={createMarkup(description)}
            />
          </Container>
        </Box>
      ) : (
        <Box className={classes.overlay1}>
          <Container maxWidth="md">
            <Typography className={classes.Why}>{why}?</Typography>
            <Typography
              variant="h1"
              color="inherit"
              className={classes.Heading}
            >
              {title}
            </Typography>

            <Typography
              component="div"
              color="inherit"
              variant="subtitle1"
              className={classes.subtitle}
              dangerouslySetInnerHTML={createMarkup(description)}
            />
          </Container>
        </Box>
      )}

      {withSocial && <Socials />}

      {withScroll && <ScrollDown id={withScroll} />}
    </Box>
  );
}
