import { AboutHouseInfo, HouseForm, SearchHouses } from "../components";

const AboutHouse = () => {
  return (
    <div className={`pt-[90px]`}>
      <SearchHouses />
      <AboutHouseInfo />
      <HouseForm />
    </div>
  );
};

export default AboutHouse;
