import { UserModel } from "../../config/data-source";
import UserDto from "../../dto/UserDto";
import { Credentials } from "../../entities/credentialEntitie";
import { User } from "../../entities/userEntitie";
import { createCredential } from "../credentials/createCredential.service";

// Función para crear un nuevo usuario
export const createUserService = async (userData: UserDto): Promise<User> => {
  try {
    const newCredentialsId: Credentials = await createCredential({
      username: userData.username,
      password: userData.password,
    });
    const result = await UserModel.save({
      name: userData.name,
      email: userData.email,
      birthdate: userData.birthdate,
      nDni: userData.nDni,
      credentials: newCredentialsId,
    });
    return result;
  } catch (error) {
    console.error("Error en createUserService:", error);
    throw new Error("Error al crear usuario");
  }
};
