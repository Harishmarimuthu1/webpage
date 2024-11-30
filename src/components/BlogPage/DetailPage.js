import React from "react";
import "./DetailPage.css";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BlogImage1 from "./assets/blog1.webp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Import the icon

const DetailPage = () => {
  const navigateback = useNavigate();

  const handleInsuranceClick = () => {
    navigateback("/"); // Navigate back to the BlogPage
  };
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar sticky">
        <div className="navbar-logo">
          <img
            src="https://phonepe.com/assets/images/brand/PhonePe_Logo.svg"
            alt="PhonePe Logo"
          />
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#solutions">OUR SOLUTIONS</a>
          </li>
          <li>
            <a href="#press">PRESS</a>
          </li>
          <li>
            <a href="#careers">CAREERS</a>
          </li>
          <li>
            <a href="#about">ABOUT US</a>
          </li>
          <li>
            <a href="#blog">BLOG</a>
          </li>
          <li>
            <a href="#contact">CONTACT US</a>
          </li>
          <li>
            <a href="#trust">TRUST & SAFETY</a>
          </li>
        </ul>
      </nav>

      {/* Category Section */}
      <section className="MenuBar">
        <a onClick={handleInsuranceClick}>
          <span>&lt;</span>Back
        </a>

        <a className="TrustSafety">
          Trust & Safety{" "}
          <ArrowDropDownIcon style={{ verticalAlign: "middle" }} />{" "}
          {/* Dropdown icon */}
        </a>
      </section>

      {/* Blog Featured Section */}
      <section className="Blog-Detail" >
        <div className="Blog-Details">
          <img src={BlogImage1} alt="fraud trends" />
          <div className="featured-content">
            <h3>Trust & Safety</h3>
            <h2>Safeguard your identity and prevent Aadhaar Card Fraud</h2>
            <p>Muktha Tavane | 3 min read | 07 August, 2024</p>
          </div>
        </div>
      </section>
      <section>
        <div className="Post-Content">
          <p>
            Aadhaar, the world’s largest biometric system, allows Indians to
            voluntarily obtain a unique 12-digit identity on the basis of
            biometrics and demographic information.
          </p>
          <p>
            Aadhaar offers easy authentication to open a bank account, get a
            passport, avail subsidies, apply for government schemes, etc.
            Aadhaar is also linked to mobile numbers and is an accepted form of
            identification by financial institutions for retail investors.
          </p>
          <p>
            One of the most effective features of Aadhaar is OTP verification
            that allows individuals to easily authenticate themselves from any
            location.
          </p>
          <p>
            In today’s day and age when cybercrime is rampant, processes that
            are meant to offer ease, inadvertently expose the data of
            individuals who do not have the right information to protect their
            identity.
          </p>
          <p>
            In this blog, we will demonstrate in detail how scamsters exploit
            the linkage between Aadhaar numbers and bank accounts to siphon off
            money or perform unauthorized transactions.
          </p>
          <p className="meta">PhonePe Editor | 3 min read | 12 June, 2024</p>
          <h3>Common UPI fraud tactics involving Aadhaar</h3>
          <ol>
            <li>
              Phishing attacks
              <p>
                {" "}
                Phishing is a fraudulent method where scammers pretend to be
                officials from a bank or payments app to convince innocents to
                reveal personal information. In case of Aadhaar-linked scams,
                fraudsters send messages or emails asking users to update their
                Aadhaar details or UPI PIN. In such cases, the communication
                carries a fake link that are built to capture sensitive
                information.
              </p>
            </li>
            <li>
              Vishing calls:{" "}
              <p>
                Vishing is another fraudulent practice, similar to phishing,
                wherein fraudsters call individuals claiming to be from a bank
                or UIDAI, asking for Aadhaar numbers, UPI PINs, or OTPs under
                the pretext of account verification or problem resolution.
              </p>
            </li>
          </ol>
          <h3>Common UPI fraud tactics involving Aadhaar</h3>
          <ol>
            <li>
              Phishing attacks
              <p>
                {" "}
                Phishing is a fraudulent method where scammers pretend to be
                officials from a bank or payments app to convince innocents to
                reveal personal information. In case of Aadhaar-linked scams,
                fraudsters send messages or emails asking users to update their
                Aadhaar details or UPI PIN. In such cases, the communication
                carries a fake link that are built to capture sensitive
                information.
              </p>
            </li>
            <li>
              Vishing calls:{" "}
              <p>
                Vishing is another fraudulent practice, similar to phishing,
                wherein fraudsters call individuals claiming to be from a bank
                or UIDAI, asking for Aadhaar numbers, UPI PINs, or OTPs under
                the pretext of account verification or problem resolution.
              </p>
            </li>
          </ol>
          <h3>How to report Aadhaar-Linked UPI scams</h3>
          <ol>
            <li>
              Phishing attacks
              <p>
                {" "}
                Phishing is a fraudulent method where scammers pretend to be
                officials from a bank or payments app to convince innocents to
                reveal personal information. In case of Aadhaar-linked scams,
                fraudsters send messages or emails asking users to update their
                Aadhaar details or UPI PIN. In such cases, the communication
                carries a fake link that are built to capture sensitive
                information.
              </p>
            </li>
            <li>
              Vishing calls:{" "}
              <p>
                Vishing is another fraudulent practice, similar to phishing,
                wherein fraudsters call individuals claiming to be from a bank
                or UIDAI, asking for Aadhaar numbers, UPI PINs, or OTPs under
                the pretext of account verification or problem resolution.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Business Solutions</h3>
            <ul>
              <li>Payment Gateway</li>
              <li>Guardian by PhonePe</li>
              <li>Express Checkout</li>
              <li>PhonePe Switch</li>
              <li>Offline Merchant</li>
              <li>Advertise on PhonePe</li>
              <li>SmartSpeaker</li>
              <li>PhonePe Lending</li>
              <li>POS Machine</li>
              <li>Payment Links</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <button className="download-btn">DOWNLOAD NOW</button>
          <div className="social-icons">
            <a href="#linkedin">LinkedIn</a>
            <a href="#twitter">Twitter</a>
            <a href="#facebook">Facebook</a>
            <a href="#youtube">YouTube</a>
          </div>
          <p>© 2024, All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default DetailPage;
