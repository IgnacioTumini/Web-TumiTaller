import { Request, Response, NextFunction } from "express";

export const validateAppointmentData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date, time, description, userId } = req.body;
  // Verificar si todos los campos están presentes
  if (!date || !time || !description || !userId) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }
  // Validar que la fecha no sea en el pasado
  const selectedDate = new Date(date);
  const currentDate = new Date();
  if (selectedDate < currentDate) {
    return res
      .status(400)
      .json({ message: "La fecha no puede ser en el pasado" });
  }

  next();
};
