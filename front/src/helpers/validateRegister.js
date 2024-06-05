export const validateRegister = (values) => {
  const errors = {};
  // Validar nombre y apellido
  if (!values.name || values.name.trim() === "") {
    errors.name = "El nombre y apellido son requeridos.";
  } else if (values.name.length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres.";
  }
  // Validar email
  if (!values.email) {
    errors.email = "El email es requerido.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Formato de email inválido.";
  }
  // Función para calcular la edad a partir de la fecha de nacimiento
  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  if (!values.birthdate) {
    errors.birthdate = "La fecha de nacimiento es requerida";
  } else {
    // Validar si el usuario es mayor de edad
    const age = calculateAge(values.birthdate);
    if (age < 18) {
      errors.birthdate = "Debes ser mayor de edad para registrarte";
    }
  }
  // Validar DNI
  if (!values.nDni) {
    errors.nDni = "El DNI es requerido.";
  } else if (values.nDni.length < 7) {
    errors.nDni = "El DNI debe tener al menos 7 dígitos.";
  }
  // Validar nombre de usuario
  if (!values.username) {
    errors.username = "El nombre de usuario es requerido.";
  } else if (values.username.length < 3) {
    errors.username = "El nombre de usuario debe tener al menos 3 caracteres.";
  }
  // Validar contraseña
  if (!values.password) {
    errors.password = "La contraseña es requerida.";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres.";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password =
      "La contraseña debe contener al menos una letra mayúscula.";
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = "La contraseña debe contener al menos un número.";
  }
  // Validar confirmación de contraseña
  if (!values.confirmPassword) {
    errors.confirmPassword = "La confirmación de la contraseña es requerida.";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Las contraseñas no coinciden.";
  }
  return errors;
};
