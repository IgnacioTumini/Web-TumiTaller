import { AppointmentsModel } from "../../config/data-source";
import { Appointments } from "../../entities/appointmetEntitie";

export const getAppointmentService = async (
  id: number
): Promise<Appointments | null> => {
  try {
    const appo = await AppointmentsModel.findOne({
      where: { id: id },
      relations: ["user"],
    }); // Busca el usuario por ID

    if (!appo) {
      return null; // Si el usuario no se encuentra, devuelve null
    }

    return appo; // Devuelve el usuario encontrado
  } catch (error) {
    console.error("Error al obtener usuario por ID:", error);
    throw new Error("Error al obtener usuario por ID");
  }
};
