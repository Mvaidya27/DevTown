import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/shopping.png'
import insta_icon from '../Assets/instagram.png'
import pintester_icon from '../Assets/pinterest.png'
import whatsapp_icon from '../Assets/whatsapp.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" width='70px'/>
            <p>Shop Now</p>
        </div>
        <ul className="footer-link">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={insta_icon} alt="" width='40px' />
            </div>
            <div className="footer-icon-container">
                <img src={pintester_icon} alt="" width='40px' />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="" width='40px' />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer