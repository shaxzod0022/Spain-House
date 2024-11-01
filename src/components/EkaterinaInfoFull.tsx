import { aboutBgImg, aboutImg, ekaterinaImg } from "../assets";
import { style } from "../util/styles";

const EkaterinaInfoFull = () => {
  return (
    <div
      className={`${style.fBetween} ${style.mediaPaddingAndWidth} py-10 flex-wrap`}
    >
      <div className={`md:w-[50%] w-full md:pr-5 mb-3`}>
        <p className={`${style.p} !text-btnBg mb-5`}>
          Я решил переехать в Испанию еще в 2008 году. Пройдя через Барселону,
          Мадрид и Валенсию, я наконец откр ыл для себя жизнь мечты, которой
          можно наслаждаться в Марбелье в 2012 году, и с тех пор не переезжала!
        </p>
        <p className={`${style.p} !text-btnBg mb-5`}>
          Имея опыт работы в секторе недвижимости в инвестиционно-банковской
          фирме, я понял, что моя обширная сеть контактов в этой области дает
          мне возможность добиться чего-то большего. Вступив в отрасль
          недвижимости в 2015 году, я получил шанс стать соучредителем компании
          Prime Realty Marbella в 2016 году, и с тех пор это безупречный успех!
        </p>
        <p className={`${style.p} uppercase !text-btnBg`}>
          LanguageS: RUSSIAN, English, Spanish.
        </p>
      </div>
      <div className={`md:w-[50%] w-full relative ${style.fCenter}`}>
        <img
          className=" z-0 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          src={aboutBgImg}
          alt=""
        />
        <img
          className="z-10 ml-3 sm:h-auto h-[262px] sm:w-auto w-full object-cover"
          src={ekaterinaImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default EkaterinaInfoFull;
