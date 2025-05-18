import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import { images } from "../../constants";

const works = [
  {
    name: "How-Healthy",
    title: "How-Healthy",
    imgUrl: images.howHealthy,
    description:
      "A hostel management system built with PHP and Bootstrap to handle room bookings, payments, and student records digitally.",
    projectLink: "", // Add live link if available
    codeLink: "", // Add GitHub link if available
  },
  {
    name: "Hotel Management",
    title: "Hotel Management System",
    imgUrl: images.hotelManagement,
    description:
      "A PHP-based system for managing hotel operations, including booking, payments, and customer data tracking.",
    projectLink: "", // Add live link if available
    codeLink: "", // Add GitHub link if available
  },
  {
    name: "Health-Booker",
    title: "Health-Booker",
    imgUrl: images.healthBooker,
    description:
      "A MERN stack app for booking doctor appointments, managing user profiles, and handling admin tasks securely.",
    projectLink: "", // Add live link if available
    codeLink: "", // Add GitHub link if available
  },
];

const Work = () => {
  return (
    <>
      <h2 className="head-text">Portfolio</h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                {work.projectLink && (
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}
                {work.codeLink && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p
                className="p-text"
                style={{ marginTop: 10, textAlign: "center" }}
              >
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="more__link">
        <a href="https://github.com/amansingh9334" target="_blank" rel="noreferrer">
          More projects
        </a>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "portfolio",
  "app__primarybg"
);
