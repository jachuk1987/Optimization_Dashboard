import "./App.css";

import SideBar from "./Components/SideBar";
import Dashboard from "./Components/Dashboard";
import FrequencyTable from "./Components/FrequencyTable";
import HeaderBar from "./Components/HeaderBar";
import HeaderFilter from "./Components/HeaderFilter";
import RecommendationChart from "./Components/RecommendationChart";
import TrackedFrequency from "./Components/TrackedFrequency";

// function App() {
//   return (
//     <div className="App">
//       <SideBar />
//       {/* <Dashboard /> */}
//       <HeaderFilter />
//       <HeaderBar />
//       <RecommendationChart />
//       <FrequencyTable />
//       <TrackedFrequency />
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import SideBar from "./SideBar";
// import HeaderBar from "./HeaderBar";
// import HeaderFilter from "./HeaderFilter";
// import RecommendationChart from "./RecommendationChart";
// import FrequencyTable from "./FrequencyTable";
// import TrackedFrequency from "./TrackedFrequency";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content Section */}
      <div className="w-[95%] h-screen overflow-y-auto">
        {/* Header */}
        <HeaderBar />

        {/* Filters Section */}
        <HeaderFilter />

        {/* Recommendation Chart */}
        <RecommendationChart />

        {/* Frequency Table */}
        <FrequencyTable />

        {/* Tracked Frequency */}
        <TrackedFrequency />
      </div>
    </div>
  );
};

export default App;
