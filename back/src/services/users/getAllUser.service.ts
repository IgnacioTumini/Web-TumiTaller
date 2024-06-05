import IUser from "../../interfaces/IUser";
import { UserModel } from "../../config/data-source";
import { User } from "../../entities/userEntitie";

export const getAllUsersService = async (): Promise<User[]> => {
  const users = await UserModel.find({
    relations: ["credentials", "appointments"],
  });
  return users;
};
