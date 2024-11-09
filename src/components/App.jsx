import React, { useEffect, useState } from "react";
import Hero from "./hero/Hero";
import Sidebar from "./sidebar/Sidebar";
import LoadingScreen from "./LoadingScreen";
import Contact from "./contact/Contact";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import About from "./about/About";
import { motion } from "framer-motion";
import Services from "./services/Services";
import Works from "./Works/Works";
import Footer from "./footer/Footer"



function ScrollToSection() {
    const { hash } = useLocation(); // Move useLocation inside BrowserRouter context

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1)); // Remove the "#" and get the element by ID
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash]);

    return null; // This component only handles the scrolling logic
}

export default function () {

    const [loading, setLoading] = useState(true);

    const [fadeOut, setFadeOut] = useState(false); // State for handling the fade out

    const [fadeIn, setFadeIn] = useState(false);    

    useEffect(() => {

        // Set a timeout to start the fade-out animation before removing the loading screen
        const timer = setTimeout(() => {
            setFadeOut(true); // Trigger fade-out effect
        }, 4000); // Adjust timing to allow for fade-out before switching components

        // Set a second timeout to stop loading completely
        const removeLoader = setTimeout(() => {
            setLoading(false);
            setFadeIn(true)
        }, 6000); // Make sure this time matches the fade-out animation duration

        // Cleanup timers
        return () => {
            clearTimeout(timer);
            clearTimeout(removeLoader);
        };
    }, []);

    return (
        <div>
            {loading ? (<LoadingScreen fadeOut={fadeOut} />) :
                (<motion.div
                    initial={{ opacity: 0 }} // Start with opacity 0
                    animate={{ opacity: fadeIn ? 1 : 0 }} // Animate to full opacity
                    transition={{ duration: 1.5 }} // Control the fade-in duration
                >
                    <BrowserRouter>
                        <Sidebar />
                        <ScrollToSection />
                        <Routes>
                            <Route path="/" 
                            element={
                                <div><Hero /> <About /> <Services /> <Works /> <Footer /></div>
                                } 
                            />
                            <Route path="/contact" element={<div><Contact /> <Footer /></div>} />
                        </Routes>
                    </BrowserRouter>
                </motion.div>

                )
            }

        </div>
    );
}