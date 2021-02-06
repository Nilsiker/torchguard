
import { useState } from "react"
import { Button, Col } from "react-bootstrap"
import { Route, Switch } from "react-router-dom"
import RecruitForm from "./RecruitForm"

const ranks = {
    Tenderpaw: {
        info: "Tenderpaws are fresh recruits.",
        abilities: {
            Will: 2,
            Health: 6
        },
        skills: {
            Pathfinder: 2,
            Scout: 2,
            Labourer: 2
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

const homes = {
    Barkstone: {
        info: "A busy working-class town.",
        skills: [
            "Carpenter", "Potter", "glazier"
        ],
        traits: [
            "Steady Paw"
        ]
    },
    Copperstone: {
        info: "One of the oldest cities and home to one of the two mines in the Territories.",
        skills: [
            "Smith", "Haggler"
        ],
        traits: [
            "Independent"
        ]
    },
    Elmoss: {
        info: "A once thriving city known for its medicinal moss.",
        skills: [
            "Carpenter", "Harvester"
        ],
        traits: [
            "Alert"
        ]
    },
    Ivydale: {
        info: "Renowned for its bakers and bread.",
        skills: [
            "Harvester", "Baker"
        ],
        traits: [
            "Hard Worker"
        ]
    },
    Lockhaven: {
        info: "The home of the Mouse Guard.",
        skills: [
            "Weaver", "Armorer"
        ],
        traits: [
            "Generous", "Guard's Honor"
        ]
    },
    "Port Sumac": {
        info: "A busy little port town between Darkwater and Rustleaf",
        skills: [
            "Boatcrafter", "Weather Watcher"
        ],
        traits: [
            "Tough", "Weather Sense"
        ]
    },
    "Shaleburrow": {
        info: "A simple town known for its delicious drinks!",
        skills: [
            "Mason", "Harvester", "Miller"
        ],
        traits: [
            "Open-Minded"
        ]
    },
    "Sprucetuck": {
        info: "Known for its scientists, medicine and scent concoctions.",
        skills: [
            "Scientist", "Loremouse"
        ],
        traits: [
            "Inquisitive", "Rational"
        ]
    }
}

const skillset = {
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
    WeatherWatcher: 0,
    Weaver: 0,
}

const parentSkills = [
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

const apprenticeSkills = [
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

const mentorSkills = [
    "Fighter",
    "Healer",
    "Hunter",
    "Instructor",
    "Pathfinder",
    "Scout",
    "Survivalist",
    "Weather Watcher"
]

const specialtySkills = [
    ...mentorSkills
]

const Recruitment = () => {
    const [step, setStep] = useState(1)
    /////// STEP 1
    // Concept
    const [concept, setConcept] = useState("")
    const handleConcept = (e) => {
        console.log(e.target.value)
        setConcept(e.target.value)
    }
    // Guard Rank 
    const [rank, setRank] = useState(ranks.Tenderpaw)
    const handleRank = (e) => {
        console.log(e.target.value)
        setRank(ranks[e.target.value])
    }
    // SKILLS
    const [skills, setSkills] = useState(skillset)
    const handleSkills = (e) => {
        // TODO probably last!
    }
    /////// STEP 2
    // Where were you born?
    const [home, setHome] = useState(homes["Barkstone"])
    const handleHome = (e) => {
        console.log(e.target.value)
        setHome(homes[e.target.value])
    }
    //// Life experience
    // Pick an area in which you're naturally talented 
    const [talent, setTalent] = useState("Administrator")
    const handleTalent = (e) => {
        console.log(e.target.value)
        setTalent(e.target.value)
    }
    // What was your parents trade?
    const [parentTrade, setParentTrade] = useState(null)
    // How do you convince people that you're right or to do what you need?
    const [social, setSocial] = useState(null)
    // With whom did you apprentice for the Guard? What was that mouse's trade?
    const [apprentice, setApprentice] = useState(null)
    // What did your mentor stress in training
    const [mentor, setMentor] = useState(null)
    // What's your specialty?
    const [specialty, setSpecialty] = useState(null)
    // Mouse nature
    const [nature, setNature] = useState(3)
    // Being wise (tender guard - 1, patrolguard 2, patrolleader 3, guardcap 4)
    const [wises, setWises] = useState([])
    // Guard Resources
    const [resources, setResources] = useState(1)
    // Guard Circles
    const [circles, setCircles] = useState(1)
    // Mouse Traits
    // Choose a quality you were born with (everyone)
    const [bornTrait, setBornTrait] = useState(null)
    // Choose something you learned or inherited from your parents (tenderpaws only)
    const [parentTrait, setParentTrait] = useState(null)
    // Life on the road (patrol leaders and guard captains)
    const [roadTrait, setRoadTrait] = useState(null)

    // Name
    const [name, setName] = useState("")
    // Fur color
    const [furColor, setFurColor] = useState("")
    // Parent name
    const [fatherName, setFatherName] = useState("")
    const [motherName, setMotherName] = useState("")
    // Senior Artisan name
    const [seniorName, setSeniorName] = useState("")
    // Mentor name
    const [mentorName, setMentorName] = useState("")
    // Friend name
    const [friendName, setFriendName] = useState("")
    const [enemyName, setEnemyName] = useState("")
    const [cloakColor, setCloakColor] = useState("")
    const [belief, setBelief] = useState("")
    const [instinct, setInstinct] = useState("")
    const [gear, setGear] = useState([])
    const fate = 1
    const persona = 1


    return (<Col className="mx-auto">
        {step === 1 &&
            <RecruitForm text
                title="Concept"
                subtext="Are you a grizzled veteran, a young upstart or something in between? What's your personality? What's your specialty?"
                onChange={handleConcept}
            />}
        {step === 2 && <>
            <RecruitForm dropdown
                title="Guard Rank"
                subtext="What level of experience or rank would you like to play?"
                options={Object.keys(ranks)}
                onChange={handleRank}
            />
            <h2>{rank.info}</h2>
        </>
        }
        {step === 3 && <>
            <RecruitForm dropdown
                title="Where were you born?"
                subtext="Choose a mouse town or city in which your character was born."
                options={Object.keys(homes)}
                onChange={handleHome}
            />
            <h2>{home.info}</h2>
        </>
        }
        {step === 4 && <>
            <RecruitForm buttons
                title="Pick an area in which you're naturally talented."
                subtext="Tenderpaws and guard captains choose two. Guardmice, patrol guard and patrol leaders choose one."
                options={Object.keys(skillset)}
                onChange={handleTalent}
                limit={(rank === "Tenderpaw" || rank === "Guard Captain") ? 2 : 1}
            />
            <h2>{home.info}</h2>
        </>}

        {step > 1 && <Button variant="secondary" onClick={() => setStep(step - 1)}>Previous</Button>}
        <Button variant="primary" onClick={() => setStep(step + 1)}>Next</Button>
    </Col >
    )
}

export default Recruitment