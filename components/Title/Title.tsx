import { useCallback, useState } from "react";
import { Checkboxes, PwField, Slider } from "../index";
import { generatePassword } from "../../utils/utils";

function Title() {
  const [perc, setPerc] = useState(0);
  const [password, setPassword] = useState(generatePassword(29));

  const getData = (data: any) => {
    setPassword(data);
  };

  return (
    <>
      <h3 className="m-5 text-2xl text-center text-black underline underline-offset-8">
        Generate Fast Secure and Unique Password
      </h3>
      <h2 className="m-5 text-center text-black text-1xl">
        Create strong and secure passwords to keep your account safe online.
      </h2>

      <PwField pw={password} />

      <Slider onChnage={getData} />

      <Checkboxes onCheck={getData} />
    </>
  );
}
export default Title;
