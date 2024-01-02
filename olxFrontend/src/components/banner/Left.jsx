import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/Header.css'

import logo from '../../assets/images/logo.png'
import search from '../../assets/icons/search.png'
import arrowDown from '../../assets/icons/arrow-down.png'
import searchBlack from '../../assets/icons/search-black.png'

function Left() {
  return (
    <div className='leftComponent'>
        <Link to='/'>
          <img id='logo' src={logo} alt="" />
        </Link>
        <label className='f-input' htmlFor="">
            <img id='search' src={search} alt="" />
            <input type="text" placeholder='Search City, area' />
            <img id='arrow' src={arrowDown} alt="" />
        </label>
        <div className="s-input">
            <input type="text" placeholder='Find Cars, Mobile Phones and more...' />
            <img src={searchBlack} alt="" />
      </div>
      <div className="mdl-input">
            {/* <input type="text" placeholder='Find Cars, Mobile Phones and more...' />
            <img src={searchBlack} alt="" /> */}
        {/* <img id='arrow' src={arrowDown} alt="" /> */}
      </div>
    </div>
  )
}

export default Left