import { useEffect, useState } from "react"
import { Modal, Button, Card, Col, Row, FormControl, Form, FormCheck } from "react-bootstrap"
import { Switch, Link, Route } from "react-router-dom"
import { HelpCircle } from "react-feather"
import LifeExperience from "../../components/MouseGuard/LifeExperience"
import NatureRecruitment from "../../components/MouseGuard/NatureRecruitment"
import RecruitForm from "../../components/MouseGuard/RecruitForm"
import TwoOption from "../../components/MouseGuard/TwoOption"
import { apprenticeSkills, homes, mentorSkills, parentSkills, ranks, skillInfo, skillset, specialtySkills, hasSecondTalent, isDefault, defaultChoice, socialSkills } from '../../models/MouseGuard/RecruitmentHelpers'
import WisesAndTraits from "../../components/MouseGuard/WisesAndTraits"


const Recruitment = () => {
    // #region States and onChanges
    const [step, setStep] = useState(1)
    const [rank, setRank] = useState(defaultChoice)
    const [home, setHome] = useState(defaultChoice)
    const [homeSkill, setHomeSkill] = useState(defaultChoice)
    const [homeTrait, setHomeTrait] = useState(defaultChoice)
    const [talent, setTalent] = useState(defaultChoice)
    const [secondTalent, setSecondTalent] = useState(defaultChoice)    // Tenderpaws and Guard Captains get two!
    const [parentTrade, setParentTrade] = useState(defaultChoice)
    const [fatherName, setFatherName] = useState("")
    const [motherName, setMotherName] = useState("")
    const [showFather, setShowFather] = useState(false)
    const [showMother, setShowMother] = useState(false)

    const [social, setSocial] = useState(defaultChoice)
    const [artisan, setArtisan] = useState(defaultChoice)
    const [artisanName, setArtisanName] = useState("")
    const [mentor, setMentor] = useState(defaultChoice)
    const [mentorName, setMentorName] = useState("")
    const [friendSkill, setFriendSkill] = useState(defaultChoice)
    const [friendName, setFriendName] = useState("")
    const [enemySkill, setEnemySkill] = useState(defaultChoice)
    const [enemyName, setEnemyName] = useState("")
    const [specialty, setSpecialty] = useState(defaultChoice)
    const [nature, setNature] = useState(3)
    const [natureFighterLoss, setFighterLoss] = useState([])
    const [nature1, setNature1] = useState(-1)
    const [nature2, setNature2] = useState(-1)
    const [nature3, setNature3] = useState(-1)

    const [wises, setWises] = useState([])                  // tender guard - 1, patrolguard 2, patrolleader 3, guardcap 4

    const [natureTrait1, setNatureTrait1] = useState("")
    const [natureTrait2, setNatureTrait2] = useState("")
    const [bornTrait, setBornTrait] = useState(defaultChoice)
    const [parentTrait, setParentTrait] = useState(defaultChoice)    // tenderpaws only
    const [roadTrait, setRoadTrait] = useState(defaultChoice)        // patrol leaders and guard captains
    const [circles, setCircles] = useState(1)
    const [resources, setResources] = useState(1)

    const [name, setName] = useState("")
    const [furColor, setFurColor] = useState("")
    const [cloakColor, setCloakColor] = useState("")
    const [belief, setBelief] = useState("")
    const [instinct, setInstinct] = useState("")
    const [gear, setGear] = useState([])
    const fate = 1
    const persona = 1
    const [skills, setSkills] = useState(skillset)
    //#endregion

    useEffect(() => {
        const newSkills = { ...skillset }
        Object.keys(ranks[rank].skills).forEach(skill => {
            newSkills[skill]++
        });
        newSkills[homeSkill]++;
        newSkills[talent]++;
        if (hasSecondTalent(rank)) newSkills[secondTalent]++;
        newSkills[parentTrade]++;
        newSkills[social]++;
        newSkills[artisan]++;
        newSkills[mentor]++;
        newSkills[specialty]++;

        Object.keys(newSkills).forEach(skill => {
            if (newSkills[skill] > 0) newSkills[skill]++
        }, [rank, talent, parentTrade, social, artisan, mentor, specialty]);


        console.log(newSkills)
        setSkills(newSkills)
    }, [rank, talent, secondTalent, homeSkill, parentTrade, social, artisan, mentor, specialty])

    return (<Card className="border-dark rounded-1 bg-common text-light mt-3">
        <FormControl onChange={(e) => setStep(e.target.value)} />
        <Switch>
            <Route exact path="/mg/recruit/">
                <Row className="mx-auto my-4 px-4">
                    <Col className="mx-auto">
                        <LifeExperience
                            states={{ step, rank, home, homeSkill, homeTrait, talent, secondTalent, parentTrade, social, artisan, artisanName, mentor, mentorName, friendSkill, friendName, enemySkill, enemyName, specialty }}
                            handles={{ setStep, setRank, setHome, setHomeSkill, setHomeTrait, setTalent, setSecondTalent, setParentTrade, setSocial, setArtisan, setArtisanName, setMentor, setMentorName, setFriendSkill, setFriendName, setEnemySkill, setEnemyName, setSpecialty, setResources, setCircles }}
                        />
                    </Col>
                    <Col>
                        <NatureRecruitment
                            states={{ step, nature1, nature2, nature3 }}
                            handles={{ setStep, setFighterLoss, setNature1, setNature2, setNature3 }} />
                        <Link to="/mg/recruit/wisestraits" className="no-decoration">
                            <Button block variant="" disabled={step < 13} className="btn-moss" size="lg" style={step < 13 ? { opacity: "5%" } : {}}>TO WISES & TRAITS</Button>
                        </Link>
                    </Col>
                </Row >
            </Route>
            <Route path="/mg/recruit/wisestraits">
                <WisesAndTraits
                    states={{ step, rank, nature1, nature3, natureTrait1, natureTrait2, bornTrait, parentTrait, roadTrait }}
                    handles={{ setWises, setNatureTrait1, setNatureTrait2, setBornTrait, setParentTrait, setRoadTrait }} />
            </Route>
            <Route path="/mg/recruit/names">
                <Link to="/mg/recruit/wisestraits" className="no-decoration">
                    <Button block variant="" disabled={step < 13} className="btn-red" size="lg" style={step < 13 ? { opacity: "5%" } : {}}>BACK TO WISES & TRAITS</Button>
                </Link>
                <Link to="/mg/recruit/preview" className="no-decoration">
                    <Button block variant="" disabled={step < 13} className="btn-moss" size="lg" style={step < 13 ? { opacity: "5%" } : {}}>PREVIEW</Button>
                </Link>
            </Route>
            <Route path="/mg/recruit/preview">
                <Link to="/mg/recruit/names" className="no-decoration">
                    <Button block variant="" disabled={step < 13} className="btn-red" size="lg" style={step < 13 ? { opacity: "5%" } : {}}>BACK TO NAMES</Button>
                </Link>
                <Link to="/characters" className="no-decoration">
                    <Button block variant="" disabled={step < 13} className="btn-moss" size="lg" style={step < 13 ? { opacity: "5%" } : {}}>CONFIRM</Button>
                </Link>
            </Route>
        </Switch>
    </Card>
    )
}

export default Recruitment