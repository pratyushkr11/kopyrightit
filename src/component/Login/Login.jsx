import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';
import img from '../../assets/signin-img.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';


import { useDispatch } from 'react-redux'; // Import Redux useDispatch
import { login } from '../../Redux/authAction';

import { auth, provider } from './config'
import { signInWithPopup } from 'firebase/auth';

import './Login.css';
import GoogleLogin from './GoogleLogin';

// const LOGIN_URL = '/auth';

const Login = ({ setUserId }) => {
  // const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [email, setMail] = useState('');
  const [password, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const dispatch = useDispatch(); // Initialize useDispatch

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  // const navigate=useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    axios.post('https://kopyrightit-backend-zdfw.onrender.com/login', { email, password })
      .then(result => {
        if (result.data) {
          const userId = result.data;
          // Dispatch an action to store the user ID in Redux
          dispatch({ type: 'SET_USER_ID', payload: userId });

          localStorage.setItem('userId', userId.data);

          // Store user authentication data in local storage
          localStorage.setItem('user', JSON.stringify({ isAuthenticated: true }));
          // Redirect to the homepage
          navigate('/homepage');

        } else {
          console.log('Login failed');
        }
      })
      .catch(err => {
        if (!err?.response) {
          setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
          setErrMsg('Missing Username or Password');
        } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
        } else if (err.response?.status === 402) {
          setErrMsg('Please verify your Email');
        } else {
          setErrMsg('Login Failed');
        }
        errRef.current.focus();
      });
  };

  const forgetPass = () => {

  }




  return (
    <div className="app__container">
      <div className='header-menu'>
        <img className="logo-img" src={logo} alt="app-logo" />
        <Link to="/register">
          <button type="button" className="btn btn-toRegister">Sign Up</button>
        </Link>
      </div>
      <div className='signin-container'>
        <div className='app-container'>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h1 className='header-txt'>Welcome to IPgyan</h1>
          <p className='header2-txt'>Hi, we are glad you are back. Please login.</p>

          <form>
            <div className='form__fields1'>
              <div className='fields1'>
                <label htmlFor="mail">Email ID : </label>
                <input
                  type="mail"
                  id="mail"
                  className="form-input"
                  placeholder="Enter your email"
                  value={email}
                  ref={userRef}
                  required
                  autoComplete="off"
                  onChange={(e) => setMail(e.target.value)}
                ></input>
              </div>
              <div className='fields1'>
                <label htmlFor="Password">Password : </label>
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  placeholder="Your Password"
                  value={password}
                  required
                  onChange={(e) => setPwd(e.target.value)}
                ></input>
              </div>
              <div className='forgot'>
                <Link to='/password-reset' onClick={forgetPass} style={{ color: 'blue' }}>Forgot your Password?</Link>
              </div>
            </div>
            <div className='signin-btn'>
              <button onClick={handleLogin} className="btn btn-lg">Sign In</button>
            </div>
          </form>
          <p className='register'>Don't have an account?
            <Link to="/register" style={{ color: 'blue' }}><u>Register Here</u></Link></p>
          <div className="lines">
            <hr />
            <p className="or">OR</p>
            <hr />
          </div>
          <div className='social-btn'>

            <GoogleLogin />
          </div>
        </div>
        <div className='app_box'>
          <img className='app_img' src={img} alt='legal-img' />
          <h2 className='page-txt'>One Stop For All Your Legal Needs</h2>
          <p className='app-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  );
};

// export default connect(null, { setUserId })(Login);
export default Login
