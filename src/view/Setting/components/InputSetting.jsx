import "./InputSetting.scss";
import { SketchPicker } from "react-color";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import CIcon from "@coreui/icons-react";
import { cilCalendar } from "@coreui/icons";
function InputSetting(props) {
  console.log("render input");
  const [value, setValue] = useState(props.value);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [isShowBoxDatepicker, setIsShowBoxDatepicker] = useState(false);
  const [isShowBoxColor, setIsShowBoxColor] = useState(false);
  const handleChangeDatepicker = (dates) => {
    const [start, end] = dates;
    let startDate = moment(start).format("MM-DD-YYYY");
    let endDate = moment(end).format("MM-DD-YYYY");
    setStartDate(start);
    setEndDate(end);
    setValue(startDate + " " + endDate);
    props.onChange(startDate + " " + endDate, props.index);
    if (start && end) setIsShowBoxDatepicker(false);
  };
  const handleChangeInput = (e) => {
    setValue(e.target.value);
    props.onChange(e.target.value, props.index);
  };
  const colorBox = () => {
    return { backgroundColor: value };
  };
  const handleChangeColor = (color) => {
    setIsShowBoxColor(false);
    setValue(color.hex);
    props.onChange(color.hex, props.index);
  };
  return (
    <div className="input-setting">
      <div className="title">{props.title}</div>
      <div className="input-wrapper">
        <input type={props.type} value={value} onChange={handleChangeInput} />
        {props.isInvalid ? (
          <div className="absolute -bottom-4.5 text-red-600">
            {props.textInvalid}
          </div>
        ) : (
          <></>
        )}
        {props.typeInput === "colorPicker" ? (
          <div
            className="box-color"
            onClick={() => setIsShowBoxColor(!isShowBoxColor)}
            style={colorBox()}
          ></div>
        ) : (
          <></>
        )}
        {props.typeInput === "datePicker" ? (
          <CIcon
            className="absolute top-1.5 right-2"
            size={"xl"}
            icon={cilCalendar}
            onClick={() => {
              setIsShowBoxDatepicker(!isShowBoxDatepicker);
            }}
          ></CIcon>
        ) : (
          <></>
        )}
      </div>
      {props.typeInput === "datePicker" && isShowBoxDatepicker ? (
        <div className="ml-2">
          <DatePicker
            selected={startDate}
            onChange={handleChangeDatepicker}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            selectsDisabledDaysInRange
            inline
          />
        </div>
      ) : (
        <></>
      )}
      {props.typeInput === "colorPicker" && isShowBoxColor ? (
        <SketchPicker
          className="ml-7"
          color={value}
          onChange={handleChangeColor}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default InputSetting;
