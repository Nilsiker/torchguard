const GuardMouse = {
    name: "Sadie",
    birthYear: "1126",
    home: "Port Sumac",
    furColor: "Brown",
    guardRank: "Patrol Guard",
    cloakColor: "Plum",

    belief: "A guardmouse needs to be able to think with her head and act with her heart.",
    goal: "I will discover why Conrad's communications from Calogero have stopped.",
    instinct: "Never delay when on a mission.",

    contacts: {
        father: "Thane",
        mother: "Ilsa",
        seniorArtisan: "Quinn the Cook",
        mentor: "Leith",
        friend: "Bonnie the Innkeeper",
        enemy: "Shane the Trader",
        others: []
    },
    gear: ["sling", "stones", "a pair of well-balanced knives"],
    traits: ["Clever 1", "Tough 1"],

    fate: 1,
    persona: 1,

    conditions: {
        HungryThirsty: false,
        Angry: false,
        Tired: false,
        Injured: false,
        Sick: false
    },

    attributes: {
        Nature: "5/5",
        Will: 4,
        Health: 4,
        Resources: 2,
        Circles: 3
    },

    wises: [
        {
            name: "Coast-wise"
        },
        {
            name: "Herb-wise"
        }
    ],

    skills: {
        Administrator: 0,
        Archivist: 0,
        Apiarist: 0,
        Armorer: 0,
        Baker: 0,
        Boatcrafter: 3,
        Brewer: 0,
        Carpenter: 0,
        Cartographer: 0,
        Cook: 3,
        Fighter: 3,
        Glazier: 0,
        Haggler: 0,
        Harvester: 0,
        Healer: 2,
        Hunter: 3,
        Insectrist: 0,
        Instructor: 0,
        Laborer: 0,
        Loremouse: 0,
        Manipulator: 0,
        Militarist: 0,
        Miller: 0,
        Orator: 0,
        Pathfinder: 2,
        Persuader: 2,
        Potter: 0,
        Scientist: 0,
        Scout: 2,
        Smith: 0,
        Stonemason: 0,
        Survivalist: 4,
        WeatherWatcher: 3,
        Weaver: 0,
    }
}

export default GuardMouse