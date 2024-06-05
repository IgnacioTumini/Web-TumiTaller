import { Router } from "express";
import { userRouter } from "./users.routes";
import { appointmentsRouter } from "./appointments.routes";
import { credentialRouter } from "./credential.routes";

const router = Router();

router.use("/users", userRouter);
router.use("/appointments", appointmentsRouter);
router.use("/credential", credentialRouter);

export default router;
