import React from "react";
import "./footer.css";
import facebook from "../../utils/facebook.png";
import youtube from "../../utils/youtube.png";
import twitter from "../../utils/twitter.png";
import instagram from "../../utils/instagram.png";
import appleLogo from "../../utils/appleLogo.png";
import playStore from "../../utils/playStore.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__element">
        <span className="element__header">sodo</span>
        <div className="footer__icons">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
      <div className="footer__element">
        <span className="footer__top">Company</span>
        <span className="footer__category">About us</span>
        <span className="footer__category">Meet the Team</span>
        <span className="footer__category">Careers</span>
        <span className="footer__category">Blog</span>
      </div>
      <div className="footer__element">
        <span className="footer__top">Product</span>
        <span className="footer__category">Product</span>
        <span className="footer__category">Product</span>
        <span className="footer__category">Product</span>
        <span className="footer__category">Product</span>
      </div>
      <div className="footer__element">
        <span className="footer__top">Product</span>
        <span className="footer__category">Product</span>
        <span className="footer__category">Product</span>
        <span className="footer__category">Product</span>
      </div>
      <div className="footer__element">
        <button className="footer__btn">
          <img src={appleLogo} alt="" /> Apple Store
        </button>
        <button className="footer__btn">
          <img src={playStore} alt="" /> Play Store
        </button>
      </div>
    </div>
  );
};

export default Footer;
