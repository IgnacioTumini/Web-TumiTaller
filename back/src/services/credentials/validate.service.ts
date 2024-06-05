import { CredentialsModel } from "../../config/data-source";

export const validateCredential = async (
  username: string,
  password: string
): Promise<boolean | undefined> => {
  // Simulamos una operación asincrónica para buscar credenciales
  const foundCredentials = await CredentialsModel.findOneBy({ username });

  // Verifico si se encontraron credenciales y si la contraseña coincide
  if (!foundCredentials) {
    return false;
  }

  if (foundCredentials.password === password) {
    return true;
  }
};
