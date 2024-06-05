import PropTypes from "prop-types";
import "./Turnos.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cancelAppointment } from "../../redux/userSlice";
import { useState } from "react";

const Turno = ({ id, date, time, description, status }) => {
  const dispatch = useDispatch();
  const [appo, setAppo] = useState({ id, date, time, description, status });
  const handleCancel = async () => {
    try {
      // Realizar la solicitud PATCH para cambiar el estado del turno a "cancelado"
      const response = await axios.put(
        `http://localhost:3000/appointments/cancel/${id}`
      );
      dispatch(cancelAppointment(response.data.appointment));
      setAppo(response.data.appointment);
      // Aquí podrías actualizar la lista de turnos para reflejar el cambio
    } catch (error) {
      console.error("Error al cancelar el turno:", error.message);
      alert("Error al cancelar el turno");
    }
  };
  return (
    <div key={id} className="notification">
      <div className="notiglow"></div>
      <div className="notiborderglow"></div>
      <div className="notititle">
        <h2>{`Turno ${appo.id}`}</h2>
      </div>
      <div className=" notititle">
        <p>{`Fecha: ${appo.date}`}</p>
      </div>
      <div className="notititle">
        <p>{`Hora: ${appo.time}`}</p>
      </div>
      <div className="notititle">
        <p>{`Descripción: ${appo.description}`}</p>
      </div>
      <div className="notibody">
        <p>{`Estado:`}</p>
        <span
          className={
            appo.status === "cancelled"
              ? "notibody-status-cancelled"
              : "notibody-status-active"
          }
        >{`${appo.status}`}</span>
      </div>
      {appo.status !== "cancelled" && (
        <div className="notibody-boton ">
          <button onClick={handleCancel} className="boton-cancel">
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
};

Turno.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Turno;
