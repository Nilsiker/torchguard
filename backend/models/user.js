const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        unique: true
    },
    passwordHash: {
        type: String,
        minLength: 8,
        required: true
    },
    mice: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mouse'
    }]
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)