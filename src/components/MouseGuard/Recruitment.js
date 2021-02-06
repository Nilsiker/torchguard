
import { useEffect, useState } from "react"
import { Button, Col } from "react-bootstrap"
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
    "Weather Watcher": 0,
    Weaver: 0,
}

const skillInfo = {
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
    // #region States and handles
    const [step, setStep] = useState(1)
    /////// STEP 1
    // Concept
    const [concept, setConcept] = useState("")
    const handleConcept = (e) => {
        console.log("Concept: " + e.target.value)
        setConcept(e.target.value)
    }
    // Guard Rank 
    const [rank, setRank] = useState("Tenderpaw")
    const handleRank = (e) => {
        console.log("Rank: " + e.target.value)
        setRank(e.target.value)
    }
    // SKILLS
    const [skills, setSkills] = useState(skillset)
    /////// STEP 2
    // Where were you born?
    const [home, setHome] = useState("Barkstone")
    const handleHome = (e) => {
        console.log("Home:" + e.target.value)
        setHome(e.target.value)
    }
    //// Life experience
    // Pick an area in which you're naturally talented 
    const [talent, setTalent] = useState("Administrator")
    const handleTalent = (e) => {
        console.log("Talent: " + e.target.value)
        setTalent(e.target.value)
    }
    const [secondTalent, setSecondTalent] = useState("Apiarist")    // Tenderpaws and Guard Captains get two!
    const handleSecondTalent = (e) => {
        console.log("Second talent: " + e.target.value)
        setSecondTalent(e.target.value)
    }
    // What was your parents trade?
    const [parentTrade, setParentTrade] = useState("Apiarist")
    const handleParentTrade = (e) => {
        console.log("Parent trade: " + e.target.value)
        setParentTrade(e.target.value)
    }
    // How do you convince people that you're right or to do what you need?
    const [social, setSocial] = useState("Manipulator")
    const handleSocial = (e) => {
        console.log("Social skill: " + e.target.value)
        setSocial(e.target.value)
    }
    // With whom did you apprentice for the Guard? What was that mouse's trade?
    const [apprentice, setApprentice] = useState("Apiarist")
    const handleApprentice = (e) => {
        console.log("Apprentice skill: " + e.target.value)
        setApprentice(e.target.value)
    }
    // What did your mentor stress in training
    const [mentor, setMentor] = useState(mentorSkills[0])
    const handleMentor = (e) => {
        console.log("Mentor: " + e.target.value)
        setMentor(e.target.value)
    }
    // What's your specialty?
    const [specialty, setSpecialty] = useState(specialtySkills[0])
    const handleSpecialty = (e) => {
        console.log("Specialty: " + e.target.value)
        setSpecialty(e.target.value)
    }


    useEffect(() => {
        const newSkills = { ...skillset }
        Object.keys(ranks[rank].skills).forEach(skill => {
            newSkills[skill]++
        });
        // TODO add home selection
        newSkills[talent]++;
        //newTally[secondTalent]++;
        newSkills[parentTrade]++;
        newSkills[social]++;
        newSkills[apprentice]++;
        newSkills[mentor]++;
        newSkills[specialty]++;

        Object.keys(newSkills).forEach(skill => {
            if (newSkills[skill] > 0) newSkills[skill]++
        }, [rank, talent, parentTrade, social, apprentice, mentor, specialty]);


        console.log(newSkills)
        setSkills(newSkills)
    }, [rank, talent, parentTrade, social, apprentice, mentor, specialty])




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
    //#endregion

    return (<Col lg={6} className="mx-auto">
        {
            (step === 1 && <>
                <RecruitForm
                    title="Concept"
                    heading="Are you a grizzled veteran, a young upstart or something in between? What's your personality? What's your specialty?"
                    placeholder={concept.length !== 0 ? concept : "Write freely..."}
                    handle={handleConcept}
                    current={concept} />
            </>)
            || (step === 2 && <>
                <RecruitForm dropdown
                    title="Guard Rank"
                    heading="What level of experience or rank would you like to play?"
                    options={Object.keys(ranks)}
                    handle={handleRank}
                    current={rank}
                />
                <h2>{ranks[rank].info}</h2>
            </>)
            || (step === 3 && <>
                <RecruitForm dropdown
                    title="Home"
                    heading="In what town or city were you born?"
                    options={Object.keys(homes)}
                    handle={handleHome}
                    current={home}
                />
                <h2>{homes[home].info}</h2>
            </>)
            || (step === 4 && <>
                <RecruitForm dropdown
                    title="Skill"
                    heading="Pick an area in which you're naturally talented."
                    options={Object.keys(skillset)}
                    handle={handleTalent}
                    current={talent}
                />
                <p>{skillInfo[talent]}</p>
                {(rank === "Tenderpaw" || rank === "Guard Captain") &&
                    <><RecruitForm dropdown
                        title="Skill"
                        heading={"As a " + rank + ", you get an additional talent!"}
                        options={Object.keys(skillset)}
                        handle={handleSecondTalent}
                        current={secondTalent}
                    />
                        <p>{skillInfo[secondTalent]}</p>
                    </>
                }

            </>)
            || (step === 5 && <>
                <RecruitForm dropdown
                    title="Skill"
                    heading="What was your parents' trade?"
                    options={parentSkills}
                    handle={handleParentTrade}
                    current={parentTrade} />
                <p>{skillInfo[parentTrade]}</p>
            </>)
            || (step === 6 && <>
                <RecruitForm dropdown
                    title="Skill"
                    heading="How do you convince people that you're right or to do what you need?"
                    options={["Manipulator", "Orator", "Persuader"]}
                    handle={handleSocial}
                    current={social} />
                <p>{skillInfo[social]}</p>
            </>)
            || (step === 7 && <>
                <RecruitForm dropdown
                    title="Skill"
                    heading="With whom did you apprentice for the Guard? What was that mouse's trade?"
                    options={apprenticeSkills}
                    handle={handleApprentice}
                    current={apprentice} />
                <p>{skillInfo[apprentice]}</p>
            </>)
            || (step === 8 && <>
                <RecruitForm dropdown
                    title="Skill"
                    heading="What did your mentor stress during training?"
                    options={mentorSkills}
                    handle={handleMentor}
                    current={mentor} />
                <p>{skillInfo[mentor]}</p>
            </>)
            || (step === 9 && <>
                <RecruitForm dropdown
                    title="Skill"
                    heading="What's your specialty?"
                    options={specialtySkills}
                    handle={handleSpecialty}
                    current={specialty} />
                <p>{skillInfo[specialty]}</p>
            </>)
            || (step === 10 &&
                <>
                <h1>Skill Tally</h1>
                {Object.keys(skills).map(s => {
                    return skills[s] > 0 ? <h3>{s + " " + skills[s]}</h3> : <></>
                })
                }</>
            )
        }


        {step > 1 && <Button variant="secondary" onClick={() => setStep(step - 1)}>Previous</Button>}
        <Button variant="primary" onClick={() => setStep(step + 1)}>Next</Button>
    </Col >
    )
}

export default Recruitment