import { Request, Response } from "express";
import { getAllAppointmentService } from "../../services/appointments/getAllAppointments.service";

export const getAllAppointment= async (
  req: Request,
  res: Response
) => {
  try {
    const appointments = await getAllAppointmentService();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener turnos' });
  }
};
