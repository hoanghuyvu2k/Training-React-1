import { memo } from "react";
function BoxText(props) {
  const isActive = () => {
    return props.isActive ? " active" : "";
  };
  const handleClick = () => {
    props.onClick(props.url);
  };
  return (
    <div className={"box-text" + isActive()} onClick={handleClick}>
      {props.text}
    </div>
  );
}

export default memo(BoxText);
