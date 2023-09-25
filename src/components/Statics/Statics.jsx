import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const Statics = () => {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {

      fetch('donate.json')
          .then((response) => response.json())
          .then((data) => {

              const donationsCount = data.filter((item) => item.donation === 'Donation').length;
              const nonDonationsCount = data.length - donationsCount;

              const chartData = [
                  { name: 'Donation', value: donationsCount },
                  { name: 'Non-donation', value: nonDonationsCount },
              ];

              setChartData(chartData);
          })

  }, []);

  const totalValue = chartData.reduce((acc, item) => acc + item.value, 0);

  const dataWithPercentage = chartData.map((item) => ({
      name: item.name,
      value: item.value,
      percentage: ((item.value / totalValue) * 100).toFixed(2) + '%',
  }));

  const COLORS = ["#FF444A", "#00C49F"];

  return (
    
    <div className="flex items-center justify-center">
      
      <PieChart width={600} height={600}>
        <Pie
          data={dataWithPercentage}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ percentage }) => `${percentage}`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {dataWithPercentage.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Statics;
