const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

// get all users
usersRouter.get('/', (req, res, next) => {
    User.find({}).populate('mice', 'name')
        .then(users => {
            res.json(users)
        })
})

usersRouter.post('/', async (request, response, next) => {
    const body = request.body
    try {
        if (body.password.length < 3)
            return response.status(400).json({ error: 'password must be at least 3 characters' })

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password, saltRounds)

        const user = new User({
            username: body.username,
            passwordHash
        })

        await user.save()
        response.status(200).json(user)
    } catch (error) {
        next(error)
    }
})

module.exports = usersRouter