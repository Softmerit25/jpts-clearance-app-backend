import userModel from "../models/user-models.js";
import bcrypt from 'bcrypt';
import { generateLoginToken } from "../utils/generateToken.js";
import staffModel from "../models/staff-model.js";

export const registerStudent = async(req, res)=>{
    try {
        const { surname, othernames, email, username, matricno, password} = req.body;

        if(!surname || !othernames || !email || !username || !matricno || !password ){
            return res.status(404).json({error: "All fields required!"});
        }

        // check if password length is more than 4
        if(password.length <= 4){
            return res.status(401).json({error: "Password characters must be more than 4"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        // Check if student already have an account
        const existingUser =  await userModel.findOne({email: email});

        if(existingUser){
            return res.status(401).json({error: "Student already have an account!"})
        }


        // save user to database
        const student = new userModel({
            profilePic: `https://avatar.iran.liara.run/public`,
            surname, othernames, email, username, matricno, 
            password: hashedPassword
        })

        await student.save();

        res.status(200).json({message: "Student Registration Successful"});
    } catch (error) {
        console.log('Error in registering student controller:' + error.message);
        res.status(500).json({error: error.message});
    }
}




// student login
export const loginStudent = async(req, res)=>{
    try {
        const {matricno, password} = req.body;

        if(!matricno || !password ){
            return res.status(404).json({error: "All fields required!"})
        }

        // find an existing user with the matric no
        const existingStudent = await userModel.findOne({matricno: matricno});

        if(!existingStudent){
            return res.status(404).json({error: "No student existing with this matric number."})
        }
    
        // compare user password to that of database
        const comparePassword = await bcrypt.compare(password, existingStudent?.password);

        if(!comparePassword){
            return res.status(401).json({error: "Wrong Password!"})
        }

    const token = generateLoginToken(existingStudent?._id, existingStudent?.matricno);

    res.status(200).json(token);

    } catch (error) {
        console.log('Error in login student controller:' + error.message);
        res.status(500).json({error: error.message});
    }
}



// STAFF REGISTRATION
export const registerStaff = async(req, res)=>{
    try {
        const {staffId, surname, othernames, email, password} = req.body;

        if(!staffId || !surname || !email || !othernames || !password ){
            return res.status(404).json({error: "All fields required!"})
        }

        // check if password length is more than 4
        if(password.length <= 4){
            return res.status(401).json({error: "Password characters must be more than 4"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);


         // Check if user already have an account
         const existingStaff =  await staffModel.findOne({email: email});

         if(existingStaff){
             return res.status(401).json({error: "Staff already have an account!"})
         }


        // save user to database
        const staff = new staffModel({
            profilePic: `https://avatar.iran.liara.run/public`,
            staffId, surname, othernames, email, 
            password: hashedPassword
        })

        await staff.save();

        res.status(200).json("Staff Registration Successful");
    } catch (error) {
        console.log('Error in registering staff controller:' + error.message);
        res.status(500).json({error:error.message});
    }
}




// STAFF LOGIN
export const loginStaff = async(req, res)=>{
    try {
        const {staffId, password} = req.body;

        // find an existing user with the matric no
        const existingStaff = await staffModel.findOne({staffId: staffId});


        if(!existingStaff){
            return res.status(404).json({error: "No user existing with staff ID."})
        }
    
        // compare user password to that of database
        const comparePassword = bcrypt.compare(password, existingStaff?.password);

        if(!comparePassword){
            return res.status(401).json({error: "Wrong Password!"})
        }

    const token = generateLoginToken(existingStaff?._id, existingStaff?.staffId);

    res.status(200).json(token);

    } catch (error) {
        console.log('Error in registering staff controller:' + error.message);
        res.status(500).json({error: error.message});
    }
}
