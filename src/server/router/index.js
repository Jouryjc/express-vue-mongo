const express = require('express')
const userModel = require('../controller/index')
const router = express.Router()

router.get('/list', (req, res) => {
    return userModel.getList(req, res)
})

router.get('/about', (req, res) => {
    res.send('About birds')
})

router.post('/', (req, res) => {
    return userModel.addUser(req, res)
})

module.exports = router