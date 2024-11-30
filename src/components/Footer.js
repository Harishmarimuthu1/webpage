import React from "react";
import "./Footer.css";
import location from "../assets/gmap.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-section">
            <h4>ABOUT</h4>
            <ul>
              <li>Why Addepar</li>
              <li>Company</li>
              <li>
                Careers 
              </li>
              <li>Newsroom</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Office Locations</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>EXPERTISE</h4>
            <ul>
              <li>Academy</li>
              <li>Services</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>COMMUNITY</h4>
            <ul>
              <li>Clients</li>
              <li>Partners</li>
              <li>Forum</li>
              <li>Product Ideas</li>
              <li>Developers</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>LEGAL AND PRIVACY</h4>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>2024 SOC 3 Report</li>
              <li>Integration Center Disclaimer</li>
              <li>Anti-Modern Slavery Statement</li>
              <li>Cookies Policy</li>
              <li>Cookies Settings</li>
            </ul>
          </div>
        </div>
        <div className="footer-left">
          <h2>Contact Us</h2>
          <p>
           Kurumampalayam, Saravanampatti,Coimbatore
          </p>
          <p><a>9161416151</a></p>
          <p><a>bixboogs@123@gmail.com</a></p>
          <button className="footer-connect-button">Connect with us</button>
        </div>
        <div>
          <img src={location} className="gmap">
          </img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
