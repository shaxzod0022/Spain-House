import { useNavigate } from "react-router";
import { objekts } from "../util/constants";
import { style } from "../util/styles";

const BuildingHouses = () => {
  const navigate = useNavigate();

  return (
    <ul
      className={`${style.mediaPaddingAndWidth} ${style.fBetween} flex-wrap gap-5 py-5`}
    >
      {objekts.map((item) => {
        return (
          <li
            onClick={() => navigate(`/about_house/${item.id}`)}
            key={item.id}
            className="bg-white pb-3 w-full cursor-pointer sm:w-[45%] md:w-[30%] mb-6"
          >
            <div className="w-full h-[246px]">
              <img
                className="w-full h-full object-cover"
                src={item.img}
                alt=""
              />
            </div>
            <div className="p-4 w-full">
              <div className={`border-2 border-btnBg p-3 ${style.fCol}`}>
                <span className={`${style.span}`}>{item.span}</span>
                <p
                  className={`${style.p} text-center font-semibold !text-btnBg uppercase`}
                >
                  {item.title}
                </p>
                <strong>{item.price}</strong>
                <div className={`${style.fCenter} gap-7`}>
                  <span className={`${style.span}`}>Площадь: {item.field}</span>
                  <span className={`${style.span}`}>
                    Спальни: {item.bedrooms}
                  </span>
                </div>
                <span className={`${style.span}`}>{item.terrace}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default BuildingHouses;
