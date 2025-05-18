import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/aman-raj-139b392b5/ "
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://github.com/amansingh9334" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="mailto:amansingh.hjp1@gmail.com">
        <GrMail />
      </a>
    </div>
  </div>
);

export default SocialMedia;
