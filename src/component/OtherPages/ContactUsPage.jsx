import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

import contactImage from '../../assets/Contact-us.png'
import './ContactUsPage.css';

const ContactUsPage = () => {
    return (
        <div className='app-main-conatiner'>
            <div className='nav-container'>
                <Navbar />
            </div>
            <div className='contact-container'>
                <div className='contact-header'>
                    <div>
                        <h2><u>Have Any Query? Contact Us</u></h2>
                        <p>
                            Have questions? Want to connect with us? We are here to help.
                            <br />Choose the method that works best for you. <br /> We look forward to hearing from you.
                        </p>
                    </div>
                    <img src={contactImage} alt='conatct-img' />
                </div>
                <section className="app__form-sec">
                    <div className="app__form-container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="cnt-frm">
                                    <h4>Leave us a message!</h4>
                                    <form id="contctForm" className="default-form">
                                        <div className="row">
                                            <div className="col-md-6"><input type="text" name="first_name" placeholder="First Name" data-type="text" data-required="yes" value="" /></div>
                                            <div className="col-md-6"><input type="text" name="last_name" placeholder="Last Name" data-type="text" data-required="yes" /></div>
                                            <div className="col-md-12"><input type="email" name="email" placeholder="Email Address" data-type="email" data-required="yes" /></div>
                                            <div className="col-md-12"><input type="text" name="phone" placeholder="Your 10-digit mobile number*" data-type="phone" data-required="yes" /></div>
                                            <div className="col-md-12"><textarea placeholder="Your message" name="message" value=""></textarea></div>
                                            <div className="col-md-12"><input className="theme-btn btn-style-one" type="button" value="Send" /></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cnt-inf">
                                    <h4>Other ways to reach us:</h4>
                                    <div className="row">
                                        <div className="col-md-7">

                                            <p className="content">To reach us through mail: </p>
                                            <p className="label"> Our mail Id:</p>
                                            <p className="content">contact@ipgyan.com</p>
                                            <p className="label"> Working Hours</p>
                                            <p className="content"> Mon to Fri <br />9.30am to 6.30pm </p>

                                        </div>
                                        <div className="col-md-5">
                                            <div className="phone">
                                                <p className="content"> You can call us at: </p>
                                                <p className="ph"> +91-99999-99999 </p>
                                                <p className="label">Office Address</p>
                                                <p className="content"> Kolkata, West Bengal - 700314 </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            <div className='footer-container'>
                <Footer />
            </div>
        </div>
    )
}

export default ContactUsPage
