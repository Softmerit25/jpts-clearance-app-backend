import userModel from "../models/user-models.js"

export const studentClearanceData = async(req, res)=>{
        try {
          
        // find existing Student with request header details
        const existingStudent = await userModel.findByIdAndUpdate({_id: req.user.id});

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
        existingStudent.country = req.body.country || existingStudent.country;
        existingStudent.state = req.body.state || existingStudent.state;
        existingStudent.qualification = req.body.qualification || existingStudent.qualification;
        existingStudent.yearOneDocumentUpload = req.body.yearOneDocumentUpload || existingStudent.yearOneDocumentUpload,
        existingStudent.yearTwoDocumentUpload = req.body.yearTwoDocumentUpload || existingStudent.yearTwoDocumentUpload,
        existingStudent.yearThreeDocumentUpload = req.body.yearThreeDocumentUpload || existingStudent.yearThreeDocumentUpload,
        existingStudent.yearFourDocumentUpload = req.body.yearFourDocumentUpload || existingStudent.yearFourDocumentUpload,

        await existingStudent.save();

        res.status(200).json({message: 'Record saved successfully!'});

        } catch (error) {
            console.log('Error in student clearance form controller:' + error.message);
        res.status(500).json({error: 'Error in student clearance form controller: Internal Server Error:' + error.message}); 
        }
}