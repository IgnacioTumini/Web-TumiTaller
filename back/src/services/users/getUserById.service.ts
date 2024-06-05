import { UserModel } from "../../config/data-source";
import { User } from "../../entities/userEntitie";

// Función para obtener un usuario por su ID
export const getUserByIdService = async (id: number): Promise<User | null> => {
  try {
    const user = await UserModel.findOne({
      where: { id: id },
      relations: ["credentials", "appointments"],
    }); // Busca el usuario por ID

    if (!user) {
      return null; // Si el usuario no se encuentra, devuelve null
    }

    return user; // Devuelve el usuario encontrado
  } catch (error) {
    console.error("Error al obtener usuario por ID:", error);
    throw new Error("Error al obtener usuario por ID");
  }
};
