import React from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";


const Footer = () => {

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:amansingh.hjp1@gmail.com" className="p-text">
            amansingh.hjp1@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 9334971309" className="p-text">
            +91 9334971309
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>
          &copy;2025{" "}
          <span className="name">
            <a
              href="https://www.linkedin.com/in/aman-raj-139b392b5/"
              target="_blank"
            >
              {" "}
              Aman
            </a>
          </span>
        </p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
