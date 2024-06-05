import axios from "axios";
import "./Login.css";
import { validate } from "../../helpers/validate";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        username: values.username,
        password: values.password,
      });
      dispatch(setUser(response.data.loginInfo)); // Despacha la acción setUser con el usuario obtenido del backend
      console.log("Respuesta del servidor:", response.data.loginInfo);
      alert("Usuario logueado");
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert("Error al iniciar sesión");
    } finally {
      setSubmitting(false); // Indica que el envío ha finalizado
    }
  };
  return (
    <>
      <div className="section-login">
        <div className="box-form-login">
          <Formik
            initialValues={{ username: "", password: "" }}
            validate={validate}
            onSubmit={handleSubmit}
          >
            <Form className="form-login">
              <p className="title">Login </p>
              <p className="message">
                Inicia sesion para tener el acceso completo a la Web!.
              </p>
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

              <button className="submit">Submit</button>

              <p className="signin">
                No tenes una cuenta? <Link to="/register">Registrarse</Link>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
