import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <h1>
      About (using Functional Components): This application provides informaion
      about the products
    </h1>
  );
};

export const Nav = () => {
  return (
    <div>
      <Link to="/" style={{ marginLeft: "1rem", marginRight: "2rem" }}>
        About
      </Link>
      <Link to="/products">Product</Link>
    </div>
  );
};
export default About;
