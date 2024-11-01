import { objekts } from "../util/constants";
import { style } from "../util/styles";
import Button from "./Button";

const Recommend = () => {
  return (
    <div className={`${style.mediaPaddingAndWidth} ${style.fCol}`}>
      <h2 className={`${style.h2} uppercase mb-5 text-center`}>
        Рекомендуемые объекты
      </h2>
      <p className={`${style.p} !text-btnBg max-w-[550px] text-center`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
        congue ligula in rutrum. Morbi ne lacus condimentum, hendrerit mi eu,
      </p>
      <ul className="card-grid w-full xl:grid flex flex-wrap mb-7">
        {objekts.map((item) => {
          return (
            <li key={item.id} className={`${style.fCol} card w-full `}>
              <div className="w-full">
                <img className="w-full object-cover" src={item.img} alt="" />
              </div>
              <div className="p-4 w-full">
                <div className={`border-2 border-btnBg p-3 ${style.fCol}`}>
                  <span className={`${style.span}`}>{item.span}</span>
                  <p
                    className={`${style.p} font-semibold !text-btnBg uppercase`}
                  >
                    {item.title}
                  </p>
                  <strong>{item.price}</strong>
                  <div className={`${style.fCenter} gap-7`}>
                    <span className={`${style.span}`}>
                      Площадь: {item.field}
                    </span>
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
      <Button title="весь каталог" newClass="uppercase mb-10" />
      <hr className="bg-btnBg w-full h-0.5"/>
    </div>
  );
};

export default Recommend;
