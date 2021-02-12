const miceRouter = require('express').Router()
const Mouse = require('../models/mouse')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')


// get all mice
miceRouter.get('/', async (req, res, next) => {
    const mice = await Mouse.find({}).populate('user', '-mice')
    res.status(200).json(mice)
})

miceRouter.post('/', async (request, response, next) => {
    const body = request.body
    try {
        const decodedToken = jwt.verify(request.token, config.SECRET)
        if (!request.token || !decodedToken.id) {
            return response.status(401).json({ error: 'token missing or invalid' })
        }
        const user = await User.findById(decodedToken.id)

        const mouse = new Mouse({
            ...body,
            user: user
        })

        const savedMouse = await mouse.save()
        user.mice = user.mice.concat(savedMouse._id)
        await user.save()
        response.status(200).json(mouse)
    } catch (error) {
        next(error)
    }
})

miceRouter.delete('/:id', async (request, response, next) => {
    const body = request.body
    const mouse = await Mouse.findById(request.params.id)
    try {
        const decodedToken = jwt.verify(request.token, config.SECRET)
        if (!request.token || !decodedToken.id) {
            return response.status(401).json({ error: 'token missing or invalid' })
        }
        if (mouse.user.toString() === decodedToken.id) {
            await mouse.delete()
            response.status(200).end()
        } else {
            response.status(401).send('Cannot delete other users mice')
        }
    } catch (error) {
        next(error)
    }
})


module.exports = miceRouter