import { useLocation } from "react-router";
import { buildings, saidBarLinks } from "../util/constants";
import { style } from "../util/styles";
import { useState, useEffect } from "react";
import { homeHead } from "../assets";

const Head = () => {
  const url = useLocation().pathname;
  const headTitles = saidBarLinks.find((item) => item.id === url.slice(1));
  const buildingTitles = buildings.find(
    (item) => item.id === Number(url.slice(-1))
  );
  const [hidden, setHidden] = useState<string>("");

  useEffect(() => {
    const noneHead = url.includes("about_house", 1);
    if (noneHead) {
      setHidden("hidden");
    } else {
      setHidden("");
    }
  }, [url]);

  return (
    <div
      style={{
        background: `linear-gradient(#80808099, #80808099), url("${
          headTitles ? headTitles.img : homeHead
        }")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={`w-full pt-[80px] h-[100vh] relative object-cover bg-cover ${hidden} `}
    >
      <div
        className={`p-5 absolute top-[50%] left-[50%] w-full ${style.fCol} text-white -translate-y-[50%] -translate-x-[50%]`}
      >
        <h1 className="font-bold sm:text-[96px] text-[35px] text-center font-PlayFair w-full uppercase">
          {headTitles
            ? headTitles.title
            : buildingTitles?.title || "Spain House"}
        </h1>
        <p
          className={`${style.p} font-bold ${style.fCol} text-center max-w-[500px] w-full`}
        >
          {
            "РАССКАЖИТЕ НАМ, ЧТО ТАКОЕ ЖИЗНЬ ВАШЕЙ МЕЧТЫ, И МЫ НАЙДЕМ ЕЕ ДЛЯ ВАС"
          }
        </p>
      </div>
    </div>
  );
};

export default Head;
