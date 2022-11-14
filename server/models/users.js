const mongoose = require('mongoose');

const registerTemp = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        require:false
    },
    description:{
        type:String,
        require:false
    },
    date:{
        type:Date,
        default:Date.now
    }
});

/*registerTemp.path('email').validate(async(email) => {
    const emailCount =  await mongoose.model.User.countDocuments({email})
    return !emailCount
}, 'Email already exists');*/

const User = mongoose.model('users', registerTemp);
module.exports = User;