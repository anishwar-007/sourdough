import React from "react";
import "./intro.css";

const Intro = ({ profile, reverse }) => {
  return (
    <div className={`${reverse ? "intro reverse" : "intro"}`}>
      <div className="intro__container">
        <p className={`${profile ? "intro__title--profile" : "intro__title"}`}>
          Lorem ipsum dolor sit amet.
        </p>
        <p className={`${profile ? "intro__data--profile" : "intro__data"}`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo possimus
          corporis vel harum omnis dolore facilis odio distinctio cumque, vitae
          tempora minus dolores, nihil similique deserunt alias velit provident
          sit?
        </p>
        {!profile && (
          <div className="mybtns">
            <button className="btn primary">Primary Action</button>
            <button className="btn secondary">Secondary Action</button>
          </div>
        )}
      </div>
      <img
        src="https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png"
        alt="pic holder"
        className={`${reverse ? "intro__pic--reverse" : "intro__pic"}`}
      />
    </div>
  );
};

export default Intro;
