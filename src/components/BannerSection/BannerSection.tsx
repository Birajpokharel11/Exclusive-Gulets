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
}

export default function BannerSection({
  title,
  description,
  backgroundImage,
  withSocial,
  withScroll,
  route
}: Props) {
  const classes = useStyles({
    bgImg: backgroundImage
  });

  return (
    <Box component="section" maxWidth="false" className={classes.root}>
      <Box className={classes.overlay}>
        <Container>
          <Typography
            variant="h2"
            color="inherit"
            style={{ marginBottom: '15px' }}
          >
            {title}
          </Typography>

          {route === 'soleExperience' ? (
            <Typography
              component="div"
              color="inherit"
              variant="subtitle1"
              style={{ marginBottom: '32px' }}
              dangerouslySetInnerHTML={createMarkup(description)}
            />
          ) : (
            <Typography
              component="div"
              color="inherit"
              variant="subtitle1"
              style={{ marginBottom: '32px' }}
            >
              {description}
            </Typography>
          )}
        </Container>
      </Box>

      {withSocial && <Socials />}

      {withScroll && <ScrollDown id={withScroll} />}
    </Box>
  );
}
