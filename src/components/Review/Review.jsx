import React from "react";
import "./review.css";

const Review = () => {
  return (
    <div className="review">
      <div className="review__comment">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      </div>
      <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" />
      <span className="review__name">Jessica Rowlands </span>
      <span className="review__designation">Chief Design Office, uxtoast</span>
    </div>
  );
};

export default Review;
