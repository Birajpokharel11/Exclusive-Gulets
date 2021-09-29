import { Box, Button, Typography, IconButton, Hidden } from '@material-ui/core';
import Image from 'next/image';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { smoothScroll } from '@utils/misc';
const useStyles = makeStyles((theme) =>
  createStyles({
    iconButton: {
      display: 'flex',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotate(360deg)',
      marginLeft: '30px',
      height: '100px'
    },
    rotate: { transform: 'rotate(-90deg)', marginBottom: '30%' },
    cursor: { alignItems: 'center', width: '100px', cursor: 'pointer' }
  })
);

export const ScrollDown = ({ id }) => {
  const classes = useStyles();
  const scrollToId = () => {
    smoothScroll.scrollToElementById(id);
  };

  return (
    <Hidden mdDown>
      <Box>
        <Button disableRipple>
          <Button disableRipple>
            <Box className={classes.cursor}>
              <Box mt={30} className={classes.rotate}>
                <Typography color="secondary">Scroll Down</Typography>
              </Box>
              <IconButton className={classes.iconButton}>
                <Image
                  src="/assets/images/icons/banner-arrow.png"
                  alt="button arrow"
                  width={15}
                  height={60}
                />
              </IconButton>
            </Box>
          </Button>
        </Button>
      </Box>
    </Hidden>
  );
};

export default ScrollDown;
