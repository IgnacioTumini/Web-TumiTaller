import Router from "express";
import { getUsersById } from "../controllers/users/getUserById.controller";
import { createUser } from "../controllers/users/registerUser.controller";
import { loginUser } from "../controllers/users/loginUser.controller";
import { getAllUsers } from "../controllers/users/getUsers.controller";
import { validateRegister } from "../middlewares/validateRegister";

export const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUsersById);
userRouter.post("/register", validateRegister, createUser);
userRouter.post("/login", loginUser);
