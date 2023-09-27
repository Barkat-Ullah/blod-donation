
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useLoaderData } from "react-router-dom";
import { getStoredDonate } from "../js/localStorage";

const Statics = () => {
  const [donation, setDonation] = useState([]);
  const fetchData = useLoaderData();
  const donateData = getStoredDonate();

  useEffect(() => {
    const getStudentData = () => {
      const reqData = fetchData.length;
      const resData = donateData.length;
      const totalDonation = reqData - resData;
      setDonation([totalDonation, resData]);
    };
    getStudentData();
  }, [donateData.length, fetchData]);

  return (
    <React.Fragment>
      <div className="container-fluid mb-3">
      <div
          className="chart-container text-center"
          style={{
            width: "100%", 
            maxWidth: "400px",
            margin: "0 auto", 
          }}
        >
        <Chart
          options={{
            labels: ["Total Donation", "Your Donation"],
            legend: {
              position: "bottom", 
            },
          }}
          series={donation}
          type="pie"
          width={400}
          height={400}
        />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Statics;

