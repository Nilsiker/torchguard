const jwt = require('jsonwebtoken')
const config = require('../utils/config')
const bcrypt = require('bcrypt')
const signupRouter = require('express').Router()
const User = require('../models/user')

signupRouter.post('/', async (request, response, next) => {
    const body = request.body
    try {
        const username = body.username
        const passwordHash = await bcrypt.hash(body.password, 10)
        const user = new User({
            username, passwordHash
        })
        const savedUser = await user.save()
        response.status(200).json(savedUser)
    } catch (error) {
        next(error)
    }
})

module.exports = signupRouter