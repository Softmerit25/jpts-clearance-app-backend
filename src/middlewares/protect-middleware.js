import jwt from "jsonwebtoken";
import userModel from "../models/user-models";

export const protectMiddleware = async (req, res, next)=>{
    try {
        const token = req.header('auth-token');

        if(!token){
            return res.status(404).json({error: 'No authorized token found!'});
        }

        let decoded;

        try {
            decoded = await jwt.compare(token, process.env.JWT_SECRET);
        } catch (error) {
            console.log('Error decoding user token' + error?.message);
        }

        if(!decoded){
            return res.status(401).json({error: "Invalid Token or malfunction token!"})
        }

        const user = await userModel.findOne({_id: decoded?.id});
        req.user = user;

        next();
    } catch (error) {
        console.log('Error in protectMiddleware' + error?.message);
    }
}