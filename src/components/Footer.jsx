import React from 'react'
import { MapPin,Phone, Clock, Mail, Youtube, Github, Linkedin, Facebook , Slack } from 'lucide-react';
import '../Styles/Footer.scss'

function Footer() {
  return (
    <div>
        <div className="heading">
            <div className="heading-item">
                <div className="icon">
                    <MapPin className='map' />
                </div>
                <div className="text">
                    <h3>visit us</h3>
                    <p>New Orlean, USA</p>
                </div>
            </div>
            <div className="heading-item">
                <div className="icon">
                    <Phone />
                </div>
                <div className="text">
                    <h3>Call Us</h3>
                    <p>+12 958 648 597</p>
                </div>
            </div>
            <div className="heading-item">
                <div className="icon">
                    <Clock />
                </div>
                <div className="text">
                    <h3>Working Hours</h3>
                    <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
                </div>
            </div>
            <div className="heading-item">
                <div className="icon">
                    <Mail />
                </div>
                <div className="text">
                    <h3>Email Us</h3>
                    <p>tulos@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="middle-footer">
            <div className="tulos-discover">
                <a href="#">tulos</a>
                <p>Discover curated furniture collections at Tulos, blending style and comfort to elevate your living spaces.</p>
                <div className="social-media">
                    <span>
                        <Youtube />
                    </span>
                    <span>
                        <Github />
                    </span>
                    <span>
                         <Linkedin />
                    </span>
                    <span>
                        <Facebook />
                    </span>
                    <span>
                        <Slack />
                    </span>
                </div>
            </div>
            <div className="links">
                <h3>quicks links</h3>
                <ul>
                    <li>
                        <a href="#">
                            About us
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Contact us
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Terms & Conditions
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            FAQs
                        </a>
                    </li>
                </ul>
            </div>
            <div className="category">
                <h3>categories</h3>
                <ul>
                    <li>
                        <a href="#">
                            Men's Fashion
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Women's Fashion
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Kids corner
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Tshirt
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Accessories
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Household
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Others
                        </a>
                    </li>
                </ul>
            </div>
            <div className="newsletter">
                <h3>newsletter</h3>
                <p>Subscribe to our newsletter to receive updates and exclusive offers.</p>
                <form action="#">
                    <input type="text" placeholder='Enter Your email' />
                    <button type='submit'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className="copyright">
            <p>© 2025  Tulos. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer