import userModel from "../models/user-models.js"


export const getUserInfo = async (req, res) =>{
    try {
        const existingStudent = await userModel.findOne({_id: req.user.id}).select("-password");

        if(!existingStudent){
            return res.status(404).json({error: "User not authenticated!"})
        }

        res.status(201).json(existingStudent);
    } catch (error) {
        console.log('Error in getting authenticated user info controller:' + error.message);
        res.status(500).json({error: error.message}); 
    }
}



export const getAllStudents = async (req, res) =>{
    try {
        const students = await userModel.find().select("-password");
        
        if(!students){
            return res.status(404).json({error: "Students not found!"})
        }

        res.status(201).json(students);
    } catch (error) {
        console.log('Error in getting all students controller:' + error.message);
        res.status(500).json({error: error.message}); 
    }
}



export const studentClearanceData = async(req, res)=>{
        try {

        let updatedRecord;

        // find existing Student with request header details
        const existingStudent = await userModel.findByIdAndUpdate({_id: req.user.id}).select('-password');

        if(!existingStudent){
            return res.status(404).json({error: 'No student found!'})
        }

        existingStudent.profilePic = req.body.profilePic || existingStudent.profilePic;
        existingStudent.surname = req.body.surname || existingStudent.surname;
        existingStudent.othernames = req.body.othernames || existingStudent.othernames;
        existingStudent.email = req.body.email || existingStudent.email;
        existingStudent.username = req.body.username || existingStudent.username;
        existingStudent.matricno = req.body.matricno || existingStudent.matricno;
     
        // clearance form fields
        existingStudent.programme = req.body.programme || existingStudent.programme;
        existingStudent.course_of_study = req.body.course_of_study || existingStudent.course_of_study;
        existingStudent.study_centre = req.body.study_centre || existingStudent.study_centre;
        existingStudent.session = req.body.session || existingStudent.session;
        existingStudent.phone = req.body.phone || existingStudent.phone;
        existingStudent.gender = req.body.gender || existingStudent.gender;
        existingStudent.country = req.body.country || existingStudent.country;
        existingStudent.state = req.body.state || existingStudent.state;
        existingStudent.qualification = req.body.qualification || existingStudent.qualification;
        existingStudent.yearOneDocumentUpload = req.body.yearOneDocumentUpload || existingStudent.yearOneDocumentUpload,
        existingStudent.yearTwoDocumentUpload = req.body.yearTwoDocumentUpload || existingStudent.yearTwoDocumentUpload,
        existingStudent.yearThreeDocumentUpload = req.body.yearThreeDocumentUpload || existingStudent.yearThreeDocumentUpload,
        existingStudent.yearFourDocumentUpload = req.body.yearFourDocumentUpload || existingStudent.yearFourDocumentUpload,

        updatedRecord = await existingStudent.save();

        res.status(200).json(updatedRecord);

        } catch (error) {
            console.log('Error in student clearance form controller:' + error.message);
        res.status(500).json({error: error.message}); 
        }
}