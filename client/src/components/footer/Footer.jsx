import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Mare</span>
            <span>Buying on Mare</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From Mare</h2>
            <span>Mare Business</span>
            <span>Mare Pro</span>
            <span>Mare Logo Maker</span>
            <span>Mare Guides</span>
            <span>Get Inspired</span>
            <span>Mare Select</span>
            <span>ClearVoice</span>
            <span>Mare Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Mare</h2>
            <span>© Mare International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <ion-icon name="logo-twitter"></ion-icon>
              <ion-icon name="logo-facebook"></ion-icon>
              <ion-icon name="logo-linkedin"></ion-icon>
              <ion-icon name="logo-twitch"></ion-icon>
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
            <div className="link">
              <ion-icon name="language-outline"></ion-icon>
              <span>English</span>
            </div>
            <div className="link">
              <ion-icon name="cash-outline"></ion-icon>
              <span>USD</span>
            </div>
            <ion-icon name="accessibility-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
