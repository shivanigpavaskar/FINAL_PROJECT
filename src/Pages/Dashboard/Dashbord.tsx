import Sidebar from "../../Components/Sidebar";
import "./dashboard.css";
import dataObject from "../../Data/data.json";
import { useEffect, useState } from "react";
import { Doughnut, Line } from "react-chartjs-2";

const data = {
  labels: ["Students", "Trainers", "Enrolled", "Courses"],
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 30, 40],
      backgroundColor: ["#7F58AF", "#64C5EB", "#E84D8A", "#FEB326"],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Data",
    },
  },
};

const lineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sample Data",
      data: [12, 19, 3, 5, 2, 3],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
    },
  ],
};

const lineChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

interface User {}

interface Course {}

interface Class {}

interface DashboardData {
  users: User[];
  courses: Course[];
  class: Class[];
}

const Dashbord = () => {
  const [dashBoardData, setDashBoardData] = useState<DashboardData>({
    users: [],
    courses: [],
    class: [],
  });

  useEffect(() => {
    setDashBoardData(dataObject);
  }, []);

  return (
    <Sidebar>
      <div className="dashboard-container">
        <div className="box-group">
          <div className="box">
            <h2>Total no. of users</h2>
            <p>{dashBoardData.users.length}</p>
          </div>
          <div className="box">
            <h2>Total no. of courses</h2>
            <p>{dashBoardData.courses.length}</p>
          </div>
          <div className="box">
            <h2>Total no. of classes</h2>
            <p>{dashBoardData.class.length}</p>
          </div>
        </div>
        <div className="chart-area">
          <div className="chart-box  chart-section-1 ">
            <Doughnut data={data} options={options} width={10} height={10} />
          </div>
          <div className="chart-box   chart-section-2  ">
            <Line data={lineChartData} options={lineChartOptions} />
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashbord;
