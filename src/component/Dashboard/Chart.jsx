import Box from '@mui/material/Box';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const allMonths = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Chart = ({ data }) => {
  const chartData = allMonths.map((month) => ({
    name: month.slice(0, 3), // Display only first 3 characters of the month name
    applications: data[month] || 0,
  }));

  return (
    <div style={{ paddingTop: '20px' }}>
      <Box sx={{ width: '100%', color: '#fff' }}>
        <BarChart
          width={600}
          height={300}
          data={chartData}
          margin={{ top: 20, right: 50, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="applications" fill="#8884d8" />
        </BarChart>
      </Box>
    </div>
  );
};

export default Chart;