import { ILogin } from "../../interfaces/ILogin";
import { validateCredential } from "../credentials/validate.service";
import { UserModel, CredentialsModel } from "../../config/data-source";

export const loginUserService = async (
  username: string,
  password: string
): Promise<ILogin | undefined> => {
  try {
    // Verificar las credenciales
    const validCredentials = await validateCredential(username, password);
    if (!validCredentials) {
      return {
        login: false,
        user: null,
      };
    }
    // Obtener las credenciales por el nombre de usuario
    const credentials = await CredentialsModel.findOne({ where: { username } });
    if (!credentials) {
      return {
        login: false,
        user: null,
      };
    }
    // Recuperar información del usuario por las credenciales
    const user = await UserModel.findOne({
      where: { credentials },
    });
    if (!user) {
      return {
        login: false,
        user: null,
      };
    }
    // Crear el objeto ILogin para devolver
    const loginInfo: ILogin = {
      login: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        nDni: user.nDni,
        credentials: user.credentials,
        appointments: user.appointments,
      },
    };
    return loginInfo;
  } catch (error) {
    console.error("Error en loginUserService:", error);
    return {
      login: false,
      user: null,
    };
  }
};
