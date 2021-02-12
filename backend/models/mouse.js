const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const mouseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    age: Number,
    home: String,
    furColor: String,
    guardRank: String,
    cloakColor: String,
    parents: {
        skill: String,
        mother: String,
        father: String
    },
    seniorArtisan: {
        name: String,
        skill: String
    },
    mentor: {
        skill: String,
        name: String
    },
    friend: {
        skill: String,
        name: String
    },
    enemy: {
        skill: String,
        name: String
    },
    belief: String,
    goal: String,
    instinct: String,
    fate: Number,
    persona: Number,
    gear: [String],
    abilities: {
        nature: {
            max: Number,
            current: Number,
            pass: Number,
            fail: Number
        },
        will: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        health: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        resources: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        circles: {
            rating: Number,
            pass: Number,
            fail: Number
        }
    },
    conditions: {
        hungryThirsty: Boolean,
        angry: Boolean,
        tired: Boolean,
        injured: Boolean,
        sick: Boolean
    },
    skills: {
        Administrator: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Archivist: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Apiarist: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Armorer: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Baker: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Boatcrafter: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Brewer: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Carpenter: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Cartographer: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Cook: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Fighter: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Glazier: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Haggler: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Harvester: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Healer: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Hunter: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Insectrist: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Instructor: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Laborer: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Loremouse: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Manipulator: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Militarist: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Miller: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Orator: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Pathfinder: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Persuader: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Potter: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Scientist: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Scout: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Smith: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Stonemason: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Survivalist: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        WeatherWatcher: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Weaver: {
            rating: Number,
            pass: Number,
            fail: Number
        }
    },
    wises: [{
        name: String,
        pass: Boolean,
        fail: Boolean,
        fate: Boolean,
        persona: Boolean
    }],
    traits: {
        name: String,
        level: Number,
        usedFor: Boolean,
        usedAgainst: Number
    },
    contacts: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

// mouseSchema.set('toJSON', {
//     transform: (document, returnedObject) => {
//         returnedObject.id = returnedObject._id.toString()
//         delete returnedObject._id
//         delete returnedObject.__v
//         delete returnedObject.passwordHash
//     }
// })

module.exports = mongoose.model('Mouse', mouseSchema)