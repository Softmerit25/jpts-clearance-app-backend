import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    profilePic: String,
    surname: {
        type: String,
        unique: true,
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
        unique: true,
    },
    matricno:{
        type: String,
        unique: true,
    },
    password: String,
    programme: String,
    course_of_study: String,
    study_centre: String,
    session: String,
    phone: {
        type: String,
        unique: true,
    },
    country: String,
    state: String,
    paymentDocuments: []
},
{
    timestamps: true,
})

const userModel = mongoose.models?.students || mongoose.model('Students', userSchema);
export default userModel;