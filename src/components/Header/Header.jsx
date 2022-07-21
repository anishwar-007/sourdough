import React, { useState } from "react";
import "./header.css";
import menu from "../../utils/menu.png";
import cancel from "../../utils/cancel.png";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div>
      <div className="header web">
        <div className="header__left">
          <p className="header__title">sodo</p>
          <p className="header__list">About Us</p>
          <p className="header__list">Download</p>
          <p className="header__list">Contact</p>
        </div>
        <div className="header__right">
          <button className="btn">Log in</button>
          <button className="btn primary">Primary Action</button>
        </div>
      </div>
      <div className="header mobile">
        <p className="header__title">sodo</p>
        <img
          src={menu}
          onClick={() => setisOpen(!isOpen)}
          alt="menu"
          className="header__menu"
        />
        {isOpen && (
          <div className="header__mobile">
            <img
              src={cancel}
              onClick={() => setisOpen(!isOpen)}
              alt="menu"
              className="header__menu black"
            />
            <p className="header__list--list">About Us</p>
            <p className="header__list--list">Download</p>
            <p className="header__list--list">Contact</p>
            <button className="btn btn--mobile">Log in</button>
            <button className="btn primary btn--mobile">Primary Action</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
