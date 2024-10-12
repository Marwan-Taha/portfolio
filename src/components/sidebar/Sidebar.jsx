import React from "react";
import "./sidebar.css"
import logoImage from "../../assets/images/logo.png";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
const IconWrapper = styled.div`
  display: inline-flex;
  font-size: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.hoverColor}; // Dynamic hover color
  }
`;


export default function () {

    function handleLogoClick() {
        window.scrollTo({top: 0, behavior: "smooth"})
    }


    return (
        <section className="sidebar-section">
            <div className="sidebar-container">
                <div className="sidebar-main">
                    <Link onClick={handleLogoClick} to="/"><img className="logo-img" src={logoImage} alt="logo image" /></Link>
                    <div className="links">
                        
                        <Link className="sidebar_link" to="/#About">About</Link>
                        <Link className="sidebar_link" to="/#Services">Services</Link>
                        <Link className="sidebar_link" to="/#Projects">Projects</Link>
                        {/* <Link className="sidebar_link" to="/#Education">Education</Link> */}
                        <Link className="sidebar_link" to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="sidebar-contacts">
                    <IconWrapper className="platform-link" hoverColor="#333">
                        <FaGithub />
                    </IconWrapper>

                    {/* LinkedIn Icon */}
                    <IconWrapper className="platform-link" hoverColor="#0056b3">
                        <FaLinkedin />
                    </IconWrapper>

                    {/* Instagram Icon */}
                    <IconWrapper className="platform-link" hoverColor="#f58529">
                        <FaInstagram />
                    </IconWrapper>

                    {/* Telegram Icon */}
                    <IconWrapper className="platform-link" hoverColor="#006699">
                        <FaTelegram />
                    </IconWrapper>
                </div>
            </div>
        </section>
    );
}
