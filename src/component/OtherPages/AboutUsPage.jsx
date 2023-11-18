import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AboutImage from '../../assets/about-img.jpg'
import AboutVision from '../../assets/law.jpg'

import './AboutUs.css';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
    return (
        <div className='main-conatiner'>
            <div className='nav-container'>
                <Navbar />
            </div>
            <div className='about-container'>
                <div className='about-container1'>
                    <div className='desc-text'>
                        <h1>Who Are We</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Eget felis eget nunc lobortis mattis. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Leo integer malesuada nunc vel
                            risus commodo. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Nibh mauris cursus mattis molestie. Libero
                            justo laoreet sit amet cursus sit amet dictum sit. Feugiat scelerisque varius morbi enim nunc faucibus. Cras semper auctor neque
                            vitae. Et leo duis ut diam quam nulla porttitor massa. Dolor sit amet consectetur adipiscing. Sagittis aliquam malesuada bibendum
                            arcu vitae elementum curabitur vitae. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Eget felis eget
                            nunc lobortis mattis. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Ut tortor pretium viverra
                            suspendisse.</p>
                        <Link to='/contact'>
                            <button class="btn btn-primary btn-about">Contact Us</button>
                        </Link>
                    </div>
                    <img src={AboutImage} alt='about-us' />
                </div>
                <div className='about-container2'>
                    <img src={AboutVision} alt='about-us' />
                    <div className='desc-text2'>
                        <h1>Our Vision</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Eget felis eget nunc lobortis mattis. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Leo integer malesuada nunc vel
                            risus commodo. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Nibh mauris cursus mattis molestie. Libero
                            justo laoreet sit amet cursus sit amet dictum sit. Feugiat scelerisque varius morbi enim nunc faucibus. Cras semper auctor neque
                            vitae. Et leo duis ut diam quam nulla porttitor massa. Dolor sit amet consectetur adipiscing. Sagittis aliquam malesuada bibendum
                            arcu vitae elementum curabitur vitae. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Eget felis eget
                            nunc lobortis mattis. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Ut tortor pretium viverra
                            suspendisse.</p>
                    </div>
                </div>
            </div>
            <div classNameName='footer-container'>
                <Footer />
            </div>
        </div>
    )
}

export default AboutUsPage
