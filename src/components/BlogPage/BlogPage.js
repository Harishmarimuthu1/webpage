import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "./BlogPage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BannerImage from "./assets/banner-1.jpg";
import FeaturedImage from "./assets/mobile-image2.jpg";
import BlogImage1 from "./assets/blog1.webp";
import BlogImage2 from "./assets/blog2.webp";
import BlogImage3 from "./assets/blog3.webp";
import BlogImage4 from "./assets/blog4.webp";
import BlogImage5 from "./assets/blog5.webp";
import BlogImage6 from "./assets/blog6.webp";
import BlogImage7 from "./assets/blog7.webp";
import BlogImage8 from "./assets/blog8.webp";
import BlogImage9 from "./assets/blog9.webp";
import BlogImage10 from "./assets/blog10.webp"; // Ensure the correct path
import BlogImage11 from "./assets/blog11.webp"; // Ensure the correct path
import BlogImage12 from "./assets/blog12.webp"; // Ensure the correct path
const BlogPage = () => {
  const [showMore, setShowMore] = useState(false);
   const navigate = useNavigate();// Use useNavigate for navigation

  const handleSeeMoreClick = () => {
    setShowMore(!showMore);
  };

  // Function to handle navigation to DetailPage for Insurance
  const handleInsuranceClick = () => {
    navigate("/details"); // Navigate to /details page using useNavigate
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
            <a href="/details">OUR SOLUTIONS</a>
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

      {/* Header Section */}
      <header
        className="header"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <h1>Finteck Blog</h1>
        <p>Explore articles about technology, insurance, and much more.</p>
      </header>

      {/* Category Section */}
      <section className="category">
        <button>All</button>
        <button>Technology</button>
        <button>Insurance</button> {/* Trigger navigation */}
        <button>Investments</button>
        <button>Payment Gateway</button>
        <button>Trust & Safety</button>
        <button>Life @ PhonePe</button>
        <button>Public Policy</button>
      </section>

      {/* Blog Featured Section */}
      <section className="featured" >
        <h2>Featured</h2>
        <div className="featured-item">
          <img src={FeaturedImage} alt="fraud trends" />
          <div className="featured-content">
            <h4>Trust & Safety</h4>
            <h3>What every merchant should know about new fraud trends</h3>
            <p>
              Fake Payment apps are counterfeit of legitimate payment
              applications. They closely resemble the UI, color schemes, and
              overall appearance of popular payment apps, often replicating the
              entire payment process—making them hard to distinguish at a
              glance.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-posts"  onClick={handleInsuranceClick}>
        <div className="blog-post">
          <img src={BlogImage1} alt="Safeguard your identity" />
          <p className="Blog-title">Trust & Safety</p>
          <h3>Safeguard your identity and prevent Aadhaar Card Fraud</h3>
          <p className="description">
            In today’s day and age when cybercrime is rampant, processes that
            are meant to offer ease...
          </p>
          <p className="meta">Muktha Tavane | 3 min read | 07 August, 2024</p>
        </div>

        <div className="blog-post" onClick={handleInsuranceClick}>
          <img src={BlogImage2} alt="Celebrating diversity" />
          <p className="Blog-title">Life @ PhonePe</p>
          <h3>Pride & Beyond: Celebrating diversity and allyship at PhonePe</h3>
          <p className="description">
            Since the launch of its D&I initiative in March 2021, PhonePe has
            shown a long-standing...
          </p>
          <p className="meta">PhonePe Editor | 3 min read | 24 July, 2024</p>
        </div>


        <div className="blog-post"onClick={handleInsuranceClick}>
          <img src={BlogImage3} alt="Affordable health insurance" />
          <p className="Blog-title">Insurance</p>
          <h3>
            Making Health Insurance Accessible and Affordable with Monthly
            Premiums
          </h3>
          <p className="description">
            Are you someone who is looking to choose the right health insurance
            plan but is hesitant...
          </p>
          <p className="meta">PhonePe Editor | 3 min read | 12 June, 2024</p>
        </div>
      </section>

      <section className="blog-posts" onClick={handleInsuranceClick}>
          <div className="blog-post">
            <img src={BlogImage4} alt="Stay safe from fake apps!" />
            <p className="Blog-title">Trust & Safety</p>
            <h3>Stay safe from fake apps!</h3>
            <p className="description">
              In an era of smartphones and digital convenience, mobile
              applications have become necessary resources....
            </p>
            <p className="meta">Muktha Tavane | 3 min read | 07 August, 2024</p>
          </div>

          <div className="blog-post" onClick={handleInsuranceClick}>
            <img src={BlogImage5} alt="India 2029" />
            <p className="Blog-title">Milestones</p>
            <h3>India 2029: The Five-year Fintech Agenda</h3>
            <p className="description">
              In the last decade, India has witnessed an unprecedented surge in
              the use of technology to access financial services and products....
            </p>
            <p className="meta">PhonePe Editor | 3 min read | 24 July, 2024</p>
          </div>

          <div className="blog-post">
            <img src={BlogImage6} alt="Driving financial inclusion" />
            <p className="Blog-title">Life @ PhonePe</p>
            <h3>Driving financial inclusion across hinterlands of India</h3>
            <p className="description">
              PhonePe is on a mission to democratize payments and financial
              services to a billion + Indians and processes over 6.8 billion ...
            </p>
            <p className="meta">PhonePe Editor | 3 min read | 12 June, 2024</p>
          </div>
        </section>

        <section className="blog-posts">
          <div className="blog-post">
            <img src={BlogImage7} alt="Simplifying the Mutual Fund Portfolio Puzzle" />
            <p className="Blog-title">Investments</p>
            <h3>Simplifying the Mutual Fund Portfolio Puzzle</h3>
            <p className="description">
              An American investor, and the vice chairman of Berkshire Hathaway
              Charles Munger once said, “Missing out on some opportunity never
              bothers us. What’s wrong with someone..
            </p>
            <p className="meta">Muktha Tavane | 3 min read | 07 August, 2024</p>
          </div>

          <div className="blog-post">
            <img src={BlogImage8} alt="Unlocking trust in Digital Insurance" />
            <p className="Blog-title">Insurance</p>
            <h3>
              Unlocking trust: the Digital Insurance era paves way for user
              confidence & assurance
            </h3>
            <p className="description">
              In our constant pursuit of tools to enhance our financial
              management, trust emerges as a pivotal element in their adoption...
            </p>
            <p className="meta">PhonePe Editor | 3 min read | 24 July, 2024</p>
          </div>

          <div className="blog-post">
            <img src={BlogImage9} alt="WealthTech Platforms" />
            <p className="Blog-title">Investments</p>
            <h3>
              WealthTech Platforms: Paving the Way for young Investors to Create
              Wealth
            </h3>
            <p className="description">
              Back in the 1980s, 1990s and early 2000s, only rich people
              could invest in markets. Nowadays, even a person with a monthly
              income can participate...
            </p>
            <p className="meta">PhonePe Editor | 3 min read | 12 June, 2024</p>
          </div>
        </section>

        {showMore && (
        <section className="blog-posts">
          <div className="blog-post">
            <img src={BlogImage10} alt="Safeguard your identity" />
            <p className="Blog-title">Trust & Safety</p>
            <h3>Stay safe from fake apps!</h3>
            <p className="description">
              In an era of smartphones and digital convenience, mobile
              applications have become necessary resources....
            </p>
            <p className="meta">Muktha Tavane | 3 min read | 07 August, 2024</p>
          </div>

          <div className="blog-post">
            <img src={BlogImage11} alt="Celebrating diversity" />
            <p className="Blog-title">Life @ PhonePe</p>
            <h3>Pride & Beyond: Celebrating diversity and allyship at PhonePe</h3>
            <p className="description">
              Since the launch of its D&I initiative in March 2021, PhonePe has
              shown a long-standing...
            </p>
            <p className="meta">PhonePe Editor | 3 min read | 24 July, 2024</p>
          </div>

          <div className="blog-post">
            <img src={BlogImage12} alt="Affordable health insurance" />
            <p className="Blog-title">Insurance</p>
            <h3>
              Making Health Insurance Accessible and Affordable with Monthly
              Premiums
            </h3>
            <p className="description">
              Are you someone who is looking to choose the right health insurance
              plan but is hesitant...
            </p>
            <p className="meta">PhonePe Editor | 3 min read | 12 June, 2024</p>
          </div>
        </section>
      )}
      
    
      <div className="see-more-container">
        <button className="see-more-button" onClick={handleSeeMoreClick}>
          {showMore ? "See Less" : "See More"}{" "}
          <i className={`fas fa-chevron-${showMore ? "up" : "down"}`}></i>
        </button>
      </div>

      

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
        <div className="footer-column">
          <h3>Insurance</h3>
          <ul>
            <li>Motor Insurance</li>
            <li>Bike Insurance</li>
            <li>Car Insurance</li>
            <li>Health Insurance</li>
            <li>Arogya Sanjeevani Policy</li>
            <li>Life Insurance</li>
            <li>Term Life Insurance</li>
            <li>Personal Accident Insurance</li>
            <li>Travel Insurance</li>
            <li>International Travel Insurance</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Investments</h3>
          <ul>
            <li>24K Gold</li>
            <li>Liquid Funds</li>
            <li>Tax Saving Funds</li>
            <li>Equity Funds</li>
            <li>Debt Funds</li>
            <li>Hybrid Funds</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>General</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Press</li>
            <li>Ethics</li>
            <li>Report Vulnerability</li>
            <li>Merchant Partners</li>
            <li>Blog</li>
            <li>Tech Blog</li>
            <li>PhonePe Pulse</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Grievance Policy</li>
            <li>How to Pay</li>
            <li>E-Waste Policy</li>
            <li>Trust & Safety</li>
            <li>Global Anti-Corruption Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>PhonePe Group</h3>
          <ul>
            <li>Indus Appstore</li>
            <li>Share.Market</li>
            <li>Pincode</li>
          </ul>
          <div className="certification">
            <img src="sisa-logo.png" alt="SISA Certified" /> {/* Add certification image */}
            <p>PCI DSS Certified</p>
          </div>
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

export default BlogPage;
