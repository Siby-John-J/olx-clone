import React from 'react'
import banner from '../assets/images/banner.jpg'
import '../assets/styles/Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <img src={banner} alt="" />
    </div>
  )
}

export default Banner