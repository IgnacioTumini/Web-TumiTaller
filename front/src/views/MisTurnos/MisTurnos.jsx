import { useEffect, useState } from "react";
import Turno from "../../components/Turnos/Turnos";
import "./MisTurnos.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAppointment } from "../../redux/userSlice";

const MisTurnos = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.user.user);
  const initialValues = useSelector((state) => state.user.appointments);
  const [turnos, setTurnos] = useState(initialValues);

  const fetchUserAppointments = async () => {
    try {
      if (login) {
        const response = await axios.get(
          `http://localhost:3000/users/${login.user.id}`
        );
        setTurnos(response.data.appointments);
        dispatch(setAppointment(response.data.appointments));
      }
    } catch (error) {
      console.error("Error al obtener los turnos del usuario:", error.message);
    }
  };

  useEffect(() => {
    fetchUserAppointments();
  }, []);

  return (
    <div className="section-mis-turnos">
      <h1>Mis Turnos</h1>
      <div className="box-turnos">
        {turnos.length > 0 ? (
          turnos.map((turno) => (
            <Turno
              key={turno.id}
              id={turno.id}
              date={turno.date}
              time={turno.time}
              description={turno.description}
              status={turno.status}
              appointments
            />
          ))
        ) : (
          <p>No hay turnos registrados</p>
        )}
      </div>
    </div>
  );
};

export default MisTurnos;
