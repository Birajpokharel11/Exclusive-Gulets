import { Box, Button, Typography, IconButton, Hidden } from '@material-ui/core';

import { smoothScroll } from '@utils/misc';

export const ScrollDown = ({ id }) => {
  const scrollToId = () => {
    smoothScroll.scrollToElementById(id);
  };

  return (
    <Hidden mdDown>
      <Box>
        <Button disableRipple>
          <Button disableRipple>
            <Box
              style={{
                alignItems: 'center',
                width: '100px',
                cursor: 'pointer'
              }}
            >
              <Box
                mt={30}
                style={{
                  transform: 'rotate(-90deg)',
                  marginBottom: '30%'
                }}
              >
                <Typography color="secondary">Scroll Down</Typography>
              </Box>
              <IconButton
                style={{
                  display: 'flex',
                  color: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(360deg)',
                  marginLeft: '30px',
                  height: '100px'
                }}
              >
                <img
                  src="/assets/images/icons/banner-arrow.png"
                  alt="button arrow"
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
