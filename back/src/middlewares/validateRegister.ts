import { Request, Response, NextFunction } from "express";
import { CredentialsModel } from "../config/data-source";

const calculateAge = (birthdate: string): number => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};
export const validateRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, birthdate, nDni, username, password, confirmPassword } =
    req.body;
  const errors: Record<string, string> = {};
  // Validar nombre
  if (!name || name.trim() === "") {
    errors.name = "El nombre y apellido son requeridos.";
  } else if (name.length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres.";
  }
  // Validar email
  if (!email) {
    errors.email = "El email es requerido.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = "Formato de email inválido.";
  }
  // Validar fecha de nacimiento
  if (!birthdate) {
    errors.birthdate = "La fecha de nacimiento es requerida.";
  } else {
    const age = calculateAge(birthdate);
    if (age < 18) {
      errors.birthdate = "Debes ser mayor de edad para registrarte.";
    }
  }
  // Validar DNI
  if (!nDni) {
    errors.nDni = "El DNI es requerido.";
  } else if (nDni.length < 7) {
    errors.nDni = "El DNI debe tener al menos 7 dígitos.";
  }
  // Validar nombre de usuario
  if (!username) {
    errors.username = "El nombre de usuario es requerido.";
  } else if (username.length < 3) {
    errors.username = "El nombre de usuario debe tener al menos 3 caracteres.";
  } else {
    const existingUserByUsername = await CredentialsModel.findOneBy({
      username,
    });
    if (existingUserByUsername) {
      errors.username = "Ya existe un usuario con este nombre de usuario.";
    }
  }
  // Validar contraseña
  if (!password) {
    errors.password = "La contraseña es requerida.";
  } else if (password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres.";
  } else if (!/[A-Z]/.test(password)) {
    errors.password =
      "La contraseña debe contener al menos una letra mayúscula.";
  } else if (!/[0-9]/.test(password)) {
    errors.password = "La contraseña debe contener al menos un número.";
  }
  // Validar confirmación de contraseña
  if (!confirmPassword) {
    errors.confirmPassword = "La confirmación de la contraseña es requerida.";
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Las contraseñas no coinciden.";
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }
  next();
};
