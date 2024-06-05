import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import MisTunros from "./views/MisTurnos/MisTurnos";
import CrearTurno from "./views/CrearTurno/CrearTurno";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/myAppointments" element={<MisTunros />} />
        <Route path="/createAppointment" element={<CrearTurno />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
