import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SideAppbar from './SideAppbar';
import Chart from './Chart';
import Button from '@mui/material/Button';
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
        <Box
          sx={{
            textAlign: 'center',
            margin: '100px 0 0 300px',
            width: 500,
            height: 450,
            borderRadius: '20px',
            boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.25)',
            backgroundColor: '#1C7CD1',
          }}
        >
          <Typography className='card__title' pt={2} sx={{
            fontWeight: 700,
            fontSize: '32px',
          }}><u>Application Status</u></Typography>

          <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-standard-label" sx={{ color: '#ffffff' }}>Select Application</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={application}
              onChange={handleChange}
              label="Age"
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
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            margin: '100px 30px 0 0',
            width: 580,
            height: 450,
            borderRadius: '20px',
            boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.25)',
            backgroundColor: '#021B3E',
          }}
        >
          <Typography className='card2__title' pt={2} sx={{
            fontWeight: 700,
            fontSize: '32px',
            color: '#ffffff'
          }}><u>Activity</u></Typography>
          <Typography className='card2__subheading' pt={2} sx={{
            fontWeight: 500,
            fontSize: '25px',
            color: '#ffffff'
          }}>Total Applications Applied</Typography>

          <Chart data={chartData} />
        </Box>
      </div>
      <div>
        <Box
          sx={{
            margin: '80px 0px 30px 420px',
            width: 950,
            height: 650,
            border: '1px solid rgba(0, 0, 0, 0.5)',
            borderRadius: '10px'
          }}
        >
          <div className='card__header'>
            <Typography className='card__header' pt={2} pl={5} sx={{
              fontWeight: 700,
              fontSize: '32px',
            }}>Application Details</Typography>
            <Button variant="contained" size="medium"
              sx={{
                background: '#021B3E',
                margin: '15px 20px 0 15px'
              }}>
              View All Applications
            </Button>
          </div>
          <div className='card__table'>
            <Table />
          </div>
        </Box>
      </div>
    </div>
  )
}

export default Dashboard
