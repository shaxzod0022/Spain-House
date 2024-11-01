import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Head, Navbar } from "./components";
import {
  AboutHouse,
  Building,
  EkaterinaInfo,
  Home,
  Seconday,
  SelectedBuilding,
} from "./screens";
import Rent from "./screens/Rent";
import LantPlots from "./screens/LantPlots";

function Navigate() {
  return (
    <div className="max-w-[1440px] w-full m-auto">
      <BrowserRouter>
        <Navbar />
        <Head />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/buildings" element={<Building />} />
          <Route
            path="/selected_building/:buildingId"
            element={<SelectedBuilding />}
          />
          <Route path="/seconday" element={<Seconday />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/lant_plots" element={<LantPlots />} />
          <Route path="/about_house/:houseId" element={<AboutHouse />} />
          <Route path="/contact" element={<EkaterinaInfo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Navigate;
