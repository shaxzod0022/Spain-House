import { FC } from "react";
import { useLocation } from "react-router";
import { buildings, saidBarLinks } from "../util/constants";
import { style } from "../util/styles";
import { fooFas, fooIns, foooterLogo } from "../assets";

interface props {
  footClass?: string;
}
const Footer: FC<props> = ({ footClass }) => {
  const url = useLocation().pathname;
  let headTitles = saidBarLinks.find((item) => item.id === url.slice(1));
  let buildingTitle = buildings.find(
    (item) => item.id === Number(url.slice(-1))
  );

  return (
    <div
      className={`${footClass} ${
        headTitles || buildingTitle ? "flex" : "hidden"
      } ${style.fCol} gap-4 bg-btnBg p-8 bg-cover`}
    >
      <img src={foooterLogo} alt="" />

      <div className={`${style.fCenter} gap-3`}>
        <span className="cursor-pointer">
          <img src={fooIns} alt="" />
        </span>
        <span className="cursor-pointer">
          <img src={fooFas} alt="" />
        </span>
      </div>
      <span className="text-white text-center">
        © Все права защищены. Агентство недвижимости Spain House
      </span>
    </div>
  );
};

export default Footer;
