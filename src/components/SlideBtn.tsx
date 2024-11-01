import { useState } from "react";
import { style } from "../util/styles";
import { nextSlideBtn1, nextSlideBtn2 } from "../assets";

const SlideBtn = () => {
  const [active, setActive] = useState<number>(1);
  let arr = [1, 2, 3];
  return (
    <ul className={`${style.fCenter} ${style.mediaPaddingAndWidth} gap-2`}>
      <li
        className={`${style.fCenter} bg-slate-200 h-6 w-6 rounded-sm cursor-pointer `}
      >
        <img src={nextSlideBtn1} alt="" />
      </li>
      {arr.map((item) => {
        return (
          <li
            key={arr.length}
            onClick={() => setActive(item)}
            className={`${style.fCol} ${
              active === item
                ? "bg-btnBg text-white"
                : "bg-slate-200 text-btnBg"
            } h-6 w-6 rounded-sm cursor-pointer`}
          >
            {item}
          </li>
        );
      })}
      <li
        className={`${style.fCenter} bg-slate-200 h-6 w-6 rounded-sm cursor-pointer `}
      >
        <img src={nextSlideBtn2} alt="" />
      </li>
    </ul>
  );
};

export default SlideBtn;
