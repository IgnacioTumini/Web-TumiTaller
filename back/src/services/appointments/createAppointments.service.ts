import { AppointmentsModel, UserModel } from "../../config/data-source";
import { AppointmentDTO } from "../../dto/AppointmentDto";
import { Appointments } from "../../entities/appointmetEntitie";

export const createAppointmentService = async (
  appo: AppointmentDTO
): Promise<Appointments> => {
  try {
    const newAppointment = AppointmentsModel.create(appo);
    await AppointmentsModel.save(newAppointment);

    //Relacion con el Usuario
    const user = await UserModel.findOneBy({ id: appo.userId });
    if (user) {
      newAppointment.user = user;
      AppointmentsModel.save(newAppointment);
    }
    return newAppointment;
  } catch (error) {
    console.error("Error al crear la cita:", error);
    throw new Error("Error al crear la cita");
  }
};
