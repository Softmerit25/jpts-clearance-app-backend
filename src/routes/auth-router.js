import { Router } from "express";
import { loginiStudent, registerStudent } from "../controllers/auth-controller.js";

const authRoute = Router();
authRoute.post("/register", registerStudent);
authRoute.post("/login", loginiStudent);
export default authRoute;