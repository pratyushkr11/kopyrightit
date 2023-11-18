import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
// import axios from '../../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logo2.png';
import ErrorPage from '../ErrorPage';
import axios from 'axios';

const ForgotPassword = () => {
  const [validUrl, setValidUrl] = useState(false);
  const [message, setMessage] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  //   const { token, email } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  useEffect(() => {

    // Convert email and token to strings
    const name = "hello"; // Make sure this matches your backend expectation
    const email1 = email; // No need to convert
    const token1 = token; // No need to convert

    axios.post('http://localhost:3001/api/verify-reset-url', { token: token1 })
      .then(result => {
        if (result.data.message === 'Reset URL is valid') {
          // The URL is valid
          setValidUrl(true);
        } else {
          // Invalid or expired token
          setValidUrl(false);
        }
      })
      .catch(err => {
        console.error(err);
        // Handle errors here
      });
  }, [token]);


  const resetPassword = async (e) => {
    e.preventDefault();

    if (newPassword === '' || confirmPassword === '') {
      toast.error('Both new and confirm password are required!', {
        position: 'top-center',
      });
    } else if (newPassword !== confirmPassword) {
      toast.error('New and confirm password must match!', {
        position: 'top-center',
      });
    } else {
      // Send a request to change the password
      try {
        const url = 'http://localhost:3001/api/change-password';
        const response = await axios.post(url, { email, newPassword });
        if (response.status === 200) {
          setMessage('Your password has been reset successfully');

        } else {
          toast.error('Password reset failed', {
            position: 'top-center',
          });
        }
      } catch (error) {
        console.error(error);
        toast.error('Password reset failed', {
          position: 'top-center',
        });
      }
    }
  };


  return (
    <>
      {validUrl ? (
        <section>
          <div className="header-menu">
            <img className="logo-img" src={logo} alt="app-logo" />
            <Link to="/">
              <button type="button" className="btn btn-toRegister">
                Login
              </button>
            </Link>
          </div>
          <div className="form_data">
            <div className="form_heading">
              <h1>Change Your Password</h1>
            </div>

            {message ? (
              <p style={{ color: 'green', fontWeight: 'bold' }}>{message}</p>
            ) : (
              <form onSubmit={resetPassword}>
                <div className="form_input">
                  <label htmlFor="password">New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    name="password"
                    id="password"
                    placeholder="Enter Your New Password"
                  />
                </div>
                <div className="form_input">
                  <label htmlFor="cnfPassword">Confirm New Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    name="cnfPassword"
                    id="cnfPassword"
                    placeholder="Confirm Your Password"
                  />
                </div>

                <button className="btn btn-send">Send</button>
              </form>
            )}
            <ToastContainer />
          </div>
        </section>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default ForgotPassword;
