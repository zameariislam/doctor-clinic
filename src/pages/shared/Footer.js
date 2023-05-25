import React from 'react';
import { Link } from 'react-router-dom';
import footerImage from '../../assets/images/footer.png'

const Footer = () => {
    return <footer style={{
        background: `url(${footerImage})`,
        backgroundSize: "contain"
    }} className="p-10 ">
        <div className='footer'>

            <div>
                <span className="footer-title">SERVICES</span>
                <Link to={'/'} Link className="link link-hover">Emergency Checkup</Link >
                <Link to={'/'} Link className="link link-hover">Monthly</Link >

                <Link to={'/'} className="link link-hover">Weekly Checkup</Link>
                <Link to={'/'} className="link link-hover">Deep Checkup</Link>
            </div>
            <div>
                <span className="footer-title">ORAL HEALTH</span>
                <Link to={'/'} className="link link-hover">Fluoride Treatment</Link>
                <Link to={'/'} className="link link-hover">Cavity Filling</Link>
                <Link to={'/'} className="link link-hover">Teath Whitening</Link>

            </div>
            <div>
                <span className="footer-title">OUR ADDRESS</span>
                <span >New York - 101010 Hudson</span>

            </div>
        </div>
        <div className='footer footer-center mt-32'>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </div>


    </footer>
};

export default Footer;