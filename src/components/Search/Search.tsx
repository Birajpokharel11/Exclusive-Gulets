import React, { useEffect, useState } from 'react'
import './index.scss'
import inputSearch from '../../../assets/images/svg/inputSearch.svg'
import inputClose from '../../../assets/images/svg/closeWhite.svg'

function Search({ handleChange, input_text }) {

   const clearInput = () => {
      handleChange("")
   }

   return (
      <form className="form">
         <img className="search_icon" src={inputSearch} alt="Search" />
         {
            input_text &&
            <img onClick={clearInput} className="close_icon" src={inputClose} alt="Close" name="input_text" />
         }
         <input className="input" value={input_text} onChange={(event) => handleChange(event.target.value)} placeholder="Type at least 3 letters"></input>
      </form>
   )
}

export default Search