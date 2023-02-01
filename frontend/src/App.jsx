import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DogItem from "./components/DogItem";
import Adoption from "./pages/Adoption";
import About from "./pages/About";
import Admin from "./pages/Admin";
import EditDog from "./components/Admin/EditDog";
import AddDog from "./components/Admin/AddDog";
import AdminDogManagement from "./components/Admin/AdminDogManagement";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/about" element={<About />} />
        <Route path="/adoption/:dogId" element={<DogItem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dogs" element={<AdminDogManagement />} />
        <Route path="/admin/newdog" element={<AddDog />} />
        <Route path="/admin/editdog/:dogId" element={<EditDog />} />
      </Routes>
    </div>
  );
}

export default App;
