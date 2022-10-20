import "./Dashboard.scss";
import ButtonChart from "./component/ButtonChart";
import Chart from "components/Chart";
import { optionLineChart, optionBarChart } from "constant/configChart";
import { useEffect, useState, useCallback } from "react";
import { listButtonDashboard } from "constant";
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
function Dashboard() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(
    location.pathname.split("/")[2]
  );
  const [optionChart, setOptionChart] = useState(optionLineChart);

  const navigate = useNavigate();
  const handleClick = useCallback((type) => {
    setActiveButton(type);
    if (type == "subcription") {
      setOptionChart(optionLineChart);
      navigate("subcription");
    } else {
      setOptionChart(optionBarChart);
      navigate("revenue");
    }
  }, []);
  const isActiveButton = (type) => {
    let path = location.pathname.split("/")[2];
    return type === activeButton && path === activeButton;
  };

  return (
    <div className="dashboard">
      <div className="title-page">Dashboard</div>
      <div className="flex gap-x-1 mt-3 ml-4">
        {listButtonDashboard.map((button, index) => {
          return (
            <ButtonChart
              key={index}
              text={button.text}
              type={button.type}
              onClick={handleClick}
              isActive={isActiveButton(button.type)}
            />
          );
        })}
      </div>
      <div>
        <Chart options={optionChart}></Chart>
      </div>
    </div>
  );
}

export default Dashboard;
