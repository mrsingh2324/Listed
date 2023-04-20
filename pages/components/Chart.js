import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale, //x-axis
  LinearScale, //y-axis
  PointElement,
  Tooltip,
} from "chart.js";

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const graphData = [
  [100, 390, 420, 150, 300, 450, 350, 180, 280],
  [100, 290, 220, 350, 500, 450, 350, 280, 480],
  [100, 190, 220, 450, 200, 450, 150, 280, 380],
  [100, 290, 420, 350, 100, 250, 350, 180, 280],
];

const Graph = () => {
  const aata = {
    label: ["", "Weeks1", "Weeks2", "Weeks3", "Weeks4", " "],
    data: {
      user: {
        "May - June": [100, 390, 420, 150, 300, 450, 350, 180, 280],
        "June - July": [100, 390, 420, 150, 300, 450, 350, 180, 280],
        "July - Aug": [100, 290, 220, 350, 500, 450, 350, 280, 480],
        "Aug - Sept": [100, 190, 220, 450, 200, 450, 150, 280, 380],
      },
      guest: {
        "May - June": [100, 290, 420, 350, 100, 250, 350, 180, 280],
        "June - July": [100, 290, 220, 350, 500, 450, 350, 280, 480],
        "July - Aug": [100, 390, 420, 150, 300, 450, 350, 180, 280],
        "Aug - Sept": [100, 390, 420, 150, 300, 450, 350, 180, 280],
      },
    },
  };
  const [data, setdata] = useState({
    labels: [" ", "Week1", " ", "Week2", " ", "Week3", " ", "Week4", " "],
    datasets: [
      {
        fill: true,
        borderColor: "#9BDD7C",
        data: [100, 390, 420, 150, 300, 450, 350, 180, 280],
        tension: 0.4,
      },
      {
        fill: true,
        borderColor: "#E9A0A0",
        data: [200, 390, 270, 200, 270, 300, 270, 220, 450],
        tension: 0.4,
      },
    ],
  });
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          borderWidth: 0,
          drawBorder: false,
        },
        min: 0,
        max: 500,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          drawOnChartArea: false,
          display: false,
        },
      },
    },

    elements: {
      point: {
        radius: 0,
      },
    },
  };
  const [ind, setInd] = useState(0);
  const obj = {
    "May - June": 0,
    "June - July": 1,
    "July - Aug": 2,
    "Aug - Sept": 3,
  };

  return (
    <div className="graph">
      <div className="graph-mainHeader">
        <div className="graph-header">
          <h3>Activities</h3>

          <span>
            {/* May-June 2021 <FontAwesomeIcon icon={faAngleDown} /> */}
            <div style={{ fontSize: ".8rem" }}>
              {" "}
              <select
                style={{
                  border: "none",
                  outline: "none",
                }}
                onChange={(event) => {
                  const val = event.target.value;
                  const v = aata.data.user[val];
                  const v1 = aata.data.guest[val];
                  setdata((prev) => {
                    return {
                      ...prev,
                      datasets: [
                        { ...prev.datasets[0], data: v },
                        { ...prev.datasets[1], data: v1 },
                      ],
                    };
                  });
                }}
              >
                <option style={{ border: "none" }} value="May - June">
                  May - June{" "}
                </option>
                <option style={{ border: "none" }} value="June - July">
                  {" "}
                  June - July
                </option>
                <option style={{ border: "none" }} value="July - Aug">
                  {" "}
                  July - Aug
                </option>
                <option style={{ border: "none" }} value="Aug - Sept">
                  Aug - Sept{" "}
                </option>
              </select>
            </div>
          </span>
        </div>
        <div className="graph-point mr-10">
          <div className="graph-point-inner">
            <div
              className="graph-circle"
              style={{ backgroundColor: "#E9A0A0" }}
            ></div>
            <span>Guest</span>
          </div>
          <div className="graph-point-inner">
            <div
              className="graph-circle"
              style={{ backgroundColor: "#9BDD7C" }}
            ></div>
            <span>User</span>
          </div>
        </div>
      </div>
      <div className="graph-content  mt-5">
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
};

export default Graph;
