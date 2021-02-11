const miceRouter = require('express').Router()
const Mouse = require('../models/mouse')

// get all mice
miceRouter.get('/', async (req, res, next) => {
    const mice = await Mouse.find({})
    res.status(200).json(mice)
})

miceRouter.post('/', async (req, res, next) => {
    const body = req.body
    const mouseToAdd = new Mouse(body)
    

    try {
        await mouseToAdd.save()
        res.status(200).json(mouseToAdd)
    } catch (error) {
        next(error)
    }
})


module.exports = miceRouter