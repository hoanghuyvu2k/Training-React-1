import "./InputSetting.scss";
import { SketchPicker } from "react-color";
import React, { useState } from "react";
function InputSetting(props) {
  const handleChangeColor = (color) => {
    setValue(color.hex);
    props.onChange(color.hex, props.index);
  };
  const [value, setValue] = useState(props.value);
  const handleChangeInput = (e) => {
    setValue(e.target.value);
    props.onChange(e.target.value, props.index);
  };
  return (
    <div className="input-setting">
      <div className="title">{props.title}</div>
      <input type={props.type} value={value} onChange={handleChangeInput} />
      {props.typeInput === "colorPicker" ? (
        <div>
          <div className="box-color"></div>
          <SketchPicker
            className="ml-7"
            color={value}
            onChange={handleChangeColor}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default InputSetting;
