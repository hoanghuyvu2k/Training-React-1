import "./Setting.scss";
import InputSetting from "./components/InputSetting";
import { useState } from "react";

function Setting() {
  const [listInput, setListInput] = useState([
    {
      typeInput: "title",
      type: "text",
      title: "Title",
      value: "",
    },
    {
      typeInput: "email",
      type: "text",
      title: "Email:",
      value: "",
    },
    {
      typeInput: "colorPicker",
      type: "text",
      title: "Background Color:",
      value: "fff",
    },
    {
      typeInput: "datePicker",
      type: "text",
      title: "Active date:",
      value: "",
    },
  ]);
  const handleChangeValueInput = (value, index) => {
    console.log(value, index);
    let inputs = listInput;
    inputs[index].value = value;
    setListInput(inputs);
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
          />
        );
      })}
    </div>
  );
}

export default Setting;
