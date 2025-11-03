import React from "react";
import './charts.css'
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function FinanceCharts({ expenseHistory }) {
  // 🟢 PIE CHART: Category Breakdown
  const categoryTotals = expenseHistory.reduce((acc, curr) => {
    const category = curr.expEntry || "Uncategorized";
    acc[category] = (acc[category] || 0) + curr.amount;
    return acc;
  }, {});

  const pieData = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: "Expense Breakdown",
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff",
          "#ff9f40",
        ],
      },
    ],
  };

  // 🟢 BAR CHART: Monthly Expense Trend
  const monthlyTotals = expenseHistory.reduce((acc, curr) => {
    const month = new Date(curr.date).toLocaleString("default", { month: "short" });
    acc[month] = (acc[month] || 0) + curr.amount;
    return acc;
  }, {});

  const barData = {
    labels: Object.keys(monthlyTotals),
    datasets: [
      {
        label: "Monthly Expenses ($)",
        data: Object.values(monthlyTotals),
        backgroundColor: "#36a2eb",
      },
    ],
  };

  return (
    <div className="charts-container">
      <h2>Expense Analysis</h2>
      <div className="chart-wrapper">
        <div className="pie-chart">
          <h3>Category Breakdown</h3>
          <Pie data={pieData} />
        </div>
        <div className="bar-chart">
          <h3>Monthly Expense Trend</h3>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
}

export default FinanceCharts;
