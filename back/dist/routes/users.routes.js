"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = __importDefault(require("express"));
var getUserById_controller_1 = require("../controllers/users/getUserById.controller");
var registerUser_controller_1 = require("../controllers/users/registerUser.controller");
var loginUser_controller_1 = require("../controllers/users/loginUser.controller");
var getUsers_controller_js_1 = require("../controllers/users/getUsers.controller.js");
exports.userRouter = (0, express_1.default)();
exports.userRouter.get("/", getUsers_controller_js_1.getAllUsers);
exports.userRouter.get("/:id", getUserById_controller_1.getUsersById);
exports.userRouter.post("/register", registerUser_controller_1.createUser);
exports.userRouter.post("/login", loginUser_controller_1.loginUser);
