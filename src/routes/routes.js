import  express, {Router} from "express";
import authRoute from "./auth-router.js";
import usersRouter from "./users-router.js";
import { documentUploadHander } from "../utils/document-handler.js";
import multer from "multer";
import { fileURLToPath } from 'url';
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();


const storage = multer.diskStorage({
    // destination: function (req, file, cb) {
    //   cb(null, './src/uploads'); 
    // },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
 const upload = multer({ storage: storage });

router.use('/auth', authRoute);
router.use('/users', usersRouter);
router.use('/documents', express.static(path.join(__dirname, '../uploads')));
// HANDLE FILE UPLOAD
router.post('/uploader', upload.single('file'), documentUploadHander);

export default router;