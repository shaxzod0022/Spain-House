import { aboutBgImg, aboutImg } from "../assets";
import { style } from "../util/styles";

const AboutUs = () => {
  return (
    <div
      className={`${style.fBetween} ${style.mediaPaddingAndWidth} py-10 flex-wrap`}
    >
      <div className={`md:w-[50%] w-full md:pr-5 mb-3`}>
        <h2 className={`${style.h2} uppercase mb-5`}>О нас</h2>
        <p className={`${style.p} !text-btnBg mb-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu,
          feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tincidunt congue ligula in rutrum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed tincidunt congue ligula n rutrum.
          Morbi nec lacus condimentum, hendrerit mi eu, feugiat. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue
          ligula in rutrum.
        </p>
        <p className={`${style.p} uppercase !text-btnBg`}>
          будем рады помочь вам!
        </p>
      </div>
      <div className={`md:w-[50%] w-full relative ${style.fCenter}`}>
        <img
          className=" z-0 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          src={aboutBgImg}
          alt=""
        />
        <img className="z-10 ml-3 sm:h-auto h-[262px] sm:w-auto w-full object-cover" src={aboutImg} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
