import React, { useState } from 'react'
import "./services.css"
import DevicesIcon from '@mui/icons-material/Devices';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import ApiIcon from '@mui/icons-material/Api';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
        x: -200,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            staggerChildren: 0.3
        }
    },

}


const Services = () => {

    const [hasViewed, setHasViewed] = useState(false);

    function handleAnimation() {
        setHasViewed(true);
    }

    return (
        <motion.section id='Services' className="services"
            variants={variants}
            initial={hasViewed ? { opacity: 1, x: 0 } : 'initial'}
            animate={hasViewed ? 'animate' : 'initial'}
            whileInView={'animate'}
            onAnimationComplete={handleAnimation}
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className='services-wrapper'>

                <div className="text-container">
                    <p>Delivering web solutions that drive <br />your brand’s growth and success.</p>
                    <hr />
                </div>
                <div className="wrapper" >
                    <div className="title-container">

                        <div className="title">
                            <hr />
                            <h1>Professional</h1>
                        </div>
                        <div className="title">
                            <h1>Services</h1>
                            <hr />
                        </div>

                    </div>
                    <div className="grid-container" >
                        <motion.div className="grid-item" >
                            <DeveloperBoardIcon style={{ fontSize: "40px" }} />
                            <h2>Full-Stack Web Development</h2>
                            <p>From front-end design to back-end functionality, I build dynamic, high-performing web applications using React, Node.js, Express, and PostgreSQL. My solutions ensure a seamless user experience, with an emphasis on scalability, performance, and secure data handling, perfect for startups or businesses looking to grow online.</p>
                        </motion.div>
                        <motion.div className="grid-item" >
                            <ApiIcon style={{ fontSize: "40px" }} />
                            <h2>API Development & Integration</h2>
                            <p>I specialize in developing and integrating APIs to ensure your web application connects seamlessly with external services, including payment gateways, social media platforms, and data analytics tools. My goal is to improve the functionality of your application while maintaining efficiency and security.</p>
                        </motion.div>
                        <motion.div className="grid-item" >
                            <StorageIcon style={{ fontSize: "40px" }} />
                            <h2>Database Management</h2>
                            <p>I design, implement, and manage databases that are secure, scalable, and optimized for performance. Using PostgreSQL and MongoDB, I ensure your data is structured and accessible, allowing your business to make data-driven decisions with confidence.</p>
                        </motion.div>
                        <motion.div className="grid-item" >
                            <DevicesIcon style={{ fontSize: "40px" }} />
                            <h2>Responsive Front-End Design</h2>
                            <p>I create responsive, visually engaging web designs that look stunning on any device. From desktops to mobile phones, I ensure your website is optimized for usability and performance, providing a smooth and consistent experience for every user.here.</p>
                        </motion.div>
                        <motion.div className="grid-item" >
                            <TerminalIcon style={{ fontSize: "40px" }} />
                            <h2>Back-End Development</h2>
                            <p>With expertise in building robust server-side applications, I manage everything from business logic and databases to user authentication. Using Node.js and Express, I create scalable and secure back-end systems that form the core infrastructure for your web apps.</p>
                        </motion.div>
                        <motion.div className="grid-item" >
                            <DashboardCustomizeIcon style={{ fontSize: "40px" }} />

                            <h2>Custom Web Solutions</h2>
                            <p>Whether you're launching an e-commerce platform, building a booking system, or developing a portfolio site, I provide custom web development solutions tailored to your unique needs. I ensure your web application meets business goals with precision and reliability.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Services