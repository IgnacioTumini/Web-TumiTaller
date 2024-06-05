import { Request, Response } from "express";
import { createAppointmentService } from "../../services/appointments/createAppointments.service";

export const createAppointment = async (req: Request, res: Response) => {
  const { date, time, description, userId } = req.body;
  try {
    const newAppointment = await createAppointmentService({
      date,
      time,
      description,
      userId,
    });
    if (!newAppointment) {
      res.status(404).json("Error al crear el usuario");
    }
    res
      .status(201)
      .json({ Appointment: newAppointment, message: "Turno creado" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear turno" });
  }
};
