import { Router } from "express";
import { studentClearanceData } from "../controllers/users-controller.js";
import { protectMiddleware } from "../middlewares/protect-middleware.js";

const usersRouter = Router();
usersRouter.post('/student/clearance', protectMiddleware, studentClearanceData);
export default usersRouter;