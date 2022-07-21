import React from "react";
import Plan from "../Plan/Plan";
import "./allPlans.css";

const AllPlans = () => {
  return (
    <div className="allPlans">
      <Plan title="Free" cost={0} last={true} index={1} />
      <Plan title="Standard" cost={9} index={2} mostPopular={true} />
      <Plan title="Enterprise" cost={16} index={3} />
    </div>
  );
};

export default AllPlans;
