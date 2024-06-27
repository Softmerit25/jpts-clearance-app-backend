import jwt from 'jsonwebtoken';

export const generateLoginToken = (id, matricno)=>{
    try {
        const payload ={
            id,
            matricno
        }

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    return token;
    } catch (error) {
        console.log('Error in generating token util' + error.message);
    }
}