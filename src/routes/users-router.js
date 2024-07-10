import { Router } from "express";
import { getAllStudents, getUserInfo, studentClearanceData } from "../controllers/users-controller.js";
import { protectMiddleware } from "../middlewares/protect-middleware.js";

const usersRouter = Router();
usersRouter.get('/student/me', protectMiddleware, getUserInfo);
usersRouter.post('/student/clearance', protectMiddleware, studentClearanceData);
usersRouter.get('/student/all-students', getAllStudents);
export default usersRouter;