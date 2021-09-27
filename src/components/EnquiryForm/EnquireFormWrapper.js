// import { useResize } from 'hooks/useResize';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { useState } from 'react';
// import FormAfterSend from './FormAfterSend'
import EnquireForm from './index';
import './index.scss';

function EnquireFormWrapper({ smallContainerWidth, maxToScroll }) {
  const [windowWidth] = useResize();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  // const [showAfterFormSend, setShowAfterFormSend] = useState(false)
  // const [success, setSuccess] = useState(false)

  // const afterSend = (success) => {
  //    setShowAfterFormSend(true)
  //    setSuccess(success)
  // }
  // const backToForm = () => {
  //    setShowAfterFormSend(false)
  // }

  return (
    <div
      style={matches ? { display: 'none' } : null}
      className="col-lg-4 d-lg-block sticky_block"
    >
      <div className="form_container">
        {/* { */}
        {/* showAfterFormSend ? */}
        {/* <FormAfterSend success={success} backToForm={backToForm} fromEnquireFormWrapper={true} /> : */}
        {/* <> */}
        <h3>Create your own experience!</h3>
        <EnquireForm
          smallContainerWidth={smallContainerWidth} /*afterSend={afterSend}*/
        />
        {/* </> */}
        {/* } */}
      </div>
    </div>
  );
}

export default EnquireFormWrapper;
