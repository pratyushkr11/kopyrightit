import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SideAppbar from '../Dashboard/SideAppbar';

import './Settings.css';

const Settings = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    company: '',
    title: '',
    willSignForCompany: false,
    isAttorney: false,
  });

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      navigate('/');
    } else {
      // Fetch the user's email from the server using userId
      axios.get(`https://kopyrightit-backend-zdfw.onrender.com/api/user/email/${userId}`)
        .then((response) => {
          setFormData({ ...formData, email: response.data.email });
        })
        .catch((error) => {
          console.error('Error fetching user email:', error);
        });
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://kopyrightit-backend-zdfw.onrender.com/api/settings', formData);
      window.alert('Details Saved');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  return (
    <div>
      <div className='app__sidebar'>
        <SideAppbar />
      </div>
      <div style={{ margin: '100px 0 0 300px' }}>
        <Typography variant="h4" sx={{ fontWeight: '600' }}>Personal Details</Typography>
        <Typography variant='body1' pt={2}>Please provide your full legal name and your current address. This information will become part of any agreements that you are involved in.</Typography>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '35ch' },
            paddingTop: '30px'
          }}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <div className='form-field'>
            <label className='form-label'>Full Name: </label>
            <TextField
              required
              size="small"
              id="fullName"
              name="fullName"
              label="Required"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <label className='form-label'>Email ID: </label>
            <TextField
              required
              size="small"
              id="email"
              name="email"
              label="Required"
              value={formData.email}
              onChange={handleInputChange}
              disabled
            />
          </div>
          <div className='form-field'>
            <label className='form-label'>Address: </label>
            <TextField
              required
              size="small"
              id="address"
              name="address"
              label="Required"
              value={formData.address}
              onChange={handleInputChange}
            />
            <label className='form-label'>City: </label>
            <TextField
              required
              size="small"
              id="city"
              name="city"
              label="Required"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-field'>
            <label className='form-label' style={{ marginRight: '28px' }}>State: </label>
            <TextField
              required
              size="small"
              id="state"
              name="state"
              label="Required"
              value={formData.state}
              onChange={handleInputChange}
            />
            <label className='form-label'>Zip: </label>
            <TextField
              required
              size="small"
              id="zip"
              name="zip"
              label="Required"
              value={formData.zip}
              onChange={handleInputChange}
            />
          </div>
          <Typography variant='body1' pt={4} pr={10}>Only check the box marked "I will sign on behalf of a company" and complete the "Company" and "Title" fields below if you will be signing all of your agreements on behalf of a company. Otherwise, leave these fields blank.</Typography>
          <div className='form-field pt-4'>
            <label className='form-label'>Company: </label>
            <TextField
              required
              size="small"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
            />
            <label className='form-label'>Title: </label>
            <TextField
              required
              size="small"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <FormGroup sx={{ paddingTop: '5px' }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="willSignForCompany"
                  checked={formData.willSignForCompany}
                  onChange={handleInputChange}
                />
              }
              label="I will sign on behalf of a company"
            />
          </FormGroup>
          <div className='check-option'>
            <FormGroup sx={{ paddingTop: '5px' }}>
              <label>Are you an attorney?
                <FormControlLabel
                  control={
                    <Checkbox
                      name="isAttorney"
                      checked={formData.isAttorney}
                      onChange={handleInputChange}
                    />
                  }
                  label="Yes"
                  sx={{ paddingLeft: '150px' }}
                />
              </label>
            </FormGroup>
          </div>
          <Typography variant='body1' sx={{ padding: '10px 100px 20px 250px', color: '#5C5C5C' }}>By checking this box, I certify that I am a licensed attorney of good standing that is licensed to practice law and that I understand Ipgyan’s Terms of Use. I understand that only attorneys in good standing may alter the text of user-generated agreements on Ipgyan’s platform.</Typography>
          <div className='text-center pt-4'>
            <button className="btn btn-lg save-btn" type="submit">Save</button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Settings;
