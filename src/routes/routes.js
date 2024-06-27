import  {Router} from "express";
import authRoute from "./auth-router.js";
import usersRouter from "./users-router.js";

const router = Router();
router.use('/api/v1/auth', authRoute);
router.use('/api/v1/users', usersRouter);

export default router;