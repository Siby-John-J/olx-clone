const userModel = require('../model/userModel')

module.exports.getUser = async (req, res) => {
    const { username, password } = req.body
    const getusr = await userModel.findOne(
        {username: username, password: password}
    )
    if(getusr === null) {
        res.json({msg: 'no_user'})
    } else {
        const getusrAndUpdate = await userModel.findOneAndUpdate(
            {username: username, password: password},
            { $set: { isLogin: true } }
        )
        res.json({msg: 'user_exists'})
    }
}

module.exports.setUser = async(req, res) => {
    const { username, password } = req.body
    
    const getusr = await userModel.insertMany([{
        username: username,
        password: password,
        isLogin: false
    }])
    
    res.json({msg: 'created'})
}

module.exports.checkLogin = async(req, res) => {
    const getlogs = await userModel.findOne({isLogin: true})
    if(getlogs !== null) {
        res.json({msg: true})
    } else {
        res.json({msg: false})
    }
}

module.exports.logout = async(req, res) => {
    const getlogs = await userModel.findOneAndUpdate(
        { isLogin: true },
        { $set: { isLogin: false } }
    )
}