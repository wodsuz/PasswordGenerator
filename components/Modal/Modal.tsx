import { useState } from "react";

import { Checkboxes, PwField, Slider, Title, Info } from "../index";
import { generatePassword } from "../../utils/utils";

const Modal = () => {
  const [password, setPassword] = useState(generatePassword(29));

  const getData = (data: string) => {
    setPassword(data);
  };
  return (
    <>
      <Title />
      <PwField pw={password} />
      <Slider onChnage={getData} />
      <Checkboxes onCheck={getData} />
      <Info />
    </>
  );
};

export default Modal;
