export const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "El usuario es requerido";
  }

  if (!values.password) {
    errors.password = "La contraseña es requerida";
  }
  return errors;
};
