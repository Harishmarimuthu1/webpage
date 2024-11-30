import React from 'react';
import './sitemap.css';

const SitemapSection = ({ title, links }) => (
  <div className="sitemap-section">
    <h2 className="section-title">{title}</h2>
    <ul className="links-list">
      {links.map((link, index) => (
        <li key={index} className="link-item">
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Sitemap = () => {
  const sitemapData = {
    invest: {
      title: "Invest",
      links: [
        { text: "Automated Investing", href: "/automated-investing" },
        { text: "Stock Investing", href: "/stock-investing" },
        { text: "Socially Responsible Investing", href: "/socially-responsible-investing" },
        { text: "Retirement", href: "/retirement" },
        { text: "College", href: "/college" },
        { text: "Pricing", href: "/pricing" },
        { text: "Tax-Loss Harvesting", href: "/tax-loss-harvesting" },
        { text: "Historical Performance", href: "/historical-performance" },
        { text: "Explore all investments", href: "/explore-investments" }
      ]
    },
    save: {
      title: "Save",
      links: [
        { text: "Cash", href: "/cash" },
        { text: "ATM Locator", href: "/atm-locator" }
      ]
    },
    bonds: {
      title: "Bonds",
      links: [
        { text: "Automated Bond Ladder", href: "/automated-bond-ladder" },
        { text: "Automated Bond Portfolio", href: "/automated-bond-portfolio" }
      ]
    },
    borrow: {
      title: "Borrow",
      links: [
        { text: "Borrow", href: "/borrow" }
      ]
    },
    investmentCategories: {
      title: "Investment Categories",
      links: [
        { text: "Wealthfront exclusive offerings", href: "/exclusive-offerings" },
        { text: "US stock ETFs", href: "/us-stock-etfs" },
        { text: "Tech / innovation ETFs", href: "/tech-innovation-etfs" },
        { text: "Socially responsible ETFs", href: "/socially-responsible-etfs" },
        { text: "Sector ETFs", href: "/sector-etfs" },
        { text: "Investing strategy ETFs", href: "/investing-strategy-etfs" },
        { text: "Global stock ETFs", href: "/global-stock-etfs" },
        { text: "Foreign / emerging market ETFs", href: "/foreign-emerging-market-etfs" },
        { text: "Cryptocurrency trusts", href: "/cryptocurrency-trusts" },
        { text: "Commodity ETFs", href: "/commodity-etfs" },
        { text: "Bond ETFs", href: "/bond-etfs" },
        { text: "All investments", href: "/all-investments" }
      ]
    },
    portfolio: {
      title: "Portfolio",
      links: [
        { text: "Socially Responsible Portfolio", href: "/socially-responsible-portfolio" },
        { text: "Direct Indexing Portfolio", href: "/direct-indexing-portfolio" },
        { text: "Classic Portfolio", href: "/classic-portfolio" }
      ]
    },
    learn: {
      title: "Learn",
      links: [
        { text: "Blog", href: "/blog" },
        { text: "Whitepapers", href: "/whitepapers" },
        { text: "Investing Guide", href: "/investing-guide" },
        { text: "IRA Contributions Calculator", href: "/ira-calculator" }
      ]
    },
    financialPlanning: {
      title: "Financial Planning",
      links: [
        { text: "Free Financial Planning Tools & Advice", href: "/financial-planning-tools" },
        { text: "Investment Management, Online Financial Advisor", href: "/investment-management" }
      ]
    },
    aboutUs: {
      title: "About Us",
      links: [
        { text: "Contact Us", href: "/contact" },
        { text: "Reviews", href: "/reviews" },
        { text: "Newsroom", href: "/newsroom" },
        { text: "Careers", href: "/careers" },
        { text: "Legal", href: "/legal" },
        { text: "Help Center", href: "/help" }
      ]
    }
  };

  return (
    <div className="sitemap-container">
      <div className="sitemap-wrapper">
        <div className="sitemap-header">
          <h1 className="sitemap-title">Sitemap</h1>
          <div className="sitemap-icon">
            <svg viewBox="0 0 24 24">
              <path 
                fill="currentColor" 
                d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"
              />
            </svg>
          </div>
        </div>
        
        <div className="sitemap-grid">
          {Object.values(sitemapData).map((section, index) => (
            <SitemapSection 
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;