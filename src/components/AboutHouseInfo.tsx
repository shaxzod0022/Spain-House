import { useParams } from "react-router";
import { amenities, objekts } from "../util/constants";
import { style } from "../util/styles";

const AboutHouseInfo = () => {
  const { houseId } = useParams();
  let house = objekts.find((item) => item.id === Number(houseId));
  let imgs = [];
  for (let i = 1; i <= 6; i++) {
    imgs.push(i);
  }

  return (
    <div className={`${style.mediaPaddingAndWidth} mb-5`}>
      <div
        className={`${style.fBetween} !items-start gap-3 w-full flex-wrap mb-10`}
      >
        <div className="md:w-[70%] w-full">
          <div>
            <img className="w-full" src={house?.img} alt="" />
          </div>
          <ul className="w-full  flex-wrap flex gap-3 px-3">
            {imgs.map((item) => {
              return (
                <li key={item} className="w-[15%]">
                  <img src={house?.img} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
        <ul
          className={`${style.fCol} box-shadow-saidBar items-start md:w-[25%] w-full`}
        >
          <li className="w-full">
            <h2 className={`${style.h2} text-center p-2 !text-white !bg-btnBg`}>
              € 4,192,000
            </h2>
          </li>
          {amenities.map((item) => {
            return (
              <li
                key={item.id}
                className={`w-full ${style.fBetween} lg:p-2.5 p-1 ${
                  item.id === amenities.length ? "" : "border-b-2"
                }`}
              >
                <p>{item.title}</p>
                <span>{item.info}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <h3 className={`${style.h3} uppercase mb-3`}>описание</h3>
      <p className={`${style.p} !text-btnBg`}>
        Новая разработка: цены от € & nbsp; 386 000 до € & nbsp; 578 000.
        [Кровати: 2–2] [Ванны: 2–3] [Застроенная площадь: 80,00 м2 - 104,00 м2]
        Дом, в котором вы всегда хотели жить, предлагая лучшее из всего. Это
        развитие является частью прекрасно созданного жилого района с полностью
        функционирующими общими частями. Он состоит из 32 домов с двумя и тремя
        спальнями, включая пентхаусы и просторные сады, общественные бассейны и
        поля для гольфа, расположенные в непосредственной близости от комплекса.
        Сделайте большую часть просторных, фантастических мест общего
        пользования с садами для взрослых. и детские бассейны с деревянными
        зонтиками, детская игровая площадка, корты для паддл-тенниса и
        тренажерный зал. Михас - город, расположенный в провинции Малага, в
        самом сердце Коста-дель-Соль, со старым кварталом, в котором есть все
        очарование традиционной андалузской деревни. Там вы сможете насладиться
        привлекательными произведениями архитектуры, такими как часовня
        Вирхен-де-ла-Пенья, городские стены с руинами замка и бесконечный список
        других достопримечательностей. Но не только это. Михас предлагает все,
        что вам может понадобиться, потому что, помимо того, что он расположен у
        подножия холмов Михас, он также имеет невероятные пляжи и предлагает
        один из лучших выборов полей для гольфа в этом районе. Это идеальное
        место для любителей этого вида спорта.
      </p>
    </div>
  );
};

export default AboutHouseInfo;
