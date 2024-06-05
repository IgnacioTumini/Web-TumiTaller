import Router from "express";
import { getAppointment } from "../controllers/appointments/getAppointment.controller";
import { getAllAppointment } from "../controllers/appointments/getAllAppointments.controller";
import { createAppointment } from "../controllers/appointments/createAppointment.controller";
import { cancelAppointment } from "../controllers/appointments/cancelAppointments.controller";
import { validateAppointmentData } from "../middlewares/validateAppointment";

export const appointmentsRouter = Router();

appointmentsRouter.get("/", getAllAppointment);
appointmentsRouter.get("/:id", getAppointment);
appointmentsRouter.post(
  "/schedule",
  validateAppointmentData,
  createAppointment
);
appointmentsRouter.put("/cancel/:id", cancelAppointment);
