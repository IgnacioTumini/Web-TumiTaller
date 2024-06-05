"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentsRouter = void 0;
var express_1 = __importDefault(require("express"));
var getAppointment_controller_1 = require("../controllers/appointments/getAppointment.controller");
var getAllAppointments_controller_1 = require("../controllers/appointments/getAllAppointments.controller");
var createAppointment_controller_1 = require("../controllers/appointments/createAppointment.controller");
var cancelAppointments_controller_1 = require("../controllers/appointments/cancelAppointments.controller");
exports.appointmentsRouter = (0, express_1.default)();
exports.appointmentsRouter.get("/", getAllAppointments_controller_1.getAllAppointment);
exports.appointmentsRouter.get("/appointment", getAppointment_controller_1.getAppointment);
exports.appointmentsRouter.post("/appointment/schedule", createAppointment_controller_1.createAppointment);
exports.appointmentsRouter.put("/appointment/cancel", cancelAppointments_controller_1.cancelAppointment);
