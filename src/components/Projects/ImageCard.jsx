import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import "./imageCard.css"


const IconWrapper = styled.div`
  display: inline-flex;
  font-size: 30px;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.hoverColor}; // Dynamic hover color
  }
`;

export default function (props) {

    const [imageIndex, setImageIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setImageIndex(
                prevIndex => prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000)

        return () => clearInterval(interval);

    }, [props.images.length]);


    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? "100%" : "-100%", // Start from right or left
            opacity: 1,
            position: "absolute", // Make images overlay to remove gaps
        }),
        center: {
            x: "-50%", // Center the image
            opacity: 1,
            position: "absolute",
        },
        exit: (direction) => ({
            x: direction < 0 ? "-100%" : "-40%", // Exit to left or right
            opacity: 1,
            position: "absolute",
        }),
    };

    return (
        <div className="card-container">
            <div className="image-wrapper">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        className="project-img"
                        key={imageIndex} // Track the key to trigger re-render on image change
                        custom={direction} // Pass the slide direction
                        variants={variants}
                        initial="enter" // Initial animation state
                        animate="center" // Final animation state
                        exit="exit" // Exit animation state
                        transition={{ type: "keyframes", duration: 0.5 }} // Smooth sliding animation
                        src={props.images[imageIndex]}
                        alt={`Slide ${imageIndex + 1}`}
                        style={{ width: "100%", height: "100%", objectFit: "fill" }}
                    />
                </AnimatePresence>
            </div>
            <div className="card-content">
                <div className="card-info">
                    <p className="bold bigger">Flight Tracker</p>
                    <p>Tech used: NodeJs, Express, RESTful APIs</p>
                </div>
                <Link target="_blank" to={props.link}>
                    <IconWrapper className="platform-link" hoverColor="#333">
                        <FaGithub />
                    </IconWrapper>
                </Link>

            </div>
        </div>
    )
}