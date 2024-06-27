import userModel from "../models/user-models.js";
import bcrypt from 'bcrypt';
import { generateLoginToken } from "../utils/generateToken.js";

export const registerStudent = async(req, res)=>{
    try {
        const {surname, othernames, email, username, matricno, password} = req.body;

        if(!surname || !othernames || !email || !username || !matricno || !password ){
            return res.status(404).json({error: "All fields required!"})
        }

        // check if password length is more than 4
        if(password.length <= 4){
            return res.status(401).json({error: "Password characters must be more than 5"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // save user to database
        const student = new userModel({
            profilePic: `https://avatar.iran.liara.run/public`,
            surname, othernames, email, username, matricno, 
            password: hashedPassword
        })

        await student.save();

        res.status(200).json("Registration Successful");
    } catch (error) {
        console.log('Error in registering student controller:' + error.message)
    }
}




// student login
export const loginiStudent = async(req, res)=>{
    try {
        const {matricno, password} = req.body;

        if(!matricno || !password ){
            return res.status(404).json({error: "All fields required!"})
        }

        // find an existing user with the matric no
        const existingUser = await userModel.findOne({matricno});

        if(!existingUser){
            return res.status(404).json({error: "No user existing with this matric number."})
        }
    
        // compare user password to that of database
        const comparePassword = await bcrypt.compare(password, existingUser?.password);

        if(!comparePassword){
            return res.status(401).json({error: "Wrong Password!"})
        }

    const token = generateLoginToken(existingUser?._id, existingUser?.matricno);

    res.status(200).json(token);

    } catch (error) {
        console.log('Error in registering student controller:' + error.message)
    }
}