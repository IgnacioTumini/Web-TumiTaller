import { AppointmentsModel } from "../../config/data-source";
import { Appointments } from "../../entities/appointmetEntitie";
import { IAppointment, StatusTypes } from "../../interfaces/IAppointment";

export const cancelAppointmentService = async (
  id: number
): Promise<Appointments | null> => {
  try {
    // Buscar el appointment por su ID
    const appointment = await AppointmentsModel.findOne({ where: { id: id } });
    if (!appointment) {
      return null;
    }
    // Cambiar el estado a `CANCELLED`
    appointment.status = StatusTypes.CANCELLED;
    // Guardar los cambios en la base de datos
    const updatedAppointment = await AppointmentsModel.save(appointment);
    return updatedAppointment;
  } catch (error) {
    console.error("Error al cancelar el appointment:", error);
    throw new Error("Error al cancelar el appointment");
  }
};
