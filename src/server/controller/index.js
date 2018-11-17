const userModel = require('../models/user.js')
const chalk = require('chalk')

module.exports = {

    // 查询用户列表
    async getList(req, res) {

        try {
            let data = await userModel.find({}, (err) => {
                if (err) {
                    console.log(chalk.red(`查询用户列表有误，${err}`))
                }
            });

            return res.send(data)
        } catch (e) {
            return req.sendError(e)
        }

    },

    // 添加用户
    async addUser(req, res) {
        let paramsData = req.query;
        try {
            let data = await userModel.create(paramsData);
            res.send(data)
        } catch (e) {
            req.sendError(e)
        }
    },
}