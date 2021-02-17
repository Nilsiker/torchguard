export const hasSecondTalent = (rank) => {
    return (rank === "Tenderpaw" || rank === "Guard Captain")
}

export const isDefault = (choice) => {
    return choice === "Choose..."
}

export const defaultChoice = "Choose..."


export const ranks = {
    "Choose...": { info: "What level of experience or rank would you like to play? All have their benefits and drawbacks.", skills: [], abilities: {}, minAge: -1, maxAge: -1 },
    Tenderpaw: {
        info: "Tenderpaws are fresh recruits.",
        abilities: {
            Will: 2,
            Health: 6
        },
        skills: {
            "Choose...": -1,
            Pathfinder: 2,
            Scout: 2,
            Laborer: 2
        },
        minAge: 14,
        maxAge: 17
    },
    Guardmouse: {
        info: "Guardmice are the foot soldiers of the Guard.",
        abilities: {
            Will: 3,
            Health: 5
        },
        skills: {
            "Choose...": -1,
            Fighter: 3,
            Haggler: 2,
            Scout: 2,
            Pathfinder: 2,
            Survivalist: 2
        },
        minAge: 18,
        maxAge: 25
    },
    "Patrol Guard": {
        info: "Patrol guards are veteran guardmice responsible for complicated or independent missions.",
        abilities: {
            Will: 4,
            Health: 4
        },
        skills: {
            "Choose...": -1,
            Cook: 2,
            Fighter: 3,
            Hunter: 3,
            Healer: 2,
            Pathfinder: 2,
            Survivalist: 2,
            "Weather Watcher": 2
        },
        minAge: 21,
        maxAge: 50
    },
    "Patrol Leader": {
        info: "Patrol leaders are patrol guard who have demonstrated they can think independently and guide other mice.",
        abilities: {
            Will: 5,
            Health: 4
        },
        skills: {
            "Choose...": -1,
            Fighter: 3,
            Hunter: 3,
            Instructor: 2,
            Loremouse: 2,
            Persuader: 2,
            Pathfinder: 3,
            Survivalist: 3,
            "Weather Watcher": 2
        },
        minAge: 21,
        maxAge: 60
    },
    "Guard Captain": {
        info: "Guard captains are powerful mice appointed to the highest rank in the Guard due to their long-standing service and exemplary valor.",
        abilities: {
            Will: 6,
            Health: 3
        },
        skills: {
            "Choose...": -1,
            Administrator: 3,
            Fighter: 3,
            Healer: 2,
            Hunter: 3,
            Instructor: 2,
            Militarist: 3,
            Orator: 2,
            Pathfinder: 3,
            Scout: 3,
            Survivalist: 3,
            "Weather Watcher": 3
        },
        minAge: 41,
        maxAge: 60
    }
}

export const homes = {
    "Choose...": { info: "Choose a mouse town or city in which your character was born. Each city has its own culture as represented by the skills and traits it provides.", skills: [], traits: [] },
    Barkstone: {
        info: "A busy working-class town.",
        skills: [
            defaultChoice, "Carpenter", "Potter", "Glazier"
        ],
        traits: [
            defaultChoice, "Steady Paw"
        ]
    },
    Copperstone: {
        info: "One of the oldest cities and home to one of the two mines in the Territories.",
        skills: [
            defaultChoice, "Smith", "Haggler"
        ],
        traits: [
            defaultChoice, "Independent"
        ]
    },
    Elmoss: {
        info: "A once thriving city known for its medicinal moss.",
        skills: [
            defaultChoice, "Carpenter", "Harvester"
        ],
        traits: [
            defaultChoice, "Alert"
        ]
    },
    Ivydale: {
        info: "Renowned for its bakers and bread.",
        skills: [
            defaultChoice, "Harvester", "Baker"
        ],
        traits: [
            defaultChoice, "Hard Worker"
        ]
    },
    Lockhaven: {
        info: "The home of the Mouse Guard.",
        skills: [
            defaultChoice, "Weaver", "Armorer"
        ],
        traits: [
            defaultChoice, "Generous", "Guard's Honor"
        ]
    },
    "Port Sumac": {
        info: "A busy little port town between Darkwater and Rustleaf",
        skills: [
            defaultChoice, "Boatcrafter", "Weather Watcher"
        ],
        traits: [
            defaultChoice, "Tough", "Weather Sense"
        ]
    },
    "Shaleburrow": {
        info: "A simple town known for its delicious drinks!",
        skills: [
            defaultChoice, "Mason", "Harvester", "Miller"
        ],
        traits: [
            defaultChoice, "Open-Minded"
        ]
    },
    "Sprucetuck": {
        info: "Known for its scientists, medicine and scent concoctions.",
        skills: [
            defaultChoice, "Scientist", "Loremouse"
        ],
        traits: [
            defaultChoice, "Inquisitive", "Rational"
        ]
    }
}

export const skillset = {
    "Choose...": 0,
    Administrator: 0,
    Apiarist: 0,
    Archivist: 0,
    Armorer: 0,
    Baker: 0,
    Boatcrafter: 0,
    Brewer: 0,
    Carpenter: 0,
    Cartographer: 0,
    Cook: 0,
    Fighter: 0,
    Glazier: 0,
    Haggler: 0,
    Harvester: 0,
    Healer: 0,
    Hunter: 0,
    Insectrist: 0,
    Instructor: 0,
    Laborer: 0,
    Loremouse: 0,
    Manipulator: 0,
    Militarist: 0,
    Miller: 0,
    Orator: 0,
    Pathfinder: 0,
    Persuader: 0,
    Potter: 0,
    Scientist: 0,
    Scout: 0,
    Smith: 0,
    Stonemason: 0,
    Survivalist: 0,
    "Weather Watcher": 0,
    Weaver: 0,
}

