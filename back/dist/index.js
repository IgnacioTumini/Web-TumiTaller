"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server"));
var envs_1 = require("./config/envs");
server_1.default.listen(envs_1.PORT, function () {
    console.log("Server up on port ".concat(envs_1.PORT));
});
