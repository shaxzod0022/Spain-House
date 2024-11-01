import { EkaterinaInfoFull, HouseForm } from "../components";

const EkaterinaInfo = () => {
  return (
    <>
      <EkaterinaInfoFull />
      <HouseForm
        formTitle="Нужна помощь?"
        formParagrph="Заполните форму ниже или позвоните мне"
      />
    </>
  );
};

export default EkaterinaInfo;
