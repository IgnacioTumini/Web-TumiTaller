import { Request, Response } from "express";
import { validateCredential } from "../../services/credentials/validate.service";

export const validateCredencial = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const validId = await validateCredential(username, password);
    if (validId !== null) {
      res.status(200).json({ message: "Credenciales válidas", id: validId });
    } else {
      res.status(401).json({ message: "Credenciales no válidas" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al validar credenciales" });
  }
};
