import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DogItem from "./components/DogItem";
import Adoption from "./pages/Adoption";
import About from "./pages/About";
import Admin from "./pages/Admin";

import "./App.css";
import AddDog from "./components/Admin/AddDog";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/about" element={<About />} />
        <Route path="/adoption/:dogId" element={<DogItem />} />
        <Route path="/adminpanel" element={<Admin />} />
        <Route path="/addnewdog" element={<AddDog />} />
      </Routes>
    </div>
  );
}

export default App;
