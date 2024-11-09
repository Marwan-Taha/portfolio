import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiPostgresql, SiMysql, SiExpress, SiCplusplus } from 'react-icons/si';
import {Link} from "react-router-dom"
import "./works.css"

const items = [
    {
        id: "1",
        title: "FlightWay - Real-Time Flight Tracking Web App",
        description: "A sleek and modern web application that allows users to track flights in real-time. Built with Node.js, Express, and modern web technologies, FlightWay offers a seamless experience for users to monitor global air traffic.",
        img: "https://i.ibb.co/pwh0TSx/fw1.png",
        link: "https://github.com/Marwan-Taha/FlightWay-FlightTracker"
    },
    {
        id: "2",
        title: "BookScribe",
        description: "A book management platform where users search books via Google Books API, add to a library, and take notes. Built with Node.js, Express, and PostgreSQL, it highlights API integration, database management, and user-focused development.",
        img: "https://i.ibb.co/xS8T2yK/Bookscribe.png",
        link: ""
    },
    
]

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end start", "start end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section  className='project-work'>
            <div className='project-wrapper'>
                <div className="img-container" ref={ref}>
                    <img src={item.img} alt="project image" className='project-img' />

                </div>
                <motion.div className='project-info' style={{y}}>
                    <h2 className='project-title'>{item.title}</h2>
                    <p className='project-description'>{item.description}</p>


                    <div className='tech-stack-icons'>
                        <FaReact />
                        <FaNodeJs />
                        <SiExpress />
                        <SiPostgresql />
                    </div>
                    
                    <button className='btn'> <Link target='_blank' className='link' to={item.link}>Live Demo</Link></button>
                </motion.div>
            </div>

        </section>
    )
}


const Works = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <section id='Projects' className="works" ref={ref}>


            <div className="progress">
                <h1 className='title'>Projects</h1>
                <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
            </div>

            {items.map((item) => (
                <Single key={item.id} item={item} />
            ))}

        </section>
    )
}

export default Works