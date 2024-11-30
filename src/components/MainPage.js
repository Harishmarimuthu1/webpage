import React, { useState, useEffect } from "react";
import "./MainPage.css";
import BizzBooksLogo from "../assets/BizzBooks -logo.png";
import { FaSearch } from "react-icons/fa"; // Keep search icon from FontAwesome
import { IoMdArrowDropdown } from "react-icons/io"; // New dropdown icon from Ionicons
import FAQ from "./FAQ";
import Footer from "./Footer";

// Plans Data
const plans = [
  {
    name: "Simple Start",
    originalPrice: "$35",
    discountedPrice: "$17.50/mo",
    description: "Save 50% for 3 months",
    expertAssistance: true,
  },
  {
    name: "Essentials",
    originalPrice: "$65",
    discountedPrice: "$32.50/mo",
    description: "Save 50% for 3 months",
    expertAssistance: true,
  },
  {
    name: "Plus",
    originalPrice: "$99",
    discountedPrice: "$49.50/mo",
    description: "Save 50% for 3 months",
    expertAssistance: true,
    isFavorite: true,
  },
  {
    name: "Advanced",
    originalPrice: "$235",
    discountedPrice: "$117.50/mo",
    description: "Save 50% for 3 months",
    expertAssistance: true,
  },
];

