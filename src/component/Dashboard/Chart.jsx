import React from 'react';
import { CChart } from '@coreui/react-chartjs';


const Chart = ({ data }) => {


  // Convert the count data object to arrays for labels and data points
  // const labels = Object.keys(data);
  // const applicationCounts = Object.values(data);
  // console.log("Labels:", labels);
  // console.log("Application Counts:", applicationCounts);

  const allMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Initialize an array to hold the counts for each month
  const applicationCounts = allMonths.map(month => data[month] || 0);


  return (
    <div style={{ width: '90%', paddingTop: '20px', marginLeft: '30px' }}>
      <CChart
        type="line"
        data={{
          labels: allMonths,
          datasets: [
            {
              label: "No. of Applications",
              backgroundColor: "rgba(151, 187, 205, 0.2)",
              borderColor: "rgba(151, 187, 205, 1)",
              pointBackgroundColor: "rgba(151, 187, 205, 1)",
              pointBorderColor: "#fff",
              data: applicationCounts,
            },
          ],
        }}
      />
    </div>
  )
}

export default Chart;


// import React from 'react'
// import Box from '@mui/material/Box';
// import { BarChart } from '@mui/x-charts/BarChart';

// const highlightScope = {
//   highlighted: 'series',
//   faded: 'global',
// };

// const series = [
//   {
//     label: 'No. of applications',
//     data: [
//       2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
//       1879, 626, 1635, 2177, 516, 1793, 1598,
//     ],
//   },
// ].map((s) => ({ ...s, highlightScope }));

// const Chart = ({ data }) => {
//   const [seriesNb, setSeriesNb] = React.useState(1);
//   const [itemNb, setItemNb] = React.useState(12);

//   return (
//     <div style={{ paddingTop: '20px', marginLeft: '10px' }}>
//       <Box sx={{ width: '100%', color: '#fff' }}>
//         <BarChart
//           height={300}
//           series={series
//             .slice(0, seriesNb)
//             .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
//         />
//       </Box>
//     </div>
//   )
// }

// export default Chart