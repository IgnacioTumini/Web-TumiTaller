import { CredentialsModel } from "../../config/data-source";
import { CredentialDto } from "../../dto/CredentialDto";
import { Credentials } from "../../entities/credentialEntitie";

// Función para crear un nuevo par de credenciales
export const createCredential = async (
  credencialData: CredentialDto
): Promise<Credentials> => {
  try {
    const result = await CredentialsModel.save({
      username: credencialData.username,
      password: credencialData.password,
    });

    return result;
  } catch (error) {
    console.error("Error al obtener credenciales:", error);
    throw new Error("Error al obtener credenciales");
  }
};
