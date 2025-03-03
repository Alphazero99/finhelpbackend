import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({
    path:"../.env"
})

const isAuthenticated = async (req,res,next) => {
    try {
        const {token} = req.body;
       
        if(!token){
            console.log("no token")
            return res.status(401).json({
                message:"User not authenticated.",
                success:false
            })
        }
        const decode = await jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decode.userId;
        next();
    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticated;