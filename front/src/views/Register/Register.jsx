import { validateRegister } from "../../helpers/validateRegister";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate(); // Inicializa useNavigate
  return (
    <>
      <div className="section-register">
        <div className="box-form">
          <Formik
            initialValues={{
              name: "",
              email: "",
              birthdate: "",
              nDni: "",
              username: "",
              password: "",
              confirmPassword: "",
            }}
            validate={validateRegister}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              try {
                // Realizar la solicitud POST para registrarse
                const response = await axios.post(
                  "http://localhost:3000/users/register",
                  {
                    name: values.name,
                    email: values.email,
                    birthdate: values.birthdate,
                    nDni: values.nDni,
                    username: values.username,
                    password: values.password,
                    confirmPassword: values.confirmPassword,
                  }
                );

                console.log("Respuesta del servidor:", response.data);
                alert("Usuario creado");
                navigate("/login");
              } catch (error) {
                alert("error al crear usuario");
                if (error.response && error.response.data) {
                  setErrors({ general: error.response.data.message }); // Muestra el mensaje de error recibido del servidor
                } else {
                  console.error("Error al registrar:", error.message);
                }
              } finally {
                setSubmitting(false); // Indica que se completó el envío
              }
            }}
          >
            <Form className="form">
              <p className="title">Register </p>
              <p className="message">
                Inicia sesion para tener el acceso completo a la Web!.
              </p>
              <Field
                className="input"
                type="text"
                name="name"
                placeholder="Nombre y Apellido"
                required
              />
              <ErrorMessage className="error" component="p" name="name" />
              <Field
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <ErrorMessage className="error" component="p" name="email" />
              <Field className="input" type="date" name="birthdate" required />
              <ErrorMessage className="error" component="p" name="birthdate" />
              <Field
                className="input"
                type="number"
                name="nDni"
                placeholder="Dni"
                required
              />
              <ErrorMessage className="error" component="p" name="email" />

              <Field
                className="input"
                type="text"
                name="username"
                placeholder="Usuario"
                required
              />
              <ErrorMessage className="error" component="p" name="username" />

              <Field
                className="input"
                type="password"
                name="password"
                placeholder="Contraseña"
                required
              />
              <ErrorMessage className="error" component="p" name="password" />
              <Field
                className="input"
                type="password"
                name="confirmPassword"
                placeholder="Confirme la contraseña"
                required
              />
              <ErrorMessage
                className="error"
                component="p"
                name="confirmPassword"
              />

              <button className="submit">Registrarse</button>
              <p className="signin">
                Ya tenes una cuenta? <Link to="/login">Inicia sesión</Link>{" "}
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Register;
