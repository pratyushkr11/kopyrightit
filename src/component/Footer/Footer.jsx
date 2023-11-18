import logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="foot-container">
                <div className="row" style={{ width: '1200px' }}>
                    <div className="col-md-4">
                        <img className="footer__logo" src={logo} alt="logo-img" />
                        <div className="socials">
                            <i className="fa-solid fa-2x fa-envelope fa-light"></i>
                            <i className="fa-brands fa-2x fa-linkedin"></i>
                            <i className="fa-brands fa-2x fa-twitter"></i>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2 className="link-head">Links</h2>
                        <ul>
                            <li><a className="footer-link" href="/">Home</a></li>
                            <li><a className="footer-link" href="/about-us">About Us</a></li>
                            <li><a className="footer-link" href="/contact">Contact Us</a></li>
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
