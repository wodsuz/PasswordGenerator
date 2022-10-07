import { useState, useCallback } from "react";
import { generatePassword } from "../../utils/utils";

function Slider(props: any) {
  const [perc, setPerc] = useState("29");

  const style = {
    "--value": perc,
    "--size": "3rem",
    "--thickness": "2px",
  } as React.CSSProperties;

  const handleSliderChange = useCallback(
    (pwLength: string) => {
      setPerc(pwLength);

      const rndPw = generatePassword(Number(pwLength));
      props.onChnage(rndPw);
    },
    [props]
  );

  return (
    <>
      <div className="pt-1 mt-5 text-center">
        <input
          type="range"
          className="w-1/2 mr-2 range range-sm range-primary "
          id="customRange1"
          min={"10"}
          max={"100"}
          step="1"
          defaultValue={perc}
          onChange={(e) => handleSliderChange(e.target.value)}
        />
        <div className="mb-5 ml-5 text-black radial-progress" style={style}>
          {`${perc}`}
        </div>
      </div>
    </>
  );
}

export default Slider;
