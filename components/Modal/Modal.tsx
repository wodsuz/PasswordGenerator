import { useState } from "react";

import { Checkboxes, PwField, Slider, Title, Info } from "../index";
import { generatePassword } from "../../utils/utils";

const Modal = () => {
  const [password, setPassword] = useState(generatePassword(29));

  const [sliderData, setSliderData] = useState("");
  const [checkBoxData, setCheckBoxData] = useState("");

  const getSliderData = (data: string) => {
    console.log("sl DATA:" + data);
    setSliderData(data);
  };

  const getCHeckboxData = (data: string) => {
    console.log("cb DATA:" + data);
    setCheckBoxData(data);
  };

  return (
    <>
      <Title />
      <PwField pw={password} />
      {sliderData} {checkBoxData}
      <Slider onChnage={getSliderData} />
      <Checkboxes onCheck={getCHeckboxData} />
      <Info />
    </>
  );
};

export default Modal;
