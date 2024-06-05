import "./NavBar.css";
import logo from "../../assets/logo-auto.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/userSlice";

function NavBar() {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.user.login);
  const handlerLogout = () => {
    alert("Sesion cerrada");
    dispatch(logoutUser());
  };
  return (
    <div className="Navbar-container">
      <div className="Navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo taller" className="logo" />
        </Link>
      </div>
      <div className="Navbar-links">
        <Link to="/" className="Navbar-letras">
          <span>Inicio</span>
        </Link>
        {!authenticated && (
          <Link to="/register" className="Navbar-letras">
            <span>Registrarse</span>
          </Link>
        )}

        {authenticated && (
          <Link to="/myAppointments" className="Navbar-letras">
            <span>Mis Turnos</span>
          </Link>
        )}

        {authenticated && (
          <Link to="/createAppointment" className="Navbar-letras">
            <span>Agendar Turno</span>
          </Link>
        )}
        {authenticated && (
          <Link to="/" onClick={handlerLogout} className="Navbar-letras">
            <span>Logout</span>
          </Link>
        )}
      </div>
      <div className="Navbar-avatar">
        <Link to="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            color="white"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M74.08 197.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m97.76 66.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75a88 88 0 1 1 131.52 0"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
