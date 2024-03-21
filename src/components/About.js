import React from "react";
import User from "./User";

const About = () => {
  return (
    <div>
      <h1 className="text-2xl"> About us</h1>
      <User name="Avelin" place="India" />
      <User name="cilian" place="US" />
    </div>
  );
};
export default About;
