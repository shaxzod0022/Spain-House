import { FC } from "react";
import { style } from "../util/styles";
import Button from "./Button";
import PhoneNum from "./PhoneNum";
interface props {
  formTitle?: string;
  formParagrph?: string;
}
const HouseForm: FC<props> = ({ formTitle, formParagrph }) => {
  return (
    <div className={`${style.mediaPaddingAndWidth} ${style.fCol} mb-10`}>
      <div className={`max-w-[845px] card_box_shadow w-full p-3`}>
        <div
          className={`border-2 border-btnBg ${style.fCol} gap-3  sm:p-7 p-3`}
        >
          <h2 className={`${style.h2} uppercase text-center`}>
            {formTitle ? formTitle : "Заинтересовал объект?"}
          </h2>
          <p className={`${style.p} !text-btnBg text-center`}>
            {formParagrph
              ? formParagrph
              : "Для получения дополнительной информации об этом объекте, пожалуйста, заполните форму ниже или позвоните нам."}
          </p>
          <PhoneNum phoneClass={`flex-col md:flex-row`} />
          <input
            className={`outline-none ${
              formTitle ? "hidden" : ""
            } border-2 border-btnBg p-3 md:w-[55%] w-full`}
            type="text"
            placeholder="Артикул: R3304693"
          />
          <input
            className="outline-none border-2 border-btnBg p-3 md:w-[55%] w-full"
            type="text"
            placeholder="Имя*"
          />
          <input
            className="outline-none border-2 border-btnBg p-3 md:w-[55%] w-full"
            type="text"
            placeholder="Email адрес*"
          />
          <input
            className="outline-none border-2 border-btnBg p-3 md:w-[55%] w-full"
            type="text"
            placeholder="Номер телефона"
          />
          <textarea
            name=""
            id=""
            placeholder="Сооющение*"
            maxLength={200}
            className="outline-none border-2 border-btnBg p-1 md:w-[55%] w-full"
          ></textarea>
          <div className={`${style.fArround} gap-2`}>
            <input type="checkbox" />
            <span>я принимаю политику конфиденциальности</span>
          </div>
          <Button title="отправить" newClass="uppercase" />
        </div>
      </div>
    </div>
  );
};

export default HouseForm;
