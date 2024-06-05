import { Request, Response } from "express";
import { getUserByIdService } from "../../services/users/getUserById.service";

export const getUsersById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await getUserByIdService(parseInt(id, 10)); // indica la base numérica que se debe usar para esa conversión, es este caso 10 es decimal
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuario" });
  }
};
