import { Request, Response } from "express";
import { createUserService } from "../../services/users/createUser.service";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, birthdate, nDni, username, password } = req.body;
  try {
    const newUser = await createUserService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    });
    if (newUser) {
      res.status(201).json({ user: newUser, message: "Usuario creado" });
    } else {
      res.status(400).json({ message: "Datos incorrectos" });
    }
  } catch (error) {
    res.status(404).json({ message: "Error al crear usuario", error: error });
  }
};
