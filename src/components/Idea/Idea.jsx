import React from "react";
import idea from "../../utils/idea.png";
import "./idea.css";

const Idea = () => {
  return (
    <div className="idea">
      <img src={idea} alt="idea" />
      <span className="idea__heading">Lorem Ispum</span>
      <div className="idea__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit itaque
        facere provident consequatur, nobis ea qui, corrupti aliquam.
      </div>
    </div>
  );
};

export default Idea;
