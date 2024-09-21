import { Router } from "express";
import { clearanceApproval, clearanceRejection, clearanceVerifcation, getAllStudents, getUserInfo, studentClearanceData } from "../controllers/users-controller.js";
import { protectMiddleware } from "../middlewares/protect-middleware.js";

const usersRouter = Router();
usersRouter.get('/student/me', protectMiddleware, getUserInfo);
usersRouter.post('/student/clearance', protectMiddleware, studentClearanceData);
usersRouter.get('/student/all-students', getAllStudents);
usersRouter.patch('/student/clearance/approve/:userId', clearanceApproval);
usersRouter.post('/student/clearance/reject/:userId', clearanceRejection);
usersRouter.post('/student/clearance/verify', clearanceVerifcation);
export default usersRouter;