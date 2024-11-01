import { FC, useState } from "react";
import { lang } from "../util/constants";
import { style } from "../util/styles";
interface props {
  langClass?: string;
}
const Language: FC<props> = ({ langClass }) => {
  const [language, setLanguage] = useState<number>(1);
  return (
    <ul className={`${style.fIc} ${langClass} gap-2`}>
      {lang.map((item, idx) => {
        return (
          <li
            onClick={() => setLanguage(idx)}
            className={`${
              language === idx ? "border-2 border-btnBg px-1" : ""
            } cursor-pointer`}
            key={idx}
          >
            {item.toUpperCase()}
          </li>
        );
      })}
    </ul>
  );
};

export default Language;
