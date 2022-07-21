import React from "react";
import "./plan.css";

const Plan = ({ title, cost, last, mostPopular }) => {
  return (
    <div className={`${mostPopular ? "plan mostPopular plan__size" : "plan"}`}>
      <div className={`${mostPopular ? "plan__top mostPopular" : "plan__top"}`}>
        {mostPopular && <span className="premium"> MOST POPULAR </span>}
        <br />
        <span
          className={`${
            mostPopular ? "plan__title mostPopular" : "plan__title"
          }`}
        >
          {title}
        </span>
        <div
          className={`${mostPopular ? "plan__cost mostPopular" : "plan__cost"}`}
        >
          {" "}
          £{cost}{" "}
          <span
            className={`${
              mostPopular ? "plan__month mostPopular" : "plan__month"
            }`}
          >
            / month
          </span>{" "}
        </div>
      </div>
      <span
        className={`${mostPopular ? "plan__perks mostPopular" : "plan__perks"}`}
      >
        {" "}
        ✓ Lorem ispum dolor
      </span>
      <span
        className={`${mostPopular ? "plan__perks mostPopular" : "plan__perks"}`}
      >
        {" "}
        ✓ Lorem ispum dolor
      </span>
      <span
        className={`${mostPopular ? "plan__perks mostPopular" : "plan__perks"}`}
      >
        {" "}
        {last ? "✕" : "✓"} Lorem ispum dolor
      </span>
      <button className="plan__signUp">Sign up</button>
    </div>
  );
};

export default Plan;
