import React, { useState } from 'react'
import { useResize } from 'hooks/useResize'
import EnquireForm from './index'
import Button from '../../../components/Button/index'
import './index.scss'
import closeIcon from '../../../assets/images/svg/close.svg'
import { useSwipeable } from 'react-swipeable'
// import FormAfterSend from './FormAfterSend'

function EnquireFormMobileWrapper({ smallContainerWidth }) {

   const [windowWidth] = useResize()
   const [formActive, setFormActive] = useState(false)
   // const [showAfterFormSend, setShowAfterFormSend] = useState(false)
   // const [success, setSuccess] = useState(false)

   function openForm() {
      setFormActive(true)
   }
   function closeForm() {
      setFormActive(false)
   }

   const handlers = useSwipeable({
      onSwipedUp: () => openForm()
   });

   // const afterSend = (success) => {
   //    setShowAfterFormSend(true)
   //    setSuccess(success)
   // }
   // const backToForm = () => {
   //    setShowAfterFormSend(false)
   // }

   return (
      <div style={windowWidth > 991 ? { display: 'none' } : null}>

         {/* Form  active */}
         {
            formActive && <div style={{ zIndex: 0 }} className="background"></div>
         }
         <div className={formActive ? "mobileFixedContainerForForm" : "mobileFixedContainerForForm_hide"}>
            {/* {
               showAfterFormSend ?
                  <FormAfterSend success={success} backToForm={backToForm} /> :
                  <> */}
            <img onClick={closeForm} src={closeIcon} className="closeForm" />
            <h3>Create your own experience!</h3>
            <EnquireForm /*afterSend={afterSend}*/ />
            {/* </>
            } */}
         </div>

         {/* Form not active */}
         <div style={formActive ? { display: 'none' } : null}>

            <div {...handlers} className="mobileFixedContainer">
               <h3 className="p-0 m-0">Create your own experience!</h3>
               <Button
                  onClick={openForm}
                  type="submit"
                  title="Enquire"
                  className="btn-theme-common btn-theme-filled--blue sm-wid"
                  color="#fff"
                  withButtonCustomStyle={false}
               />
               {/* <EnquireForm smallContainerWidth={smallContainerWidth} /> */}
            </div>
         </div>


      </div >
   )
}

export default EnquireFormMobileWrapper