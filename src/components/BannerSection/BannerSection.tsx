import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Box, Button, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    // root: {
    //   height: 'calc(100vh - 64px)',
    //   padding: 0
    // },
    root: {
      backgroundImage: ({ props }) =>
        props.backgroundImage
          ? `url("${props.backgroundImage}")`
          : `url('./charterYatch.png')`,
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

export default function BannerSection(props) {
  const { title, description, backgroundImage } = props;
  const classes = useStyles({ props });

  return (
    <div>
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

            <Typography
              component="div"
              color="inherit"
              variant="subtitle1"
              style={{ marginBottom: '32px' }}
            >
              {description}
            </Typography>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