export const skillInfo = {
    "Choose...": "Skill descriptions will be detailed here, once you choose one!",
    Administrator: "An administrator manages settlements, writes laws, allocates budgets, files reports and distributes resources.",
    Apiarist: "An apiarist raises bees for honey and wax.",
    Archivist: "An archivist specializes in writing and scouring accounts of events for historical records.",
    Armorer: "An armorer forges armor and weapons for the Guard and town militias.",
    Baker: "A baker makes bread, cookies and cakes.",
    Boatcrafter: "A boatcrafter can craft boats and navigate waterways.",
    Brewer: "A brewer makes beer and other drinks from grains and fruits.",
    Carpenter: "A carpenter makes items out of wood, like chairs, doors and ladders.",
    Cartographer: "A cartographer creates and interprets maps.",
    Cook: "A cook makes hunger go away with savoury dishes.",
    Fighter: "A fighter can disable or kill opponents, using their bare paws or weapons",
    Glazier: "A glazier makes glass vessels, window panes and lenses.",
    Haggler: "A haggler bargains over prices of goods and services.",
    Harvester: "A harvester make forays into the wilds to gather grains, seeds, roots, herbs and other necessities.",
    Healer: "A healer keeps mice whole and healthy.",
    Hunter: "A hunter stalks, traps, drives off and kills his quarry",
    Insectrist: "An insectrist uses and trains insects to act as labor, spin silk or aerate soil.",
    Instructor: "An instructor knows how to transmit skills to other mice.",
    Laborer: "A laborer gathers wood for carpenters, stone for masons and metal for smiths. They dig ditches and carry stuff.",
    Loremouse: "TODO",
    Manipulator: "TODO",
    Militarist: "TODO",
    Miller: "TODO",
    Orator: "TODO",
    Pathfinder: "TODO",
    Persuader: "TODO",
    Potter: "TODO",
    Scientist: "TODO",
    Scout: "TODO",
    Smith: "TODO",
    Stonemason: "TODO",
    Survivalist: "TODO",
    WeatherWatcher: "TODO",
    Weaver: "TODO",
}

export const parentSkills = [
    "Choose...",
    "Apiarist",
    "Archivist",
    "Armorer",
    "Baker",
    "Boatcrafter",
    "Brewer",
    "Carpenter",
    "Cartographer",
    "Glazier",
    "Harvester",
    "Insectrist",
    "Miller",
    "Potter",
    "Smith",
    "Stonemason",
    "Weaver"
]

export const socialSkills = [
    defaultChoice, "Manipulator", "Orator", "Persuader"
]

export const apprenticeSkills = [
    "Choose...",
    "Apiarist",
    "Archivist",
    "Armorer",
    "Baker",
    "Brewer",
    "Carpenter",
    "Cartographer",
    "Cook",
    "Glazier",
    "Harvester",
    "Healer",
    "Insectrist",
    "Laborer",
    "Miller",
    "Potter",
    "Smith",
    "Stonemason",
    "Weaver"
]

export const mentorSkills = [
    "Choose...",
    "Fighter",
    "Healer",
    "Hunter",
    "Instructor",
    "Pathfinder",
    "Scout",
    "Survivalist",
    "Weather Watcher"
]

export const specialtySkills = [
    ...mentorSkills
]

export const bornTraits = [defaultChoice,
    "Bigpaw",
    "Bitter",
    "Bodyguard",
    "Bold",
    "Brave",
    "Calm",
    "Clever",
    "Compassionate",
    "Cunning",
    "Curious",
    "Deep Ear",
    "Defender",
    "Determined",
    "Driven",
    "Early Riser",
    "Extrovert",
    "Fat",
    "Fearful",
    "Fearless",
    "Fiery",
    "Generous",
    "Graceful",
    "Guard's Honor",
    "Innocent",
    "Jaded",
    "Leader",
    "Longtail",
    "Lost",
    "Natural Bearings",
    "Nimble",
    "Nocturnal",
    "Oldfur",
    "Quick-Witted",
    "Quiet",
    "Scarred",
    "Sharp-Eyed",
    "Sharptooth",
    "Short",
    "Skeptical",
    "Skinny",
    "Stoic",
    "Stubborn",
    "Suspicious",
    "Tall",
    "Thoughtful",
    "Tough",
    "Weather Sense",
    "Wise",
    "Wolf's Snout",
    "Young"
]

export const parentTraits = [defaultChoice,
    "Bigpaw",
    "Brave",
    "Calm",
    "Clever",
    "Compassionate",
    "Curious",
    "Deep Ear",
    "Defender",
    "Determined",
    "Early Riser",
    "Extrovert",
    "Fearful",
    "Fearless",
    "Fiery",
    "Generous",
    "Graceful",
    "Longtail",
    "Lost",
    "Natural Bearings",
    "Nimble",
    "Quick-Witted",
    "Quiet",
    "Scarred",
    "Sharptooth",
    "Short",
    "Skeptical",
    "Skinny",
    "Stubborn",
    "Suspicious",
    "Tall",
    "Tough",
    "Wolf's Snout"
]

export const roadTraits = [
    defaultChoice,
    "Bitter",
    "Bodyguard",
    "Brave",
    "Calm",
    "Clever",
    "Compassionate",
    "Cunning",
    "Curious",
    "Defender",
    "Driven",
    "Early Riser",
    "Fearful",
    "Fearless",
    "Jaded",
    "Leader",
    "Natural Bearings",
    "Nocturnal",
    "Oldfur",
    "Quiet",
    "Scarred",
    "Sharp-Eyed",
    "Skeptical",
    "Skinny",
    "Stoic",
    "Thoughtful",
    "Tough",
    "Weather Sense",
    "Wise"
]

