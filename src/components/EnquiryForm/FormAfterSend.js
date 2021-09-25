// import React from 'react'
// import PropTypes from 'prop-types'

// import success_svg from '../../../assets/images/svg/success.svg'
// import mistake_svg from '../../../assets/images/svg/mistake.svg'

// import './index.scss'
// import Button from 'components/Button'

// function FormAfterSend({ success = false, backToForm = f => f, fromEnquireFormWrapper = false }) {

//    const successContent = (
//       <>
//          <img src={success_svg} />
//          <h3> You have enquired successfully.</h3>
//          <p>It’s a text that tells what will happen after enquiring, how you will contact with your customer,
//          and when will you contact. Maybe there can be an information about customer can make another
//              enquire from here. This text will be 3 lines at most.</p>
//          <Button onClick={backToForm}
//             title="Enquire Another"
//          />
//       </>
//    )

//    const mistakeContent = (
//       <>
//          <img src={mistake_svg} />
//          <h3> There is a mistake.</h3>
//          <p>There will be a text telling that we are sorry about this technical issue.</p>
//          <Button onClick={backToForm}
//             title="Try Again"
//          />
//       </>
//    )

//    return (
//       <div style={fromEnquireFormWrapper ? { padding: 0 } : null} className="after_send_container">
//          {
//             success ?
//                <>
//                   {successContent}
//                </> :
//                <>
//                   {mistakeContent}
//                </>
//          }
//       </div>
//    )
// }

// FormAfterSend.propTypes = {
//    success: PropTypes.bool,
//    backToForm: PropTypes.func,
//    fromEnquireFormWrapper: PropTypes.bool
// };

// export default FormAfterSend