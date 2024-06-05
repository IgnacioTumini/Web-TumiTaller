import { Request, Response } from "express";
import { getAppointmentService } from "../../services/appointments/getAppointment.service";

export const getAppointment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const appointment = await getAppointmentService(parseInt(id, 10));
    if (appointment) {
      res.status(200).json({ appointment, message: "Turno encontrado" });
    } else {
      res.status(404).json({ message: "Turno no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener turno" });
  }
};
