import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function DonationChart({ donations }) {
  const data = {
    labels: donations.map(d => d.time),
    datasets: [{
      data: donations.map(d => d.amount),
      borderColor: "#ff6b8a",
      tension: 0.45,
      pointRadius: 3
    }]
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }},
      y: { grid: { color: "#f2f2f2" }}
    }
  };

  return (
    <div className="panel">
      <h2>Donation Trend</h2>
      <Line data={data} options={options} />
    </div>
  );
}
