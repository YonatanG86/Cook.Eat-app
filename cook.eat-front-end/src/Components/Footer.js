import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css';

const Footer = () => {
    
    return (
        <>
        <div className="footer-container">
          <div className="about-section">
            <h6><b>ABOUT</b></h6>
            <p>Some description about our website.</p>
          </div>
          <div className="links-section">
            <h6><b>QUICK LINKS</b></h6>
              <ul className="footer-links">
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/my-feed">My Feed</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
                <li><Link to="/profile-settings">Profile Settings</Link></li>
              </ul>
          </div>
          <div className="icon-section">
            <ul className="social-icons">
              <li>
                <a className="github" href="https://somelink.com" target="_blank">
                  {/* <icons /> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        <div className="copyrights-section">
          <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} All Rights Reserved by <span>US &amp; OUR NAMES</span></p>
        </div>
    </>
    )
}

export default Footer;