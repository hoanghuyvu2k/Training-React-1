import "./Setting.scss";
import InputSetting from "./components/InputSetting";
import { useState } from "react";
import { regexEmail } from "constant";
import moment from "moment/moment";
function Setting() {
  console.log("render setting");
  const [listInput, setListInput] = useState([
    {
      typeInput: "title",
      type: "text",
      title: "Title:",
      value: "",
      isValid: false,
      textInvalid: "Invalid value!",
    },
    {
      typeInput: "email",
      type: "text",
      title: "Email:",
      value: "",
      isValid: false,
      textInvalid: "Invalid value!",
    },
    {
      typeInput: "colorPicker",
      type: "text",
      title: "Background Color:",
      value: "#D0021B",
      isValid: true,
      textInvalid: "Invalid value!",
    },
    {
      typeInput: "datePicker",
      type: "text",
      title: "Active date:",
      value: "",
      isValid: false,
      textInvalid: "Invalid value!",
    },
  ]);
  const handleChangeValueInput = (value, index) => {
    let inputs = structuredClone(listInput);
    let isValid = checkValidValue(value, index);
    inputs[index].value = value;
    inputs[index].isValid = isValid;
    setListInput(inputs);
  };
  const checkValidValue = (value, index) => {
    let type = listInput[index].typeInput;
    let valid = true;
    switch (type) {
      case "title":
        if (value === "") valid = false;
        break;
      case "colorPicker":
        if (value === "") valid = false;
        break;
      case "email":
        valid = String(value).toLowerCase().match(regexEmail) ? true : false;
        break;
      case "datePicker":
        let arrDate = value.split(" ");
        arrDate.forEach((date) => {
          let checkDate = moment(date, "MM-DD-YYYY", true);
          if (!checkDate.isValid()) {
            valid = false;
            return;
          }
        });
        break;
      default:
    }
    return valid;
  };
  return (
    <div className="setting">
      {listInput.map((input, index) => {
        return (
          <InputSetting
            key={index}
            index={index}
            type={input.type}
            title={input.title}
            typeInput={input.typeInput}
            value={input.value}
            onChange={handleChangeValueInput}
            isValid={input.isValid}
            textInvalid={input.textInvalid}
          />
        );
      })}
    </div>
  );
}

export default Setting;
