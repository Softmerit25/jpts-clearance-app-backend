import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    profilePic: String,
    surname: {
        type: String,
        trim: true,
        default: ''
    },
    othernames: {
        type: String,
        default:''
    },
    email: {
        type: String,
        unique: true,
        default: ''
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        default:''
    },
    matricno:{
        type: String,
        trim: true,
        default:''
    },
    password:{
        type: String,
        default: ''
    },
    programme: {
        type: String,
         default: '',
    },
    course_of_study:{
        type: String,
         default: '',
    },
    study_centre: {
        type: String,
         default: '',
    },
    session: {
        type: String,
         default: '',
    },
    phone: {
        type: String,
         default: '',
    },
    country: {
        type: String,
         default: '',
    },
    state: {
        type: String,
        default: '',
         default: '',
    },
    qualification: {
        type: String,
         default: '',
    },
    yearOneDocumentUpload: {
        type: String,
         default: '',
    },
    yearTwoDocumentUpload: {
        type: String,
         default: '',
    },
    yearThreeDocumentUpload: {
        type: String,
         default: '',
    },
    yearFourDocumentUpload: {
        type: String,
         default: '',
    },
    certificateNo: {
        type: String,
        trim: true,
        unique: true,
        default: '',
    }
},
{
    timestamps: true,
})

const userModel = mongoose.model('Students', userSchema);
export default userModel;