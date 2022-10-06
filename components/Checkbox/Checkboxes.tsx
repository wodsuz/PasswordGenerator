import React from "react";
import { useCallback, useState } from "react";
import CheckboxesData from "./checkboxes.json";
import { generatePassword } from "../../utils/utils";

const Checkboxes = (props: any) => {
  const checkData = CheckboxesData.CheckboxesData;
  const [checkedState, setCheckedState] = useState(new Array(4).fill(true));

  const handleCheckBox = useCallback(
    (id: number) => {
      const updatedCheckedState: boolean[] = checkedState.map((item, index) =>
        index === id ? !item : item
      );
      setCheckedState(updatedCheckedState);
      const rndPw = generatePassword(updatedCheckedState);
      props.onCheck(rndPw);
    },
    [checkedState, props]
  );

  return (
    <>
      <div className="flex justify-center text-black ">
        {checkData.map((item) => {
          return (
            <div key={item.id}>
              <label className="mr-5 cursor-pointer ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={checkedState[item.id]}
                  onChange={() => handleCheckBox(item.id)}
                />
                <span className="ml-3 text-2xl">{item.label}</span>
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Checkboxes;

/*
 <label
          className="mr-5 cursor-pointer text-sky-900 "
          onClick={handleCheckBox}
        >
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={numberState}
            onChange={(e) => {}}
          />
          <span className="ml-3 text-2xl">123</span>
        </label>

     <label className="mr-5 cursor-pointer ">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="ml-3 text-2xl">abc</span>
        </label>
        <label className="mr-5 cursor-pointer ">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="ml-3 text-2xl ">ABC</span>
        </label>
        <label className="mr-5 cursor-pointer ">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="ml-3 text-2xl ">#?$</span>
        </label>

    */
