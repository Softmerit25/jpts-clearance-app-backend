import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    profilePic: String,
    surname: {
        type: String,
        required: true,
    },
    othernames: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    matricno:{
        type: String,
        trim: true,
        required:true,
    },
    password:{
        type: String,
        required: true,
    },
    programme: {
        type: String,
         default: "",
         trim: true,
    },
    course_of_study:{
        type: String,
         default: "",
         trim: true,
    },
    study_centre: {
        type: String,
         default: "",
         trim: true,
    },
    session: {
        type: String,
         default: "",
         trim: true,
    },
    phone: {
        type: String,
         default:"",
         trim: true,
    },
    gender: {
        type: String,
        default:"",
        trim: true,
    },
    country: {
        type: String,
         default: "",
         trim: true,
    },
    state: {
        type: String,
        default: "",
        trim: true,
    },
    qualification: {
        type: String,
         default: "",
         trim: true,
    },
    yearOneDocumentUpload: {
        type: String,
         default: "",
         trim: true,
    },
    yearTwoDocumentUpload: {
        type: String,
         default: "",
         trim: true,
    },
    yearThreeDocumentUpload: {
        type: String,
         default: "",
         trim: true,
    },
    yearFourDocumentUpload: {
        type: String,
         default: "",
         trim: true,
    },
    certificateNo: {
        type: String,
        trim: true,
        default: "",
    },
    clearanceStatus: {
        type: String,
        enum: ["pending", "reject", "approved"],
        default: "pending",
        trim: true,
    },
    editable: {
        type: Boolean,
        default: true,
    }
},
{
    timestamps: true,
})

const userModel = mongoose.model('Students', userSchema);
export default userModel;