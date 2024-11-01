import React, { FC } from "react";
import { style } from "../util/styles";
import { navbarLink } from "../util/constants";
interface props {
  phoneClass?: string;
}
const PhoneNum: FC<props> = ({ phoneClass }) => {
  return (
    <ul className={`${style.fIc} xl:gap-10 md:gap-7 gap-2 ${phoneClass}`}>
      {navbarLink.map((link, idx) => {
        return (
          <li key={idx} className={`${style.fIc} ${style.li} gap-2`}>
            <img src={link.img} alt="" />
            <p>{link.title}</p>
            <img
              className={`${link.img2.length === 0 ? "hidden" : "blok"}`}
              src={link.img2}
              alt=""
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PhoneNum;
