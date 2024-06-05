import { AppointmentsModel } from "../../config/data-source";
import { Appointments } from "../../entities/appointmetEntitie";

export const getAllAppointmentService = async (): Promise<Appointments[]> => {
  try {
    const appos = await AppointmentsModel.find({
      relations: { user: true },
    });
    return appos;
  } catch (error) {
    console.error("Error al obtener todas las citas:", error);
    throw new Error("Error al obtener todas las citas");
  }
};
