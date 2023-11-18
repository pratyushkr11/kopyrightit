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
              backgroundColor: "rgba(151, 187, 205, 0.5)",
              borderColor: "#fff",
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
