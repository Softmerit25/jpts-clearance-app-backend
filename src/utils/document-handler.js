import { v2 as cloudinary } from "cloudinary";
import fs from 'fs-extra';

export const documentUploadHander = async (req, res) => {
        try {
            const file = req.file;
            const fName = file?.originalname;
  
            if(!file){
                 return res.status(404).json({error: "No file was uploaded!"});
              }
            
              const fileBuffer = fs.readFileSync(req.file.path);
             const base64String = fileBuffer.toString('base64');
          
              const fileToCloud = `data:${req.file.mimetype};base64,${base64String}`;

            cloudinary.config({
                api_key: "415386154583921",
                api_secret: "NbqRS_fpeJL6IrHofl6P36ipl8E",
                cloud_name:"softmerit",
            })

      
          const result = await cloudinary.uploader.upload(fileToCloud, {
            resource_type: "auto",
            public_id: `jpts/${fName}`,
          })
      
        res.status(200).json(result?.secure_url);
      
    } catch (error) {
       console.log("File Upload Error", error.message);
       res.status(500).json({error: error.message});
    }
}