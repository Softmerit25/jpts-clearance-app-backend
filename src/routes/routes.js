import  {Router} from "express";
import authRoute from "./auth-router.js";
import usersRouter from "./users-router.js";

const router = Router();
router.use('/auth', authRoute);
router.use('/users', usersRouter);

export default router;