import React from 'react'
import '../assets/styles/Footer.css'
import fb from '../assets/icons/facebook.png'
import insta from '../assets/icons/instagram.png'
import twi from '../assets/icons/twitter.png'
import you from '../assets/icons/youtube.png'

import play from '../assets/images/playstore.jpg'
import app from '../assets/images/appstore.jpg'

function Footer() {
  return (
    <>
        <div className='mainFooter'>
            <div className="pop-loc">
                <ul>
                    <li className='head'>POPULAR LOCATIONS</li>
                    <li>Kolkata</li>
                    <li>Mumbai</li>
                    <li>Chennai</li>
                    <li>Pune</li>
                </ul>
            </div>
            <div className="trend-loc">
                <ul>
                    <li className='head'>TRENDING LOCATIONS</li>
                    <li>Bhubaneshwar</li>
                    <li>Hyderabad</li>
                    <li>Chandigarh</li>
                    <li>Nashik</li>
                </ul>
            </div>
            <div className="about">
                <ul>
                    <li className='head'>ABOUT US</li>
                    <li>About OLX Group</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                    <li>OLXPeople</li>
                    <li>Waah Jobs</li>
                </ul>
            </div>
            <div className="olx">
                <ul>
                    <li className='head'>OLX</li>
                    <li>Help</li>
                    <li>Sitemap</li>
                    <li>Legal & Privacy information</li>
                    <li>Blog</li>
                    <li>OLX Autos Sell Car</li>
                    <li>Vulnerability Disclosure Program</li>
                </ul>
            </div>
            <div className="follow">
                <h3 className='head'>FOLLOW US</h3>
                <ul>
                    <li className='imgs'>
                        <img src={fb} alt="" />
                        <img src={insta} alt="" />
                        <img src={twi} alt="" />
                        <img src={you} alt="" />
                    </li>
                    <li className='follows'>
                        <img src={play} alt="" />
                        <img src={app} alt="" />
                    </li>
                </ul>
            </div>
        </div>
        <div className="underDiv">
            <label htmlFor="">Help - Sitemap</label>
            <label htmlFor="">All rights reserved © 2006-2023 OLX</label>
        </div>
    </>
  )
}

export default Footer