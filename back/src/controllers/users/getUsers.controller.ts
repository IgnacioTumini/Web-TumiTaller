import { Request, Response } from "express";
import { getAllUsersService } from "../../services/users/getAllUser.service";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios" });
  }
};
