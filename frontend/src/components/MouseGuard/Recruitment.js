
import { useEffect, useState } from "react"
import { Modal, Button, Card, Col, Row, FormControl, Form, FormCheck } from "react-bootstrap"
import { HelpCircle } from "react-feather"
import InfoPane from "./InfoPane"
import NamePrompt from "./NamePrompt"
import RecruitForm from "./RecruitForm"
import { apprenticeSkills, homes, mentorSkills, parentSkills, ranks, skillInfo, skillset, specialtySkills, hasSecondTalent, isDefault, defaultChoice, socialSkills } from './RecruitmentHelpers'
import TwoOption from "./TwoOption"


const Recruitment = () => {
    // #region States and onChanges
    const [step, setStep] = useState(1)

    const [rank, setRank] = useState(defaultChoice)
    const handleRank = (e) => {
        console.log(e.target.value)
        if (isDefault(e.target.value)) {
            setStep(1)
        }
        else
            setShowRank(true)
        setRank(e.target.value)
    }

    const [home, setHome] = useState(defaultChoice)
    const [homeSkill, setHomeSkill] = useState(defaultChoice)
    const [homeTrait, setHomeTrait] = useState(defaultChoice)
    const handleHome = (e) => {
        console.log(e.target.value)

        if (isDefault(e.target.value)) {
            setHomeSkill(defaultChoice)
            setHomeTrait(defaultChoice)
            setStep(2)
        }
        else
            setShowHome(true)
        setHome(e.target.value)
    }

    const [talent, setTalent] = useState(defaultChoice)
    const [secondTalent, setSecondTalent] = useState(defaultChoice)    // Tenderpaws and Guard Captains get two!

    const [parentTrade, setParentTrade] = useState(defaultChoice)
    const [fatherName, setFatherName] = useState("")
    const [motherName, setMotherName] = useState("")
    const [showFather, setShowFather] = useState(false)
    const [showMother, setShowMother] = useState(false)
    const handleParents = (e) => {
        console.log(e.target.value)

        if (isDefault(e.target.value)) {
            setStep(3)
            setFatherName("")
            setMotherName("")
        } else {
            setShowFather(true)
            setStep(4)
        }
        setParentTrade(e.target.value)
    }

    const [social, setSocial] = useState(defaultChoice)
    const handleSocial = (e) => {
        console.log(e.target.value)
        if (isDefault(e.target.value)) {
            setStep(4)
        }
        else
            setStep(5);
        setSocial(e.target.value)
    }

    const [artisan, setArtisan] = useState(defaultChoice)
    const [showArtisan, setShowArtisan] = useState(false)
    const [artisanName, setArtisanName] = useState("")
    const handleArtisan = (e) => {
        console.log(e.target.value)
        if (isDefault(e.target.value)) {
            setStep(5)
            setArtisanName(defaultChoice)
        }
        else
            setStep(6)
        setArtisan(e.target.value)
    }

    const [mentor, setMentor] = useState(defaultChoice)
    const [mentorName, setMentorName] = useState("")
    const [showMentor, setShowMentor] = useState(false)
    const handleMentor = (e) => {
        console.log(e.target.value)
        if (isDefault(e.target.value)) {
            setStep(6)
            setMentorName(defaultChoice)
        }
        else
            setStep(7)
        setMentor(e.target.value)
    }

    const [friendSkill, setFriendSkill] = useState(defaultChoice)
    const [friendName, setFriendName] = useState("")
    const handleFriend = (e) => {
        console.log(e.target.value)
        if (isDefault(e.target.value)) {
            setStep(7)
        }
        else
            setStep(8)
        setFriendSkill(e.target.value)
    }

    const [enemySkill, setEnemySkill] = useState(defaultChoice)
    const [enemyName, setEnemyName] = useState("")
    const handleEnemy = (e) => {
        console.log(e.target.value)
        if (isDefault(e.target.value)) {
            setStep(8)
        }
        else
            setEnemySkill(e.target.value)
        setStep(rank !== "Tenderpaw" ? 9 : 10)
    }

    const [specialty, setSpecialty] = useState(defaultChoice)
    const handleSpecialty = (e) => {
        console.log(e.target.value)
        if (isDefault(e.target.value)) {
            setStep(9)
        }
        else
            setStep(10)
        setSpecialty(e.target.value)
    }
    const [nature, setNature] = useState(3)
    const [natureTraits, setNatureTraits] = useState([])
    const [natureFighterLoss, setFighterLoss] = useState([])
    const [nature1, setNature1] = useState(-1)
    const [nature2, setNature2] = useState(-1)
    const [nature3, setNature3] = useState(-1)
    //const saveuse = ("Do you" + <b className="text-success">SAVE</b> + "for winter even if it means going without something now? Or do you" + <b className="text-info">USE</b> + "what you have when you need it?")

    const handleNatureQs = (e) => {
        switch (e.target.name) {
            case "saveuse":
                setNature1(e.target.value)
                if (e.target.value === 0)
                    // TODO remove break and add Traits to natureTraits
                    break
                else

                    break

            case "standrun":
                setNature2(e.target.value)
                if (e.target.value === 0)
                    // TODO remove break and set Fighter loss
                    break
                else

                    break
            case "fear":
                setNature3(e.target.value)
                if (e.target.value === 0)
                    // TODO remove break and add Traits to natureTraits
                    break
                else

                    break
            default:
                break
        }

    }

    const [wises, setWises] = useState([])                  // tender guard - 1, patrolguard 2, patrolleader 3, guardcap 4
    const [resources, setResources] = useState(1)
    const [circles, setCircles] = useState(1)
    const [bornTrait, setBornTrait] = useState(defaultChoice)
    const [parentTrait, setParentTrait] = useState(defaultChoice)    // tenderpaws only
    const [roadTrait, setRoadTrait] = useState(defaultChoice)        // patrol leaders and guard captains

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

    // TODO would be nice to refactor these into separate files, but quite closely tied to states and handles...
    const [showRank, setShowRank] = useState(false)
    const rankModal = <Modal show={(rank !== defaultChoice) && showRank} onHide={() => setShowRank(false)} backdrop="static">
        <Modal.Header>
            <Modal.Title>{rank}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <h4>{ranks[rank].info}.</h4>
            <h5>What are you naturally talented in?</h5>
            <RecruitForm
                dropdown
                title="Skill"
                choice={talent}
                info={skillInfo[talent]}
                choiceChange={(e) => setTalent(e.target.value)}
                options={Object.keys(skillset)}
            />
            {hasSecondTalent(rank) &&
                <RecruitForm
                    dropdown
                    title="Skill"
                    choice={secondTalent}
                    info={skillInfo[secondTalent]}
                    choiceChange={(e) => setSecondTalent(e.target.value)}
                    options={Object.keys(skillset)}
                />
            }
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={(e) => {
                setShowRank(false)
                setTalent(defaultChoice)
                setSecondTalent(defaultChoice)
                setRank(defaultChoice)
            }}>Cancel</Button>
            <Button disabled={isDefault(talent) || (hasSecondTalent(rank) && isDefault(secondTalent))} variant="primary" onClick={(e) => {
                setShowRank(false)
                setStep(2)
            }}>Proceed</Button>
        </Modal.Footer>
    </Modal>
    const [showHome, setShowHome] = useState(false)
    const homeModal = <Modal show={home !== defaultChoice && showHome} onHide={() => setShowHome(false)} backdrop="static">
        <Modal.Header>
            <Modal.Title>{home}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <h4>{homes[home].info}.</h4>
            <h5>What skill did you learn growing up in {home}?</h5>
            <RecruitForm
                dropdown
                title="Skill"
                choiceChange={(e) => setHomeSkill(e.target.value)}
                choice={homeSkill}
                info={skillInfo[homeSkill]}
                options={homes[home].skills}
            />
            <h5>What trait did growing up in {home} grant you?</h5>
            <RecruitForm
                dropdown
                title="Trait"
                choiceChange={(e) => setHomeTrait(e.target.value)}
                choice={homeTrait}
                info="TODO add trait info"
                options={homes[home].traits}
            />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => {
                setShowHome(false);
                setHomeSkill(defaultChoice);
                setHomeTrait(defaultChoice);
                setHome(defaultChoice);
            }}>Cancel</Button>
            <Button disabled={isDefault(homeSkill) || isDefault(homeTrait)} variant="primary" onClick={(e) => {
                setShowHome(false)
                setStep(3)
            }}>Proceed</Button>
        </Modal.Footer>
    </Modal>

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


    return (<Card className="border-mg rounded-1 bg-mg text-light mt-3">
        {/* <FormControl onChange={(e) => setStep(e.target.value)} /> */}
        <Row className="mx-auto my-4 px-4">
            <Col className="mx-auto">
                <h1>Life Experience</h1>
                <RecruitForm
                    dropdown
                    title="Rank"
                    choiceChange={handleRank}
                    options={Object.keys(ranks)}
                    choice={rank}
                    info={ranks[rank].info}
                />
                {rankModal}
                <RecruitForm disabled={step < 2}
                    dropdown
                    title="Home"
                    choiceChange={handleHome}
                    choice="Home"
                    info="Choose a mouse town or city in which your character was born. Each city has its own culture as represented by the skills and traits it provides."
                    options={Object.keys(homes)}
                />
                {homeModal}
                <RecruitForm disabled={step < 3}
                    dropdown
                    title="Family Trade"
                    choiceChange={handleParents}
                    choice={parentTrade}
                    info={isDefault(parentTrade) ? "What was your parents' trade?" : skillInfo[parentTrade]}
                    // How solve double text?
                    options={parentSkills}
                />
                <RecruitForm disabled={step < 4}
                    dropdown
                    title="Social"
                    choiceChange={handleSocial}
                    choice={social}
                    info={isDefault(social) ? "How do you convince people that you're right or to do what you need?" : skillInfo[social]}
                    options={socialSkills}
                />
                <RecruitForm disabled={step < 5}
                    dropdown text
                    title="Senior Artisan"
                    choiceChange={handleArtisan}
                    nameChange={setArtisanName}
                    choice={artisan}
                    info={isDefault(artisan) ? "With whom did you apprentice for the Guard? What was that mouse's trade?" : skillInfo[artisan]}
                    options={apprenticeSkills}
                />
                <RecruitForm disabled={(artisanName.length === 0 || step < 6)}
                    dropdown text
                    title="Mentor"
                    choiceChange={handleMentor}
                    nameChange={setMentorName}
                    options={mentorSkills}
                    choice={mentor}
                    info={isDefault(mentor) ? "Who is your mentor in the Mouse Guard? What did your mentor stress in training?" : skillInfo[mentor]}
                />
                <RecruitForm disabled={mentorName.length === 0 || step < 7}
                    dropdown text
                    title="Friend"
                    choiceChange={handleFriend}
                    nameChange={setFriendName}
                    options={Object.keys(skillset)}
                />
                <RecruitForm disabled={friendName.length === 0 || step < 8}
                    dropdown text
                    title="Enemy"
                    choiceChange={handleEnemy}
                    nameChange={setEnemyName}
                    options={Object.keys(skillset)}
                />
                {!(rank === "Tenderpaw" || rank === defaultChoice) && <RecruitForm disabled={step < 9}
                    dropdown
                    title="Specialty"
                    choiceChange={handleSpecialty}
                    current={enemySkill}
                    options={Object.keys(skillset)}
                />}
            </Col>
            <Col>
                <h1>Mouse Nature</h1>
                <TwoOption disabled={step < 10}
                    name="saveuse"
                    q="Do you save for winter even if it means going without something now? Or do you use what you have when you need it?"
                    option1="Save"
                    option2="Use"
                    current={nature1}
                    handle={setNature1}
                />
                <TwoOption disabled={step < 10}
                    name="fighthide"
                    q="When confronted, do you stand your ground and fight or do you run and hide?"
                    option1="Fight"
                    option2="Hide"
                    current={nature2}
                    handle={setNature2}
                />
                <TwoOption disabled={step < 10}
                    name="fear"
                    q="Do you fear owls, weasels and wolves?"
                    option1="Yes"
                    option2="No"
                    current={nature3}
                    handle={setNature3}
                />
            </Col>
        </Row >
    </Card>
    )
}

export default Recruitment