import { style } from "../util/styles";
import { buildings } from "../util/constants";
import { useNavigate } from "react-router";

const Buildings = () => {
  const navigate = useNavigate();
  const handleLink = (id: number): void => navigate(`/selected_building/${id}`);
  return (
    <ul
      className={`${style.mediaPaddingAndWidth} ${style.fBetween} flex-wrap gap-5`}
    >
      {buildings.map((item) => {
        return (
          <li
            key={item.id}
            className="bg-white pb-3 w-full sm:w-[45%] md:w-[30%] mb-6"
          >
            <div>
              <img className="w-full" src={item.img} alt="" />
            </div>
            <div className="px-6">
              <div
                onClick={() => handleLink(item.id)}
                className="border-2 p-3 cursor-pointer border-btnBg"
              >
                <h3
                  className={`${style.h3} w-full lg:!text-[20px] !text-[15px] text-center uppercase`}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Buildings;
