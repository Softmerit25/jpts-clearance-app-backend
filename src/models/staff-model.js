import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    profilePic: String,
    staffId: {
        type: String,
        unique: true,
        trim: true,
    },
    firstName: String,
    LastName: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
},{
    timestamps: true,
})

const staffModel = mongoose.model('Staffs', staffSchema);
export default staffModel;