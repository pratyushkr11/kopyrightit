import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import success from '../../assets/success.jpg';
import ErrorPage from '../ErrorPage';

import './EmailVerify.css';

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');
  const token = searchParams.get('token');


  useEffect(() => {
    const name = "hello"; // Make sure this matches your backend expectation
    console.log(email)
    axios.post('https://kopyrightit-backend-zdfw.onrender.com/api/verify', { email, token, name })
      .then(result => {
        if (result.data.message === 'Reset URL is valid') {
          setValidUrl(true);
        } else {
          setValidUrl(false);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, [token]);

  return (
    <div>
      {validUrl ? (
        <div className='container'>
          <img src={success} alt="success_img" className='success_img' />
          <h1>Email verified successfully</h1>
          <Link to="/">
            <button className='green_btn'>Login</button>
          </Link>
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default EmailVerify;
