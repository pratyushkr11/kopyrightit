import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="foot-container">
                <div className="row" style={{ width: '1250px' }}>
                    <div className="col-md-4">
                        <img className="footer__logo" src={logo} alt="logo-img" />
                        <div className="socials">
                            <i className="fa-solid fa-2x fa-envelope fa-light"></i>
                            <i className="fa-brands fa-2x fa-linkedin"></i>
                            <i className="fa-brands fa-2x fa-twitter"></i>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2 className="link-head" style={{ width: '120px' }}>Links</h2>
                        <ul>
                            <li><Link to='/homepage' className="footer-link">Home</Link></li>
                            <li><Link to='/faq' className="footer-link">FAQ</Link></li>
                            <li><Link to='/about-us' className="footer-link">About Us</Link></li>
                            <li><Link to='/contact' className="footer-link">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h2 className="link-head">Contact Us</h2>
                        <ul>
                            <li className="footer-info">Phone Number : +91-99999-99999</li>
                            <li className="footer-info">Address : Kolkata, West Bengal - 700314</li>
                            <li className="footer-info">Email Id : contact@ipgyan.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
