import "./App.css";
import SearchFood from "./components/SearchFood";
import GetFruits from "./components/GetFruits";
import GetVegetables from "./components/GetVegetables";
import GetGrains from "./components/GetGrains";
import GetDairy from "./components/GetDairy";
import GetMeat from "./components/GetMeat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodCategories from "./components/home";
import NoPage from "./components/NoPage";

function App() {
  return (
    <div className="App">
      <div className="website-banner">Snack Track!</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchFood />}>
            <Route path="/fruits" element={<GetFruits />} />
            <Route path="/vegetables" element={<GetVegetables />} />
            <Route path="/fruits" element={<GetGrains />} />
            <Route path="/fruits" element={<GetDairy />} />
            <Route path="/fruits" element={<GetMeat />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
