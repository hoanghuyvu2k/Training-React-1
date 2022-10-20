import { memo } from "react";
function ButtonChart(props) {
  const handleClick = () => {
    props.onClick(props.type);
  };
  const buttonClass = () => {
    let active = props.isActive ? "active" : "";
    return "button-chart " + active;
  };
  return (
    <button className={buttonClass()} onClick={handleClick}>
      {props.text}
    </button>
  );
}

export default memo(ButtonChart);
