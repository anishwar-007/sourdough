import React from "react";
import "./trustedBy.css";

const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="trustedBy__title"> Trusted By</div>
      <div className="trustedBy__icons">
        <img
          src="https://download.logo.wine/logo/Monzo_(bank)/Monzo_(bank)-Logo.wine.png"
          alt="mozo"
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2021/05/Zoopla-Logo.png"
          alt="zoopla"
        />
        <img
          src="https://download.logo.wine/logo/Google/Google-Logo.wine.png"
          alt="google"
        />
        <img
          src="https://download.logo.wine/logo/Nike%2C_Inc./Nike%2C_Inc.-Nike-Logo.wine.png"
          alt="nike"
        />
        <img
          src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png"
          alt="amazon"
        />
      </div>
    </div>
  );
};

export default TrustedBy;
