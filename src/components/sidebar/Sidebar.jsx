import React, { useState, useEffect } from "react";
import "./sidebar.css"
import logoImage from "../../assets/images/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll } from "framer-motion";






export default function () {

    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    function handleLogoClick() {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }


    function handleMenuClick() {
        setMenuOpen(!menuOpen);
    }


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Change threshold as needed
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <section className="sidebar-section">
            <motion.div
                style={{
                    background: isScrolled
                        ? "#32363b52"
                        : "transparent",
                    width: isScrolled ? "60%" : "",
                }}
                animate={{ width: isScrolled ? "60%" : "" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="sidebar-container">

                <Link onClick={handleLogoClick} to="/" className="logo-container"><img className="logo-img" src={logoImage} alt="logo image" /></Link>

                <button onClick={handleMenuClick} className="hamburger" >
                    <MenuIcon className=".MuiIcon-fontSizeLarge"/>
                </button>

                <AnimatePresence>

                <motion.div
                 className={menuOpen? 'links-container opened' : 'links-container'}>
                    <div className={`links ${menuOpen? 'opened': ''}`}>

                        <Link className="sidebar_link" to="/#About">About</Link>
                        <Link className="sidebar_link" to="/#Services">Services</Link>
                        <Link className="sidebar_link" to="/#Projects">Projects</Link>
                        
                        <Link className="sidebar_link" to="/contact">Contact</Link>
                    </div>
                    
                </motion.div>
                </AnimatePresence>



            </motion.div>
        </section>
    );
}
