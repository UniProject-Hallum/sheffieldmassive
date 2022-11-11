import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    username:String,
    password: String,
    role: { type: String, default: 'customer' },
});

const UserModel = mongoose.model("userModel",userSchema);

export default UserModel;