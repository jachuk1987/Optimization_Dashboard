import "./App.css";

import SideBar from "./Components/SideBar";
import FrequencyTable from "./Components/FrequencyTable";
import HeaderBar from "./Components/HeaderBar";
import HeaderFilter from "./Components/HeaderFilter";
import RecommendationChart from "./Components/RecommendationChart";
import TrackedFrequency from "./Components/TrackedFrequency";
import { Routes, Route } from 'react-router-dom'
import LocationPage from "./LocationPage/LocationPage";
import ClockPage from "./ClockPage/ClockPage";
import Connexia from "./Connexia/Connexia";
function App() {
  return (
    <div className="flex h-screen bg-gray-900">


      <SideBar />

      {/* Main Content Section */}
      <div className="w-[96%] h-screen overflow-y-auto">
        <Routes>
          <Route path='/' />
          <Route path="/X" element={<Connexia />}/>
          <Route path='/Maps' element={<LocationPage />} />
          <Route path='/Clock' element={<ClockPage />} />

        </Routes>

        <HeaderBar />
        <HeaderFilter />
        <RecommendationChart />
        <FrequencyTable />
        <TrackedFrequency />

      </div>




    </div>

  );
}

export default App;

