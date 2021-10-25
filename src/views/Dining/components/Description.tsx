import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { createMarkup } from '@utils/misc';
import Image from 'next/image';
interface Props {
  content?: any;
  SideImage?: URL;
}
export default function Description({ content, SideImage }: Props) {
  return (
    <Box display="flex" style={{ gap: '1rem' }}>
      {' '}
      <Box style={{ flex: '0.5' }}>
        <Typography
          component="div"
          color="inherit"
          variant="subtitle1"
          style={{ marginBottom: '32px' }}
          dangerouslySetInnerHTML={createMarkup(content)}
        />
      </Box>
      <Box style={{ flex: '0.5' }}>
        <img
          src={SideImage}
          alt="sideImage"
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
      </Box>
    </Box>
  );
}
