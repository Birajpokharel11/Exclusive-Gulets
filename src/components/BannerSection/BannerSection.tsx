import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Box, Button, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    // root: {
    //   height: 'calc(100vh - 64px)',
    //   padding: 0
    // },
    root: {
      backgroundImage: `url('./charterYatch.png')`,
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
  const classes = useStyles();

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
              DESTINATIONS
            </Typography>

            <Typography
              component="div"
              color="inherit"
              variant="subtitle1"
              style={{ marginBottom: '32px' }}
            >
              Perfect location and the perfect yacht for your ultimate charter
              experience. There is no better way than chartering a luxury gulet
              or yacht to see more of the world. With two third of the Earth
              covered in water, there is always a new exciting destination to
              explore and a different shoreline to discover.
            </Typography>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
