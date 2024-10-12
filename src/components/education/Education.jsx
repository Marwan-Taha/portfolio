import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import "./education.css"

export default function () {
    return (
        <motion.section id="Education" className="education-section"
            initial={{ opacity: 0, y: 200 }} // Starting position (hidden and below viewport)
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move up
            transition={{ duration: 1 }} // Animation duration
            viewport={{ once: true }} // Trigger animation only once when it enters viewport
        >
            <div className="education-container">
                <h1>Education</h1>
                <div className="education-grid-container">
                    
                    <div className="education-grid-item ITMO-img institute-img">
                        <div className="education-info-wrapper">
                            <div className="learning-container">
                                <h3 className="program-title">Software Engineering Exchange Program</h3>
                                <p className="program-description">Two-year exchange program at ITMO University in Russia focused on Software Engineering, covering advanced topics in Java and Linux and providing hands-on experience.</p>
                            </div>
                            <div className="institute-name-container">
                                <Link className="institute-link" to="https://en.itmo.ru/">ITMO University</Link>
                            </div>
                        </div>


                    </div>
                    <div className="education-grid-item CUFE-img institute-img">
                        <div className="education-info-wrapper">
                            <div className="learning-container">
                                <h3 className="program-title">Bachelor of Computer Engineering</h3>
                                <p className="program-description">The Computer Engineering degree at Cairo University's Faculty of Engineering emphasizes proficiency in programming topics, algorithms, databases, and more..</p>
                            </div>
                            <div className="institute-name-container">
                                <Link className="institute-link" to="https://en.itmo.ru/">Faculty of Engineering, Cairo University</Link>
                            </div>
                        </div>

                    </div>
                    <div className="education-grid-item FU-img institute-img">
                        <div className="education-info-wrapper">
                            <div className="learning-container">
                                <h3 className="program-title">Higher Secondary School Certificate</h3>
                                <p className="program-description">Futures Language School, where instruction is exclusively in English, I obtained my Higher Secondary School Certificate with a remarkable academic score of 99%.</p>
                            </div>
                            <div className="institute-name-container">
                                <Link className="institute-link" to="https://en.itmo.ru/">Futures Language School</Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </motion.section>
    )
}