import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiPostgresql, SiMysql, SiExpress, SiCplusplus } from 'react-icons/si';

import "./works.css"

const items = [
    {
        id: "1",
        title: "FlightWay - Real-Time Flight Tracking Web App",
        description: "A sleek and modern web application that allows users to track flights in real-time. Built with Node.js, Express, and modern web technologies, FlightWay offers a seamless experience for users to monitor global air traffic.",
        img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    },
    {
        id: "2",
        title: "FlightWay - Real-Time Flight Tracking Web App",
        description: "A sleek and modern web application that allows users to track flights in real-time. Built with Node.js, Express, and modern web technologies, FlightWay offers a seamless experience for users to monitor global air traffic.",
        img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    },
    {
        id: "3",
        title: "FlightWay - Real-Time Flight Tracking Web App",
        description: "A sleek and modern web application that allows users to track flights in real-time. Built with Node.js, Express, and modern web technologies, FlightWay offers a seamless experience for users to monitor global air traffic.",
        img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",

    },
    {
        id: "4",
        title: "FlightWay - Real-Time Flight Tracking Web App",
        description: "A sleek and modern web application that allows users to track flights in real-time. Built with Node.js, Express, and modern web technologies, FlightWay offers a seamless experience for users to monitor global air traffic.",
        img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    }
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
                    
                    <button className='btn'>Live Demo</button>
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