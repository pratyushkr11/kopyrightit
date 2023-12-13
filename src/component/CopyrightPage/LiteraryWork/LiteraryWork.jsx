import { useEffect, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import LiteraryImg from '../../../assets/literary.png';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import './LiteraryWork.css';

const LiteraryWork = (props) => {
  const { data, tab, setData, setTab } = props;


  const handleChange = (e) => {
    if (e?.label) {
      setSelectedOption(e);
      setData({
        ...data,
        form1: {
          ...data.form1,
          option: e.value
        }
      });
    } else {
      setData({
        ...data,
        form1: {
          ...data.form1,
          [e.target.id]: e.target.value
        }
      });
    }
  }

  const handleNext = (e) => {
    e.preventDefault();
    setTab(tab + 1);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Define a dynamic text
  const dynamicTextMapping = {
    '/form/literarywork': 'Copyright of Literary Work',
    '/form/musicalwork': 'Copyright of Musical Work',
    '/form/artisticwork': 'Copyright of Artistic Work',
    '/form/videography': 'Copyright of Videography Work',
    '/form/soundrecording': 'Copyright of Sound Recording',
    '/form/computerprogram': 'Copyright of Computer Program',

  };

  const currentPath = window.location.pathname;

  // Determine the dynamic text 
  const dynamicText = dynamicTextMapping[currentPath] || 'Unknown Work';

  const getOptionsForPath = (work) => {
    switch (work) {
      case 'Copyright of Literary Work':
        return ['Select an Option', 'Article', 'Story / Novel (Fiction)', 'Story / Novel (Non-Fiction)', 'Research Paper', 'Poetry', 'Lyrics', 'Script', 'Other Literary Work'];
      case 'Copyright of Musical Work':
        return ['Select an Option', 'Staff Notation', 'Chord Chart', 'Sargam', 'Other Musical Work'];
      case 'Copyright of Artistic Work':
        return ['Select an Option', 'Paintings', 'Cover Art', 'Poster', 'Photographs', 'Photo Collage', 'Infographic Material', 'Other Artistic Work'];
      case 'Copyright of Videography Work':
        return ['Select an Option', 'Music Video', 'Feature Film', 'Web Series', 'Reels', 'Short Videos', 'Advertisements', 'Other Videography work'];
      case 'Copyright of Sound Recording':
        return ['Select an Option', 'Song', 'Instrumental Track', 'Conversation / Dialogue', 'Audiobooks', 'Voice', 'Other Sound Recording'];
      case 'Copyright of Computer Program':
        return ['Select an Option', 'Source Code', 'Software UI/UX', 'Software Manual'];
      default:
        return ['Select an Option'];
    }
  };

  const options = getOptionsForPath(dynamicText);

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const stateList = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];




  return (
    <>
      <div className='main__container'>
        <Navbar />
        <div className='hero-section'>
          <h1>{dynamicText}</h1>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.</p>
          <img src={LiteraryImg} alt='literary-img' />
        </div>
        <div className='form-container'>
          <div className='form-head text-center'>
            <h2><u>What type of copyright are you registering?</u></h2>
          </div>
          <form>
            <div style={{ paddingBottom: '100px', width: '60%', margin: 'auto' }}>
              <Dropdown id='option' options={options} onChange={handleChange} value={selectedOption} placeholder="Select an option" />
            </div>
            <div className='name-fields'>
              <div className='form-fields'>

                <label htmlFor='name'><b>First Name: </b></label>
                <input
                  placeholder="Enter Your First Name"
                  type="text"
                  id='name'
                  autoComplete="off"
                  required
                  value={data.form1.name}
                  onChange={handleChange}
                ></input>
              </div>
              <div className='form-fields'>
                <label htmlFor='name'><b>Middle Name: </b></label>
                <input
                  className='middle'
                  placeholder="Enter Your Middle Name"
                  type="text"
                  id='name1'
                  autoComplete="off"
                  value={data.form1.name1}
                  onChange={handleChange}
                ></input>
              </div>
              <div className='form-fields'>
                <label htmlFor='name'><b>Last Name: </b></label>
                <input
                  placeholder="Enter Your Last Name"
                  type="text"
                  id='name2'
                  autoComplete="off"
                  required
                  value={data.form1.name2}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className='form-fields'>
              <label htmlFor='mail'><b>Email ID: </b></label>
              <input
                placeholder="Enter Your email"
                type="email"
                id='mail'
                autoComplete="off"
                required
                value={data.form1.mail}
                onChange={handleChange}
              ></input>
            </div>
            <div className='form-fields'>
              <label htmlFor='mobilenumber'><b>Mobile Number: </b></label>
              <input
                placeholder="+91-XXXXX-XXXXX"
                type="mobilenumber"
                id='mobile'
                autoComplete="off"
                required
                value={data.form1.mobile}
                onChange={handleChange}
              ></input>
            </div>
            <div className='form-fields'>
              <label htmlFor='address'><b>Street Address: </b></label>
              <input
                placeholder="Enter Your Address"
                type="text"
                id='address'
                autoComplete="off"
                required
                value={data.form1.address}
                onChange={handleChange}
              ></input>
            </div>
            <div className="drop_container">
              <div className="drop__fields">
                <label htmlFor='country'><b>Country: </b></label>
                <div>
                  <input
                    placeholder="Enter the country"
                    type="text"
                    id='country'
                    autoComplete="off"
                    required
                    value="India"
                    onChange={handleChange}
                    disabled
                  ></input>
                </div>
                <label htmlFor='state'><b>State: </b></label>
                <div>
                  <select
                    id='state'
                    style={{ width: '200px' }}
                    required
                    value={data.form1.state}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select a state</option>
                    {stateList.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="drop__fields2">
                <label htmlFor='city'><b>City: </b></label>
                <div>
                  <input
                    className='city'
                    placeholder="Enter the city"
                    type="text"
                    id='city'
                    autoComplete="off"
                    required
                    value={data.form1.city}
                    onChange={handleChange}
                  ></input>
                </div>
                <label htmlFor='zipcode'><b>ZIP: </b></label>
                <div>
                  <input
                    placeholder="Enter Your ZIP"
                    type="code"
                    id='zip'
                    autoComplete="off"
                    required
                    value={data.form1.zip}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>
            <div className='action-btn nav-btn'>
              <Link to='/homepage' style={{ color: 'blue', fontSize: '25px', fontWeight: '400' }}>
                <ArrowLeftIcon style={{ fontSize: '40' }} />
                Back</Link>
              <button className='btn' style={{ color: 'blue', fontSize: '25px', fontWeight: '400' }} onClick={handleNext}>
                Next
                <ArrowRightIcon style={{ fontSize: '40' }} />
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default LiteraryWork;
