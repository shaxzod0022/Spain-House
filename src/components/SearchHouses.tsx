import { useState } from "react";
import { nextTop, searchImg, spain } from "../assets";
import { searchType } from "../util/constants";
import { style } from "../util/styles";
import Button from "./Button";

const SearchHouses = () => {
  const [value, setValue] = useState<string>("Тип недвижимости");
  const [hidden, setHidden] = useState<string>("hidden");
  return (
    <div
      className={`${style.mediaPaddingAndWidth} lg:justify-between flex ${style.fCenter}  flex-wrap gap-1 bg-white py-7`}
    >
      <div
        className={`flex items-center gap-3 border-2 border-btnBg rounded-sm px-3 py-2 md:w-[45%] w-[100%]`}
      >
        <img src={searchImg} alt="" />
        <input
          className="w-full text-[18px] outline-none"
          type="text"
          placeholder="Артикул"
        />
      </div>
      <div
        onClick={() => setHidden((i) => (i === "hidden" ? "" : "hidden"))}
        className={`${style.fBetween} cursor-pointer relative border-2 border-btnBg rounded-sm px-3 py-2 md:w-[37%] w-[100%]`}
      >
        <span className={`${style.span} !text-[18px]`}>{value}</span>
        <img src={nextTop} alt="" />
        <ul
          className={`absolute left-0 top-11 ${style.fCol} !items-start bg-white  border-2 border-btnBg rounded-sm px-3 py-2 w-full ${hidden}`}
        >
          {searchType.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => setValue(item.title)}
                className={`${
                  item.id === searchType.length ? "" : "border-b-2"
                } border-btnBg w-full hover:bg-slate-200 p-1`}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
      <Button title="поиск" newClass="uppercase !py-3 " />
    </div>
  );
};

export default SearchHouses;
