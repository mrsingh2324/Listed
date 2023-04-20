import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

ChartJS.register(ArcElement, Tooltip, Legend);
const dat = {
  "May - June": [92, 78, 90],
  "June - July": [92, 43, 33],
  "July - Aug": [56, 65, 88],
  "Aug - Sept": [34, 90, 77],
 
};

const Card2 = () => {
  const [data, setdata] = useState({
    labels: ["One", "Two", "Three"],
    datasets: [
      {
        data: dat["May - June"],
        backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
        borderWidth: 0,
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="card-div">
      <div className="card-header2">
        <div>
          <h3 style={{ marginBottom: "8px" }}>Top products</h3>
        </div>
        <div style={{ fontSize: ".8rem" }}>
          {" "}
          <select
            style={{
              border: "none",
              outline: "none",
            }}
            onChange={(event) => {
              const val = event.target.value;
              const v = dat[val];
              setdata((prev) => {
                return {
                  ...prev,
                  datasets: [{ ...prev.datasets[0], data: v }],
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
      </div>
      <div className="chart-content mt-3">
        {/* <div className="pie-chart"></div> */}
        <div>
          <Pie
            style={{ width: "100px", height: "100px" }}
            data={data}
            options={options}
          >
            {" "}
          </Pie>
        </div>

        <div className="chart-legend">
          <div className="data">
            <div className="data-inner">
              <div
                className="color-box"
                style={{ backgroundColor: "#FFC107" }}
              ></div>
              <h4>Basic Tees</h4>
            </div>
            <span>
            {Math.floor(
                  (data.datasets[0].data[0] /
                    (data.datasets[0].data[0] +
                      data.datasets[0].data[1] +
                      data.datasets[0].data[2])) *
                    100
                ) + "%"}
            </span>
          </div>
          <div className="data">
            <div className="data-inner">
              <div
                className="color-box"
                style={{ backgroundColor: "#FFC107" }}
              ></div>
              <h4>Custom Short Pants</h4>
            </div>
            <span>{Math.floor(
                  (data.datasets[0].data[0] /
                    (data.datasets[0].data[0] +
                      data.datasets[0].data[1] +
                      data.datasets[0].data[2])) *
                    100
                ) + "%"}</span>
          </div>
          <div className="data">
            <div className="data-inner">
              <div
                className="color-box"
                style={{ backgroundColor: "#FFC107" }}
              ></div>
              <h4>Super Hoodies</h4>
            </div>
            <span>{Math.floor(
                  (data.datasets[0].data[0] /
                    (data.datasets[0].data[0] +
                      data.datasets[0].data[1] +
                      data.datasets[0].data[2])) *
                    100
                ) + "%"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
