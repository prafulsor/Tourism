import React from 'react'
import '../headers/header.css'
const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <h1><span>T</span>ravel</h1>
                <p> “A journey of a thousand miles begins with one single step.”</p>
                <div className="social-links">
                    <a href="https://twitter.com" target='_blank'><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://youtube.com" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                    <a href="https://pinterest.com" target="_blank"><i className="fa-brands fa-pinterest-p"></i></a>
                </div>

                <div className="credite">
                    <p>Designed By <a href="https://cdac.in" target="_blank">CDAC</a></p>
                    <p>Contact us: +91 9898989898</p>
                </div>
                <div className="copyyright">
                    <p><i className="fa-regular fa-copyright"></i> Copyright CDAC Coding.All Rights Reserved</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer