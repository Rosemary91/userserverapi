const model = require('../model/usermodel');

async function addUser(req,res) {
    try {
        await model.create(req.body);
        res.status(200).json({success: true,message: 'User has been created'});
    } catch (error) {
        res.status(404).json({message: error.message,success: false});
    }
}

async function getUsers(req, res) {
    try {
        const users = await model.find({});
        const threeusers = users.slice(0, 3);
        res.status(200).json({success: true,message:'Number of Users: '+users.length,data:threeusers});
    } catch (error) {
        res.status(404).json({message:error.message,success:false});
    }
}

module.exports = {addUser,getUsers};