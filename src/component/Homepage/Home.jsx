import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ReactSlider from '../Slider/ReactSlider';

import mainImage from '../../assets/main-img.png';

import './Home.css';

const Home = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const slides = [
        { title: "Literary Work", description: "Get Started", value: 'literarywork' },
        { title: "Artistic Work", description: "Get Started", value: 'artisticwork' },
        { title: "Musical Work", description: "Get Started", value: 'musicalwork' },
        { title: "Sound Recording", description: "Get Started", value: 'soundrecording' },
        { title: "Videography Work", description: "Get Started", value: 'videography' },
        { title: "Computer Program", description: "Get Started", value: 'computerprogram' },
    ];

    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
    
        if (!userId) {
          navigate('/'); 
        }
        window.scrollTo(0, 0);
      }, []);

    // useEffect(() => {
        
    // }, []);

    const handleOptionClick = (value) => {
        setSelectedValue(value);
    };

    

    return (
        <div className='app__home'>
            <Navbar />
            <div className='hero__section'>
                <div>
                    <h2 className='main-txt'>One Stop For All Your Legal Needs</h2>
                    <button className='btn-home'>Learn More</button>
                </div>
                <img className='head-img' src={mainImage} alt='copyright-img' />
            </div>
            <div className='head__container mx-auto'>
                <h2 className='section__heading '><u>What You Want To Copyright</u></h2>
                <div>
                    <ReactSlider slides={slides} onOptionClick={handleOptionClick} navigate={navigate} />
                </div>
            </div>
            <div className='app__footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
