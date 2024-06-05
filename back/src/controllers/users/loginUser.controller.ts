import { Request, Response } from "express";
import { loginUserService } from "../../services/users/loginUser.service";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const loginInfo = await loginUserService(username, password);

    if (!loginInfo || !loginInfo.login) {
      res.status(400).json({
        login: false,
        message: "Nombre de usuario o contraseña incorrectos",
      });
      return;
    }

    res.status(200).json({ message: "Usuario logueado", loginInfo });
  } catch (error) {
    res.status(500).json({
      message: "Error en el controlador de login",
    });
  }
};
