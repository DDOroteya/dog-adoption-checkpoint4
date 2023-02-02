import { Routes, Route } from "react-router-dom";
import { CurrentUserContextProvider } from "./contexts/userContext";
import { DogContextProvider } from "./contexts/DogContext";
import Home from "./pages/Home";
import DogItem from "./components/DogItem";
import Adoption from "./pages/Adoption";
import About from "./pages/About";
import EditDog from "./components/Admin/EditDog";
import AddDog from "./components/Admin/AddDog";
import Login from "./pages/Login";
import AdminDogsList from "./components/Admin/AdminDogsList";
import AdminUserList from "./components/Admin/AdminUsers/AdminUserList";
import AdminAdoptionsList from "./components/Admin/AdminAdoptions/AdminAdoptionsList";
import "./App.css";

function App() {
  return (
    <div>
      <CurrentUserContextProvider>
        <DogContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adoption" element={<Adoption />} />
            <Route path="/about" element={<About />} />
            <Route path="/adoption/:dogId" element={<DogItem />} />
            <Route path="/login" element={<Login />} />
            <Route path="admin/dogs" element={<AdminDogsList />} />
            <Route path="/admin/newdog" element={<AddDog />} />
            <Route path="/admin/editdog/:dogId" element={<EditDog />} />
            <Route path="admin/users" element={<AdminUserList />} />
            <Route path="admin/adoptions" element={<AdminAdoptionsList />} />
          </Routes>
        </DogContextProvider>
      </CurrentUserContextProvider>
    </div>
  );
}

export default App;
