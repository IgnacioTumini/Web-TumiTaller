import Router from "express";
import { validateCredencial } from "../controllers/credentials/validate.credential";

export const credentialRouter = Router();

credentialRouter.post("/validate", validateCredencial);
