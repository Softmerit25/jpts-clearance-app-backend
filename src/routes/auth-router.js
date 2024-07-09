import { Router } from "express";
import { loginStudent, loginStaff, registerStaff, registerStudent } from "../controllers/auth-controller.js";

const authRoute = Router();
authRoute.post("/student/register", registerStudent);
authRoute.post("/student/login", loginStudent);

authRoute.post("/staff/register", registerStaff);
authRoute.post("/staff/login", loginStaff);

export default authRoute;