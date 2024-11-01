import { insta2 } from "../assets";
import { ekaterinaInsta } from "../util/constants";
import { style } from "../util/styles";
import Button from "./Button";

const Ekaterina = () => {
  return (
    <div className={`${style.mediaPaddingAndWidth} ${style.fCol}`}>
      <img src={insta2} alt="" />
      <h2 className={`${style.h2} uppercase !font-normal mt-2`}>Instagram</h2>
      <span>@realestate_spain_ekaterina</span>
      <ul
        className={`${style.fBetween} flex-wrap gap-5 w-full my-10 `}
      >
        {ekaterinaInsta.map((item) => {
          return (
            <li key={item.id} className={`w-full sm:w-[45%] md:w-[32%]`}>
              <img className="w-full" src={item.img} alt="" />
            </li>
          );
        })}
      </ul>
      <Button title="смотреть больше" newClass="uppercase mb-10" />
      <hr className="bg-btnBg w-full h-0.5" />
    </div>
  );
};

export default Ekaterina;
