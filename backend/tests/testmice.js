const chungo = {
    name: "Chungo",
    age: 21,
    home: "Sprucetuck",
    furColor: "Black",
    guardRank: "Tenderpaw",
    cloakColor: "Blue",
    parents: {
        skill: "Brewer",
        mother: "Andana",
        father: "Monsel"
    },
    seniorArtisan: {
        name: "Pentor",
        skill: "Carpenter"
    },
    mentor: {
        skill: "Weather Watcher",
        name: "Sivico"
    },
    friend: {
        skill: "Cook",
        name: "Truna"
    },
    enemy: {
        skill: "Stonemason",
        name: "Wellan"
    },
    belief: "I do what I must, even if my superiors disagree.",
    goal: "",
    instinct: "Always trust my gut regarding weather.",
    fate: 1,
    persona: 1,
    gear: ["A piece of string", "Sword and shield"],
    abilities: {
        nature: {
            max: 5,
            current: 5,
            pass: 0,
            fail: 0
        },
        will: {
            rating: 4,
            pass: 0,
            fail: 0
        },
        health: {
            rating: 4,
            pass: 0,
            fail: 0
        },
        resources: {
            rating: 2,
            pass: 0,
            fail: 0
        },
        circles: {
            rating: 3,
            pass: 0,
            fail: 0
        }
    },
    conditions: {
        hungryThirsty: false,
        angry: false,
        tired: false,
        injured: false,
        sick: false
    },
    skills: {
        Administrator: {
            rating: 3,
            pass: 0,
            fail: 0
        },
        Archivist: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Apiarist: {
            rating: 3,
            pass: 0,
            fail: 0
        },
        Armorer: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Baker: {
            rating: 4,
            pass: 0,
            fail: 0
        },
        Boatcrafter: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Brewer: {
            rating: 3,
            pass: 0,
            fail: 0
        },
        Carpenter: {
            rating: 2,
            pass: 0,
            fail: 0
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
            rating: 3,
            pass: 0,
            fail: 0
        },
        Survivalist: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        WeatherWatcher: {
            rating: 3,
            pass: 0,
            fail: 0
        },
        Weaver: {
            rating: Number,
            pass: Number,
            fail: Number
        }
    },
    wises: [{
        name: "Herb-wise",
        pass: false,
        fail: false,
        fate: false,
        persona: false
    }],
    traits: [{
        name: "Stout",
        level: 1,
        usedFor: false,
        usedAgainst: 0
    }],
    contacts: ["Kelpo the Fishermouse"]
}

const tatoss = {
    name: "Tatoss",
    age: 21,
    home: "Sprucetuck",
    furColor: "Black",
    guardRank: "Tenderpaw",
    cloakColor: "Blue",
    parents: {
        skill: "Brewer",
        mother: "Andana",
        father: "Monsel"
    },
    seniorArtisan: {
        name: "Pentor",
        skill: "Carpenter"
    },
    mentor: {
        skill: "Weather Watcher",
        name: "Sivico"
    },
    friend: {
        skill: "Cook",
        name: "Truna"
    },
    enemy: {
        skill: "Stonemason",
        name: "Wellan"
    },
    belief: "I do what I must, even if my superiors disagree.",
    goal: "",
    instinct: "Always trust my gut regarding weather.",
    fate: 1,
    persona: 1,
    gear: ["A piece of string", "Sword and shield"],
    abilities: {
        nature: {
            max: 5,
            current: 5,
            pass: 0,
            fail: 0
        },
        will: {
            rating: 4,
            pass: 0,
            fail: 0
        },
        health: {
            rating: 4,
            pass: 0,
            fail: 0
        },
        resources: {
            rating: 2,
            pass: 0,
            fail: 0
        },
        circles: {
            rating: 3,
            pass: 0,
            fail: 0
        }
    },
    conditions: {
        hungryThirsty: false,
        angry: false,
        tired: false,
        injured: false,
        sick: false
    },
    skills: {
        Administrator: {
            rating: 3,
            pass: 0,
            fail: 0
        },
        Archivist: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Apiarist: {
            rating: 3,
            pass: 0,
            fail: 0
        },
        Armorer: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Baker: {
            rating: 4,
            pass: 0,
            fail: 0
        },
        Boatcrafter: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        Brewer: {
            rating: 3,
            pass: 0,
            fail: 0
        },
        Carpenter: {
            rating: 2,
            pass: 0,
            fail: 0
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
            rating: 3,
            pass: 0,
            fail: 0
        },
        Survivalist: {
            rating: Number,
            pass: Number,
            fail: Number
        },
        WeatherWatcher: {
            rating: 3,
            pass: 0,
            fail: 0
        },
        Weaver: {
            rating: Number,
            pass: Number,
            fail: Number
        }
    },
    wises: [{
        name: "Herb-wise",
        pass: false,
        fail: false,
        fate: false,
        persona: false
    }],
    traits: [{
        name: "Stout",
        level: 1,
        usedFor: false,
        usedAgainst: 0
    }],
    contacts: ["Kelpo the Fishermouse"]
}

module.exports = {
    chungo,
    tatoss
}