import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    profilePic: String,
    surname: {
        type: String,
        trim: true,
    },
    othernames: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    username: {
        type: String,
        trim: true,
        unique: true,
    },
    matricno:{
        type: String,
        trim: true,
    },
    password: String,
    programme: String,
    course_of_study: String,
    study_centre: String,
    session: String,
    phone: String,
    country: String,
    state: String,
    qualification: String,
    yearOneDocumentUpload: String,
    yearTwoDocumentUpload: String,
    yearThreeDocumentUpload: String,
    yearFourDocumentUpload: String,
    certificateNo: {
        type: String,
        trim: true,
        unique: true,
    }
},
{
    timestamps: true,
})

const userModel = mongoose.model('Students', userSchema);
export default userModel;