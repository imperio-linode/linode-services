"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const router_1 = __importDefault(require("../app/routes"));
const users_1 = __importDefault(require("../app/routes/account"));
const app = (0, express_1.default)();
// Setup
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
// Routes
app.use(router_1.default);
app.use('/users', users_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
exports.default = app;
