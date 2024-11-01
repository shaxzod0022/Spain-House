import { FC, useState } from "react";
import { style } from "../util/styles";
import { close, facebook, insta } from "../assets";
import { saidBarLinks } from "../util/constants";
import { useLocation, useNavigate } from "react-router";
import PhoneNum from "./PhoneNum";
import Language from "./Language";
interface props {
  barClass?: string;
  onClick?: () => void;
}
const SaidBar: FC<props> = ({ barClass, onClick }) => {
  const url = useLocation().pathname.slice(1);
  const [pageName, setPageName] = useState<string>(url);
  const navigate = useNavigate();
  const navigatePage = (id: string): void => {
    setPageName(id);
    navigate(`/${id}`);
  };
  return (
    <div
      className={`max-w-[328px] ${barClass} pt-4 box-shadow-saidBar sm:w-full w-[280px] h-[100vh] absolute bg-white`}
    >
      <span onClick={onClick} className="sm:p-10 px-5 block">
        <img className="cursor-pointer" src={close} alt="" />
      </span>
      <Language langClass={`md:hidden ${style.fCenter} mb-3`} />
      <h3
        className={`${style.h3} text-center font-PlayFair sm:px-10 px-5 uppercase`}
      >
        Добро пожаловать в Spain House
      </h3>
      <ul className="sm:py-10 py-5 sm:pl-10 pl-5">
        {saidBarLinks.map((link, idx) => {
          return (
            <li
              key={idx}
              onClick={() => navigatePage(link.id)}
              className={`${style.li} ${[
                pageName === link.id ? "bg-btnBg text-white" : "",
              ]} ${
                idx === saidBarLinks.length - 1 ? "border-y-2" : "border-t-2"
              } border-btnBg hover:bg-btnBg hover:text-white sm:p-2 p-0.5 transition duration-200`}
            >
              {link.title.toUpperCase()}
            </li>
          );
        })}
      </ul>
      <PhoneNum phoneClass="lg:hidden flex-col mb-5" />
      <div className={`${style.fCenter} gap-3`}>
        <span className="blok cursor-pointer">
          <img src={insta} alt="" />
        </span>
        <span className="blok cursor-pointer">
          <img src={facebook} alt="" />
        </span>
      </div>
    </div>
  );
};

export default SaidBar;
