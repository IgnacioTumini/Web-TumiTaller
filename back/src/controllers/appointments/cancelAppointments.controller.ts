import { Request, Response } from "express";
import { cancelAppointmentService } from "../../services/appointments/cancelAppointment.service";

export const cancelAppointment = async (req: Request, res: Response) => {
  try {
    // Obtener el ID del appointment del parámetro de ruta
    const { id } = req.params;
    const appointmentId = parseInt(id);
    if (isNaN(appointmentId)) {
      // Si el ID no es un número, devuelve un error 400
      res.status(400).json({
        message: "ID del appointment debe ser un número",
      });
      return;
    }
    // Llamar al servicio para cancelar el appointment
    const updatedAppointment = await cancelAppointmentService(appointmentId);
    if (!updatedAppointment) {
      // Si el appointment no se encuentra, devolver 404
      res.status(404).json({
        message: "Appointment no encontrado",
      });
      return;
    }
    // Devolver el appointment cancelado como respuesta
    res.status(200).json({
      message: "Appointment cancelado con éxito",
      appointment: updatedAppointment,
    });
  } catch (error) {
    console.error("Error en el controlador de cancelación:", error);
    res.status(500).json({
      message: "Error al cancelar el appointment",
    });
  }
};
