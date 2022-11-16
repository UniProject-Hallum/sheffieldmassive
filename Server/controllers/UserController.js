import { FindAllUsers,FindUserByID } from "../database/UserDAO.js";

const GetAllUsers =async (req, res) => {
    try {
        
        res.sendStatus(201).json({});
    }catch (e) {
        console.log(e)
    }
};



export {GetAllUsers}