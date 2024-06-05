import { ErrorMessage, Field, Form, Formik } from "formik";
import "./CrearTurno.css";
import axios from "axios";
import { validateTurns } from "../../helpers/validateTurns";
import { useSelector } from "react-redux";
const CrearTurno = () => {
  const login = useSelector((state) => state.user.user);
  return (
    <>
      <div className="section-crear-turno">
        <div className="box-form-turn">
          <Formik
            initialValues={{ date: "", time: "", description: "" }}
            validate={validateTurns}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              try {
                // Realizar la solicitud POST para crear turno
                const response = await axios.post(
                  "http://localhost:3000/appointments/schedule",
                  {
                    date: values.date,
                    time: values.time,
                    description: values.description,
                    userId: login.user.id,
                  }
                );
                console.log("Respuesta del servidor:", response.data);
                alert("Turno creado");
              } catch (error) {
                alert("error al agendar el turno");
                if (error.response && error.response.data) {
                  setErrors({ general: error.response.data.message });
                } else {
                  console.error("Error al iniciar sesión:", error.message);
                }
              } finally {
                setSubmitting(false); // Indica que el envío ha finalizado
              }
            }}
          >
            <Form className="form-turn">
              <p className="title-turn">Agendar Turno </p>

              <Field className="input" type="date" name="date" required />
              <ErrorMessage className="error" component="p" name="date" />

              <Field className="input" type="time" name="time" required />
              <ErrorMessage className="error" component="p" name="time" />

              <Field
                className="input"
                type="textarea"
                name="description"
                placeholder="Descripcion"
                required
              />
              <ErrorMessage
                className="error"
                component="p"
                name="description"
              />

              <button className="submit">Agendar</button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default CrearTurno;
