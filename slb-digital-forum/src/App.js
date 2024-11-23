import "./App.css";

import SideBar from "./Components/SideBar";
import FrequencyTable from "./Components/FrequencyTable";
import HeaderBar from "./Components/HeaderBar";
import HeaderFilter from "./Components/HeaderFilter";
import RecommendationChart from "./Components/RecommendationChart";
import TrackedFrequency from "./Components/TrackedFrequency";
import { Routes, Route } from "react-router-dom";
import ClockPage from "./ClockPage/ClockPage";
import LocationPage from "./LocationPage/LocationPage";

function App() {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content Section */}
      <div className="w-[96%] h-screen overflow-y-auto">
        {/* Define Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HeaderBar />
                <HeaderFilter />
                <RecommendationChart />
                <FrequencyTable />
                <TrackedFrequency />
              </div>
            }
          />
          <Route path="/maps" element={<ClockPage />} />
          <Route path="/clock" element={<LocationPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
