import { useState } from 'react';
import SideAppbar from '../Dashboard/SideAppbar';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'react-toastify/dist/ReactToastify.css';

import './Help.css';

const Help = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    issue: '',
  });

  const options = [
    'Issue-1', 'Issue-2', 'Issue-3'
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to your server for email processing
    axios.post('http://localhost:3001/api/sendEmail', formData)
      .then((response) => {
        // Handle success (e.g., show a success message)
        console.log('Email sent successfully:', response.data);
        toast.success('Request Submitted', {
          position: "top-right",
          autoClose: 3000, // Adjust the duration (in milliseconds)
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        // Clear the form fields
        setFormData({
          fullName: '',
          email: '',
          issue: '',
        });
      })
      .catch((error) => {
        // Handle errors (e.g., show an error message)
        console.error('Error sending email:', error);
        toast.error('Request Failed', {
          position: "top-right",
          autoClose: 3000, // Adjust the duration (in milliseconds)
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  return (
    <div>
      <ToastContainer />
      <div className='app__sidebar'>
        <SideAppbar />
      </div>
      <div className='help'>
        <h1>Feel free to ask anything regarding copyright</h1>
        <div className='help-container'>
          <h4>We are happy to help you!</h4>
          <form onSubmit={handleSubmit}>
            <div className='app__help'>
              <label>Full Name: </label>
              <TextField
                required
                size="small"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder='Enter Your Full Name'
              />
            </div>
            <div className='app__help'>
              <label style={{ marginRight: '15px' }}>Email ID: </label>
              <TextField
                required
                size="small"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Enter your email'
              />
            </div>
            <div className='app__help'>
              <label style={{ marginRight: '15px' }}>Select Your Issue: </label>
              <div className='issue-dropdown'>
                <Dropdown id='option' options={options} value={selectedOption} placeholder="Select an option" />
                <Dropdown id='option' options={options} value={selectedOption} placeholder="Select an option" />
              </div>
            </div>
            <div className='app__help'>
              <label>Describe your issue: </label>
              <textarea
                rows="6"
                cols="40"
                id="issue"
                name="issue"
                value={formData.issue}
                onChange={handleInputChange}
                placeholder='Write your query here (optional)'
              />
            </div>
            <div className='text-center pt-4'>
              <button className="btn btn-lg send-btn" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;
