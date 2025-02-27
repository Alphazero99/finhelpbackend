import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const LoginUser = mongoose.model('LoginUser', LoginSchema);

export default LoginUser;