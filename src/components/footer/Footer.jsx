import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../../assets/images/logo.png"
import "./footer.css";
import styled from "styled-components";
const IconWrapper = styled.div`
  display: inline-flex;
  font-size: 20px;
  transition: color 0.3s ease;
`;
export default function Footer () {
    return (

        <section className='footer'>
            <div className='footer-container'>
                
                    <img className='image' src={logoImage} alt="logo" />
                
                <p> 	&copy; {new Date().getFullYear()} Marwan Abdelsamad. All rights reserved</p>
                <div className="sidebar-contacts">
                    <IconWrapper className="platform-link" >
                        <Link target="_blank" to="https://github.com/Marwan-Taha">
                            <FaGithub />
                        </Link>
                    </IconWrapper>

                    <IconWrapper className="platform-link" >
                        <Link target="_blank" to="https://www.linkedin.com/in/marwanabdelsamad/">
                            <FaLinkedin />
                        </Link>
                    </IconWrapper>

                    <IconWrapper className="platform-link" >
                        <Link target="_blank" to="https://www.instagram.com/marwan.tahaa/">
                            <FaInstagram />
                        </Link>
                    </IconWrapper>


                    <IconWrapper className="platform-link">
                        <Link target="_blank" to="https://t.me/itsmervie">
                            <FaTelegram />
                        </Link>
                    </IconWrapper>
                </div>
            </div>
        </section>

    )
}