const MainPage = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [activeNav, setActiveNav] = useState(null); // To track hovered navbar item
  const [dropdownOpen, setDropdownOpen] = useState({}); // To track the open dropdowns

  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide for the slideshow
  const [slideDirection, setSlideDirection] = useState(""); // Track the slide direction for animations
  const [showForm, setShowForm] = useState(false); // Track if the registration form is visible
  const [currentStep, setCurrentStep] = useState(1); // Stepper state for pricing
  const [notification, setNotification] = useState(""); // State for showing success message

  // State to track form data
  const [formData, setFormData] = useState({
    email: "",
    help: "",
    firmType: "",
    aum: "",
    hearAbout: "",
    additionalInfo: "",
    agree: false,
  });

  const slides = [
    {
      title: "Because Confident Planning Starts Here",
      text: "Our market-leading, best-in-class financial planning solutions enable you to build trusted plans, operate efficiently, and scale your business.",
      buttonText: "Request a Demo",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1", // Replace with actual YouTube video ID
    },
    {
      title: "Slide 2 - Financial Stability",
      text: "Gain financial stability with comprehensive solutions for modern businesses.",
      buttonText: "Learn More",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2", // Replace with actual YouTube video ID
    },
    {
      title: "Slide 3 - Better Planning",
      text: "Plan better and grow your wealth with our expert solutions.",
      buttonText: "Get Started",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3", // Replace with actual YouTube video ID
    },

    {
      title: "Slide 2 - Financial Stability",
      text: "Gain financial stability with comprehensive solutions for modern businesses.",
      buttonText: "Learn More",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2", // Replace with actual YouTube video ID
    },

    {
      title: "Slide 2 - Financial Stability",
      text: "Gain financial stability with comprehensive solutions for modern businesses.",
      buttonText: "Learn More",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2", // Replace with actual YouTube video ID
    },

    {
      title: "Slide 2 - Financial Stability",
      text: "Gain financial stability with comprehensive solutions for modern businesses.",
      buttonText: "Learn More",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2", // Replace with actual YouTube video ID
    },

    {
      title: "Slide 2 - Financial Stability",
      text: "Gain financial stability with comprehensive solutions for modern businesses.",
      buttonText: "Learn More",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2", // Replace with actual YouTube video ID
    },
    // Add other slides similarly
  ];
  // Automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection("next");
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleDropdownClick = (key) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Define secondNavContent here
  const secondNavContent = {
    "Why-BizBooks": [""],
    CRM: ["Vendor", "Client", "Payroll-Inventory"],
    "Secure Migration": ["", ""],
    Transactions: ["Invoice", "Quotations"],
    "Tools & Integrations": [""],
    "Tax Support": ["IT FIlling", "GST Filling"],

    Support: [""],
    "Analytics & Collobration": ["Virtual Assistants", "Remainder & Schedule"],
  };

  // Handle Next and Previous Slide
  const nextSlide = () => {
    setSlideDirection("next");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideDirection("prev");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Handle clicking on a dot (for the pagination indicators)
  const goToSlide = (slideIndex) => {
    if (slideIndex > currentSlide) {
      setSlideDirection("next");
    } else {
      setSlideDirection("prev");
    }
    setCurrentSlide(slideIndex);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Show notification and auto-close form
    setNotification("Registration Successful!");
    setTimeout(() => {
      setNotification("");
      setShowForm(false);
    }, 3000); // Show notification for 3 seconds
  };

  return (
    <div className="App">
      {/* First Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src={BizzBooksLogo} alt="BizzBooksLogo" />
        </div>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              {Object.keys(secondNavContent).map((key, index) => (
                <li key={index}>
                  <a
                    href={`#${key.replace(/\s+/g, "-")}`}
                    onMouseEnter={() => setActiveNav(key)}
                  >
                    {key.replace("-", " ")}
                    {/* Dropdown Button */}
                    <IoMdArrowDropdown
                      className="dropdown-icon"
                      onClick={() => handleDropdownClick(key)}
                    />
                  </a>
                  {/* Dropdown Content */}
                  {dropdownOpen[key] && (
                    <ul className="dropdown-content">
                      {secondNavContent[key]?.map((item, subIndex) => (
                        <li key={subIndex}>
                          <a href={`#${item.replace(/\s+/g, "-")}`}>{item}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <FaSearch className="search-icon" onClick={handleSearchClick} />
              </li>
            </ul>
          </div>
        </nav>

        <div className="auth-links">
          <div className="line"></div>
          <a href="#login" className="login-link">
            LOG IN
          </a>
          <button className="free-trial-btn">FREE TRIAL</button>
        </div>
      </header>

      {/* Conditional Rendering for Search Bar and Second Navbar */}
      {showSearchBar ? (
        <div className="search-bar-container">
          <p>Support Finteck</p>
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      ) : (
        <>
          <nav className="second-navbar">
            <ul className="second-nav-links">
              {/* Show active link as heading and other sublinks */}
              {activeNav && (
                <>
                  <li className="second-navbar-heading">
                    {activeNav.replace("-", " ").toUpperCase()}
                  </li>
                  {secondNavContent[activeNav]?.map((item, index) => (
                    <li key={index} className="second-navbar-sublink">
                      {item}
                    </li>
                  ))}
                </>
              )}
            </ul>
          </nav>

          {/* Extra Header Bar */}
          <div className="extra-header-bar">
            <p>Try Our Versions:</p>
            <div className="extra-links">
              <a href="#accountant" className="extra-link">
                Accountant
              </a>
              <a href="#wealth-manager" className="extra-link">
                Wealth Manager
              </a>
              <a href="#business-to-business" className="extra-link">
                Business To Business
              </a>
            </div>
            <button className="registerButton" onClick={toggleForm}>
              {showForm ? "Close Form" : "Register"}
            </button>
          </div>
        </>
      )}
      {/* Hero Section - Animated Slideshow */}
      <section className={`hero-section ${slideDirection}`}>
        <div className="hero-container">
          {/* Left Side: Text Content */}

          <div className="hero-content">
            <div>
              <h1>{slides[currentSlide].title}</h1>
              <p>{slides[currentSlide].text}</p>
              <button className="demo-btn">
                {slides[currentSlide].buttonText}
              </button>
            </div>

            {/* Right Side: YouTube Video */}
            <div className="hero-video">
              <iframe
                width="560"
                height="315"
                src={slides[currentSlide].videoUrl} // Use the video URL from the current slide
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Previous button */}
          <div className="hero-prev" onClick={prevSlide}>
            &#10094;
          </div>

          {/* Next button */}
          <div className="hero-next" onClick={nextSlide}>
            &#10095;
          </div>

          {/* Dots for pagination */}
          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form - as an overlay */}
      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <div>
              <h2>How can we help you?</h2>
              <p>
                We're delighted to discuss how Addepar can serve you. The more
                we know, the easier it is to get the right person for you. We
                look forward to connecting.
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  className="work-email"
                  type="email"
                  name="email"
                  placeholder="Work Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <select
                  name="help"
                  value={formData.help}
                  onChange={handleChange}
                >
                  <option value="">How can we help you?</option>
                  <option value="sales">
                    Speak with a sales representative
                  </option>
                  <option value="demo">Request a demo</option>
                  <option value="partnership">
                    Inquire about Addepar Partnerships program
                  </option>
                </select>
                <select
                  name="firmType"
                  value={formData.firmType}
                  onChange={handleChange}
                >
                  <option value="">Type of Firm</option>
                  <option value="asset-manager">Asset Manager</option>
                  <option value="advisor">Advisor</option>
                  <option value="broker-dealer">Broker Dealer</option>
                </select>
                <select name="aum" value={formData.aum} onChange={handleChange}>
                  <option value="">Select your total AUM</option>
                  <option value="less-500m">&lt; $500M</option>
                  <option value="500m-1.5b">$500M - $1.5B</option>
                  <option value="greater-1.5b">&gt; $1.5B</option>
                </select>
                <select
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                >
                  <option value="">How Did You Hear About Us?</option>
                  <option value="partner">Addepar Partner</option>
                  <option value="custodian">Custodian Referral</option>
                  <option value="customer">Addepar Customer</option>
                  <option value="news">Industry News</option>
                </select>
                <textarea
                  name="additionalInfo"
                  placeholder="Additional Information"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                />
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                  />
                  I agree that Addepar may use my personal data to send me email
                  communications about Addepar events, products and services.
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>

            <div className="info-container">
              <h3>Client support</h3>
              <p>
                If you are a current client with an immediate question, please
                connect directly with your team or
                <br />
                <a href="mailto:inquiries@addepar.com">inquiries@addepar.com</a>
              </p>
              <h3>Press inquiries</h3>
              <a href="mailto:pr@addepar.com">pr@addepar.com</a>
              <h3>Marketing inquiries</h3>
              <a href="mailto:marketing@addepar.com">marketing@addepar.com</a>
            </div>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {notification && (
        <div className="notification">
          <p>{notification}</p>
        </div>
      )}

      {/* Pricing Plans */}
      <div className="pricing-container">
        <h1>Plans for every kind of business</h1>
        <p>Buy now and get Live Expert-Assisted FREE for 30 days*</p>

        {/* Stepper Component */}
        <div className="stepper-container">
          <div className={`step ${currentStep === 1 ? "active" : ""}`}>
            <span className="step-number">1</span>
            Select plan
          </div>
          <div className="divider"></div>
          <div className={`step ${currentStep === 2 ? "active" : ""}`}>
            <span className="step-number">2</span>
            Add Payroll (optional)
          </div>
          <div className="divider"></div>
          <div className={`step ${currentStep === 3 ? "active" : ""}`}>
            <span className="step-number">3</span>
            Checkout
          </div>
        </div>

        <div className="plans-wrapper">
          {plans.map((plan, index) => (
            <div
              className={`plan ${plan.isFavorite ? "favorite" : ""}`}
              key={index}
            >
              <h2>{plan.name}</h2>
              <div className="price">
                <span className="original-price">{plan.originalPrice}</span>
                <span className="discounted-price">{plan.discountedPrice}</span>
              </div>
              <p>{plan.description}</p>
              {plan.expertAssistance && (
                <div className="expert-assisted">
                  <span>LIVE</span> Expert Assisted <br />
                  Try expert help FREE for 30 days*
                </div>
              )}
              <button
                className="choose-plan-btn"
                onClick={() => setCurrentStep(2)}
              >
                Choose plan
              </button>
            </div>
          ))}
        </div>
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default MainPage;
