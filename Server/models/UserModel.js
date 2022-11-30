import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{ type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String, default: 'customer' },
    userInfo: {type: Object},
    
});

const UserModel = mongoose.model("userModel",userSchema);

export default UserModel;