import React from "react";
import FeatureCard from "../featureCard/FeatureCard";
import "./OurFeatures.scss";
const OurFeatures = () => {
  return (
    <div className="our-features-wrapper">
      <h1 className="our-features-title">Our Features</h1>
      <div className="feature-cards-wrapper">
        <FeatureCard
          icon="fa-regular fa-map"
          title="The Land Specialist"
          body="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate"
        />
        <FeatureCard
          icon="fa-brands fa-youtube"
          title="Land Knowledge Centre"
          body="At vero eos et accusamus et iusto odio ducimus dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."
        />
        <FeatureCard
          icon="fa-solid fa-bullseye"
          title="Land Legal Awareness"
          body="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate"
        />
        <FeatureCard
          icon="fa-solid fa-desktop"
          title="Property Management"
          body="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate"
        />
        <FeatureCard
          icon="fa-solid fa-credit-card"
          title="Cost and Time saver"
          body="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate"
        />
        <FeatureCard
          icon="fa-solid fa-phone-volume"
          title="Legal Assistance"
          body="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate"
        />
      </div>
    </div>
  );
};

export default OurFeatures;
