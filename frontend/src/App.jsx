import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import DogItem from "./components/DogItem";
import Adoption from "./pages/Adoption";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/about" element={<About />} />
        <Route path="/adoption/:dogId" element={<DogItem />} />
      </Routes>
    </div>
  );
}

export default App;
