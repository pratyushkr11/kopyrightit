import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SideAppbar from '../Dashboard/SideAppbar';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './Help.css';

const Help = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    issue: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to your server for email processing
    axios.post('https://kopyrightit-backend-zdfw.onrender.comapi/sendEmail', formData)
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
      <div style={{ margin: '100px 0 0 300px' }}>
        <Typography variant="h4" sx={{ fontWeight: '600', textAlign: 'center', color: '#022D69' }}>Feel free to ask anything regarding copyright</Typography>
      </div>
      <Box
        sx={{
          margin: '20px 30px 20px 420px',
          width: 850,
          height: 500,
          border: '1px solid rgba(0, 0, 0, 0.5)',
          borderRadius: '10px'
        }}
      >
        <Typography variant='h4' pt={2} sx={{ textAlign: 'center' }}>We are happy to help you!</Typography>
        <form onSubmit={handleSubmit}>
          <div className='app__help'>
            <label className='label-field'>Full Name: </label>
            <TextField
              required
              size="small"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className='app__help'>
            <label className='label-field' style={{ marginRight: '15px' }}>Email ID: </label>
            <TextField
              required
              size="small"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='app__help'>
            <label className='label-field'>Describe your issue: </label>
            <textarea
              rows="6"
              cols="60"
              id="issue"
              name="issue"
              value={formData.issue}
              onChange={handleInputChange}
              placeholder='Write your query here'
            />
          </div>
          <div className='text-center pt-4'>
            <button className="btn btn-lg send-btn" type="submit">Send</button>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default Help;
