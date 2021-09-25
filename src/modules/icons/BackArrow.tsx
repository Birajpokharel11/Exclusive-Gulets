import React from 'react';

// Material components
import { SvgIcon } from '@material-ui/core';

export default function BackArrow(props) {
  return (
    <SvgIcon
      viewBox="0 0 36 36"
      style={{ width: 36, height: 36, fill: 'none' }}
      {...props}
    >
      <circle
        cx="18"
        cy="18"
        r="17.5"
        transform="rotate(-180 18 18)"
        stroke="#BCCBE3"
      />
      <path
        d="M11.4697 17.4697C11.1768 17.7626 11.1768 18.2374 11.4697 18.5303L16.2426 23.3033C16.5355 23.5962 17.0104 23.5962 17.3033 23.3033C17.5962 23.0104 17.5962 22.5355 17.3033 22.2426L13.0607 18L17.3033 13.7574C17.5962 13.4645 17.5962 12.9896 17.3033 12.6967C17.0104 12.4038 16.5355 12.4038 16.2426 12.6967L11.4697 17.4697ZM24 17.25L12 17.25L12 18.75L24 18.75L24 17.25Z"
        fill="#808FA7"
      />
    </SvgIcon>
  );
}
