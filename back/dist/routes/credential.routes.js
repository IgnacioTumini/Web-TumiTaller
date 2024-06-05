"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentialRouter = void 0;
var express_1 = __importDefault(require("express"));
var validate_credential_1 = require("../controllers/credentials/validate.credential");
exports.credentialRouter = (0, express_1.default)();
exports.credentialRouter.post("/validate", validate_credential_1.validateCredencial);
