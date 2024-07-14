import multer from 'multer';

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        let fileExt = file.originalname.split(".").pop();
       
        const fileName = `${new Date.now().getTime()}.${fileExt}`;
        
      cb(null, fileName);
    }
  })
  
const upload = multer({ storage: storage }).single('file');

export default upload;