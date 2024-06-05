export const validateTurns = (values) => {
  const errors = {};
  // Validar campo de fecha
  if (!values.date) {
    errors.date = "La fecha es requerida";
  } else {
    // Validar que la fecha no sea en el pasado
    const selectedDate = new Date(values.date);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      errors.date = "La fecha no puede ser en el pasado";
    }
  }
  // Validar campo de hora
  if (!values.time) {
    errors.time = "La hora es requerida";
  }
  // Validar campo de descripción
  if (!values.description) {
    errors.description = "La descripción es requerida";
  }

  return errors;
};
