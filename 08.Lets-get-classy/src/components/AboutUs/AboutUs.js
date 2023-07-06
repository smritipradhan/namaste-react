import React from "react";
import User from "../User/User";
import UserClass from "../UserClass/UserClass";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      About Us
      <div className="user-card">
        <User
          name="Smriti (Functional Component)"
          designation="Software Engineer"
          year="2022"
        />
      </div>
      <div className="user-card">
        <UserClass
          name="Smriti (Class Component)"
          designation="Software Engineer"
          year="2022"
        />
      </div>
    </div>
  );
};

export default AboutUs;
