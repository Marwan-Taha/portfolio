import React from "react";
import ImageCard from "./ImageCard";

import ApiIcon from '@mui/icons-material/Api';
import {animate, motion} from "framer-motion";


const variants = {
    initial: {x: -1000, opacity: 0},
    animate: {x: 0, opacity: 1},
    transition: {duration: 2,  delay: 0.5,}
}


export default function (props) {
    return (
        <motion.div variants={variants} initial="initial" whileInView="animate" className="project-wrapper">
            <motion.div variants={variants} className="project-content">
                <h2 variants={variants}>{props.title}
                </h2>
                <p variants={variants} className="project-p">{props.description}</p>
                <div variants={variants} style={{ fontSize: "2.5rem", display: "flex", gap: "12px", alignItems: "center" }}>{props.icons}</div>
            </motion.div>
            <ImageCard variants={variants} images={props.images} title={props.cardTitle} link={props.projectLink} />
        </motion.div>
    )
}