import React from "react";
import ImageCard from "./ImageCard";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiPostgresql, SiMysql, SiExpress } from 'react-icons/si';
import ApiIcon from '@mui/icons-material/Api';
import Project from "./Project";
import "./projects.css"

export default function () {
    const images = [
        'src/assets/images/flightway/fw1.png', 'src/assets/images/flightway/fw2.png', 'src/assets/images/flightway/fw3.png'
    ];
    return (
        <div id="Projects" className="project-section">
            <div className="project-container">
                <h1 className="project-section-title">Projects</h1>
                <Project 
                    title="FlightWay - Real-Time Flight Tracking Web App"                   
                    description="A sleek and modern web application that allows users to track flights in real-time. Built with Node.js, Express, and modern web technologies, FlightWay offers a seamless experience for users to monitor global air traffic."
                    icons={[<FaNodeJs />, <SiExpress />, <ApiIcon />]}
                    images={images}
                    cardTitle="Flight Tracker App"
                    projectLink="https://github.com/Marwan-Taha/FlightWay-FlightTracker.git"
                />
            </div>
        </div>
    )
}