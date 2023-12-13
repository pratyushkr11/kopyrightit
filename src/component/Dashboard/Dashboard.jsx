import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SideAppbar from './SideAppbar';
import Chart from './Chart';
import Table from './Table';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


import './Dashboard.css'
import { Typography } from '@mui/material';

const Dashboard = () => {

  const [application, setApplication] = React.useState('');
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({}); // State variable for chart data


  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      navigate('/');
    }

    try {
      axios
        .get(`http://localhost:3001/getformsu?userId=${userId}`)
        .then((response) => {
          setForms(response.data);
          setLoading(false);

          // Count the number of applications for each month
          const countData = {};

          response.data.forEach((formData) => {
            const month = new Date(formData.date).toLocaleDateString('en-US', { month: 'long' });
            if (countData[month]) {
              countData[month]++;
            } else {
              countData[month] = 1;
            }
          });

          setChartData(countData); // Set the chart data
        })
        .catch((err) => {
          // console.error("Error fetching data:", err);
        });
    } catch (error) {
      // console.error("Error in useEffect:", error);
    }
  }, []);

  const handleChange = (e) => {
    setApplication(e.target.value);
  };

  return (
    <div>
      <div className='app__sidebar'>
        <SideAppbar />
      </div>
      <div className='app__card'>
        <div className='card1'>
          <h2><u>Application Status</u></h2>
          <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
              <InputLabel id="demo-simple-select-standard-label" sx={{ color: '#ffffff' }}>Select Application</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={application}
                onChange={handleChange}
                sx={{ color: '#ffffff' }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Application 1</MenuItem>
                <MenuItem value={2}>Application 2</MenuItem>
                <MenuItem value={3}>Application 3</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className='card2'>
          <h2><u>Activity</u></h2>
          <h4>Total Applications Applied</h4>
          <div className='card__chart'>
            <Chart data={chartData} />
          </div>
        </div>
      </div>
      <div className='table-container'>
        <div className='card__header'>
          <Typography className='card__header' pt={2} pl={5} sx={{
            fontWeight: 700,
            fontSize: '32px',
          }}>Application Details</Typography>
        </div>
        <div className='card__table'>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
