import { useState } from "react";
import { logo, menyuBar } from "../assets";
import { style } from "../util/styles";
import PhoneNum from "./PhoneNum";
import Language from "./Language";
import SaidBar from "./SaidBar";

const Navbar = () => {
  const [showBar, setShowBar] = useState<string>("-right-[378px] -top-[110vh]");
  const showSaidbar = (): void => {
    setShowBar((prev) =>
      prev === "-right-[378px] -top-[110vh]"
        ? "-right-[50px] top-[0]"
        : "-right-[378px] -top-[110vh]"
    );
  };

  return (
    <div
      className={`bg-white box-shadow-saidBa max-w-[1440px] ${style.mediaPaddingAndWidth} fixed z-50 ${style.fBetween}`}
    >
      <div>
        <img
          className="max-w-[255px] sm:w-full w-[180px] max-h-[60px] sm:h-full h-[40px]"
          src={logo}
          alt=""
        />
      </div>
      <div className={`${style.fIc} gap-10`}>
        <PhoneNum phoneClass="lg:flex hidden" />
        <Language langClass="md:flex hidden" />
        <span onClick={showSaidbar} className="cursor-pointer">
          <img className="text-white" src={menyuBar} alt="" />
        </span>
        <SaidBar
          onClick={showSaidbar}
          barClass={`${showBar} transition-[1s] duration-500`}
        />
      </div>
    </div>
  );
};

export default Navbar;
