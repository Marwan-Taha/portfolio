import React from "react";
import "./about.css"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

                    <div className="about-content-container">
                        <div className="about-info">
                            <h1 className="about-title">About me</h1>
                            <p className="about-p">I'm Marwan, a third-year Computer Engineering student with a strong passion for web development and software engineering. I've had the privilege of studying at both Cairo University and ITMO University in Russia through a Russian Government Scholarship for academic excellence.</p>

                            <p className="about-p">With over two years of experience in web design and development, I'm certified as a professional front-end developer, having completed a nano-degree from Udacity through a scholarship from the Egyptian Ministry of Communications and IT. I specialize in building full-stack applications using React, Node.js, Express, PostgreSQL, and more.</p>

                            <p className="about-p">Currently working as a full-stack developer in Cairo, I focus on creating seamless, intuitive user experiences using modern frameworks. My goal is to design websites and applications that are not only functional but also delightful to use. If you need assistance with React.js or Framer, feel free to get in touch via email or Telegram.</p>
                        </div>
                        <Link className="sidebar_link special-link" to="/contact" >Let's discuss your project</Link>
                    </div>
                    <div className="about-img-container">
                        <iframe src="https://lottie.host/embed/d3ccc336-4141-4434-863a-9276fdeb75c4/hMrRh12dLi.json"></iframe>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}