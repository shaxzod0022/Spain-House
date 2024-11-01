import { aboutBgImg, ekaterinaImg } from "../assets";
import { style } from "../util/styles";
import Button from "./Button";

const EkaterinaInfo = () => {
  return (
    <div
      className={`${style.fBetween} ${style.mediaPaddingAndWidth} py-10 flex-wrap`}
    >
      <div className={`md:w-[50%] w-full relative ${style.fCenter}`}>
        <img
          className="z-0 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          src={aboutBgImg}
          alt=""
        />
        <img
          className="z-10 ml-3 sm:h-auto sm:w-auto w-full object-cover"
          src={ekaterinaImg}
          alt=""
        />
      </div>
      <div className={`md:w-[50%] w-full md:pl-5 mb-3`}>
        <h2 className={`${style.h2} uppercase mb-5 text-center`}>
          Екатерина Кузьмина
        </h2>
        <p className={`${style.p} !text-black mb-5 uppercase`}>
          Основатель компании <strong>Spain House</strong>, эксперт по
          недвижимости
        </p>
        <p className={`${style.p} !text-black mb-5`}>
          Планируете ли вы переехать в Марбелью или купить дом для отдыха, мы в
          3SA Estate внесем решающий вклад, поставив ваши уникальные потребности
          в центр внимания.
        </p>
        <p className={`${style.p} !text-btnBg uppercase mb-4`}>
          LanguageS: RUSSIAN, English, Spanish.
        </p>
        <Button
          title="контакты"
          newClass="uppercase sm:w-auto w-[100%] border-2 border-btnBg !bg-white !text-btnBg hover:!bg-slate-200"
        />
      </div>
    </div>
  );
};

export default EkaterinaInfo;
