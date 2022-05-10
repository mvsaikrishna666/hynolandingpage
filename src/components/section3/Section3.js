import React from "react";
import Section3Card from "../section3Cards/Section3Card";
import "./Section3.scss";
const valuesList = [
  "We provide efficient services maintaining confidentiality",
  "We give highest priority to the needs and requirements of the users",
  "Minimizing time, reducing cost and improving quality are our key concerns",
];
const landDocsList = [
  "Invest in land and leave the rest to LandDocs for trusted management",
  "Highly qualified experts in all land related fields with decades of experience",
  "Creating cadre of competent land service providers",
];
const aboutLandDocsList = [
  "All land related service available at your doorsteps on a single click or call",
  "Monitoring your land rights, records and boundaries from anywhere in the world",
  "All land services needs pertaining to land in India - from anywhere in the world",
];
const Section3 = () => {
  return (
    <div className="section3-wrapper">
      <Section3Card title="Our Values" list={valuesList} />
      <Section3Card reverse title="Why only LandDocs?" list={landDocsList} />
      <Section3Card title="About LandDocs" list={aboutLandDocsList} />
    </div>
  );
};

export default Section3;
