import React from "react";
import "./about.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImg from "../../assets/images/profile-picture.jpg"

export default function () {
    return (
        <motion.section id="About" className="about-section"
            initial={{ opacity: 0, y: 50 }} // Starting position (hidden and below viewport)
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move up
            transition={{ duration: 2 }} // Animation duration
            viewport={{ once: true }} // Trigger animation only once when it enters viewport
        >
            <div className="about-container">
                <div className="about-wrapper">
                    <div className="about-img-container">
                        <img src={profileImg} alt="profile image" />
                    </div>
                    <div className="about-content-container">
                        <div className="about-info">
                            <h1 className="about-title">About me</h1>
                            <p className="about-p">I'm Marwan, a third-year Computer Engineering student with a focus on web development and software engineering, studying at Cairo University and ITMO University in Russia through a Russian Government Scholarship. With over two years of experience, he is a certified front-end developer, having earned a Udacity nano-degree via an Egyptian Ministry scholarship. Skilled in full-stack development with technologies like React, Node.js, Express, and PostgreSQL, he currently works as a full-stack developer in Cairo, aiming to create user-friendly, intuitive applications. Contact him via email or Telegram for assistance.</p>

                            {/* <p className="about-p">With over two years of experience in web design and development, I'm certified as a professional front-end developer, having completed a nano-degree from Udacity through a scholarship from the Egyptian Ministry of Communications and IT. I specialize in building full-stack applications using React, Node.js, Express, PostgreSQL, and more.</p>

                            <p className="about-p">Currently working as a full-stack developer in Cairo, I focus on creating seamless, intuitive user experiences using modern frameworks. My goal is to design websites and applications that are not only functional but also delightful to use. If you need assistance, feel free to get in touch via email or Telegram.</p> */}
                        </div>
                        <Link className="sidebar_link special-link" to="/contact" >Let's discuss your project</Link>
                    </div>

                </div>
            </div>
        </motion.section>
    )
}