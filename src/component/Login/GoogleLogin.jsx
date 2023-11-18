import React from 'react'
import { auth, provider } from './config'
import { signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import GoogleButton from 'react-google-button';



import { useDispatch } from 'react-redux'; // Import Redux useDispatch


const GoogleLogin = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch

  const googleLogin = async (userEmail, userUid, userName) => {
    const password = userUid
    const email = userEmail
    const name = userName
    axios.post('https://kopyrightit-backend-zdfw.onrender.comgoogle-login', { name, email, password, })
      .then(result => {
        if (result.data) {
          const userId = result.data;
          // Dispatch an action to store the user ID in Redux
          dispatch({ type: 'SET_USER_ID', payload: userId });

          // console.log(userId)
          localStorage.setItem('userId', userId.data);

          // Store user authentication data in local storage
          localStorage.setItem('user', JSON.stringify({ isAuthenticated: true }));
          // Redirect to the homepage
          navigate('/homepage');
        } else {
          // console.log('Login failed');
        }
      })
      .catch(err => console.log(err));
  }

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const user = data.user;
        const userEmail = user.email;
        const userUid = user.uid;
        const userName = user.displayName; // Fetch the user's name

        // Call the `googleLogin` function here or wherever needed
        googleLogin(userEmail, userUid, userName);
      })
      .catch((error) => {
        // Handle any errors that occur during sign-in
        console.error("Sign-in Error:", error);
      });
  };
  return (
    <div className="social-btn">
      <GoogleButton onClick={handleClick}><GoogleLogin /></GoogleButton>
    </div>
  )
}

export default GoogleLogin