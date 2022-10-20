import "./Sidebar.scss";
import BoxText from "./component/BoxText";
import { listTextSidebar } from "constant";
import { useNavigate, useLocation } from "react-router-dom";
import { useLayoutEffect, useState, useCallback } from "react";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeUrl, setActiveUrl] = useState(location.pathname);
  const handleClick = useCallback((url) => {
    navigate(url);
    setActiveUrl(url);
  }, []);
  const isActiveUrl = (url) => {
    return activeUrl === url;
  };
  return (
    <div className="sidebar1">
      <div className="mr-4">
        {listTextSidebar.map((category, index) => {
          return (
            <BoxText
              key={index}
              text={category.text}
              onClick={handleClick}
              url={category.url}
              isActive={isActiveUrl(category.url)}
            />
          );
        })}
      </div>
      <div className="border"></div>
    </div>
  );
}

export default Sidebar;
