import { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { apprenticeSkills, homes, mentorSkills, parentSkills, ranks, skillInfo, skillset, specialtySkills, hasSecondTalent, isDefault, defaultChoice, socialSkills } from '../../models/MouseGuard/RecruitmentHelpers'
import RecruitForm from "./RecruitForm"

const LifeExperience = ({ states, handles }) => {
    const handleRank = (e) => {
        console.log(e.target.value)
        if (isDefault(e.target.value)) {
            handles.setStep(1)
        }
        else
            setShowRank(true)
        handles.setRank(e.target.value)
        switch (e.target.value) {
            case "Tenderpaw":
                handles.setResources(1)
                handles.setCircles(1)
                break
            case "Guardmouse":
                handles.setResources(2)
                handles.setCircles(2)
                break
            case "Patrol Guard":
                handles.setResources(3)
                handles.setCircles(3)
                break
            case "Patrol Leader":
                handles.setResources(4)
                handles.setCircles(3)
                break
            case "Guard Captain":
                handles.setResources(5)
                handles.setCircles(4)
                break
            default:
                handles.setResources(0)
                handles.setCircles(0)
        }
    }

    const handleHome = (e) => {
        console.log(e.target.value)

        if (isDefault(e.target.value)) {
            handles.setHomeSkill(defaultChoice)
            handles.setHomeTrait(defaultChoice)
            handles.setSpecialty(defaultChoice)
            handles.setStep(2)
        }
        else
            setShowHome(true)
        handles.setHome(e.target.value)
    }
    const handleParents = (e) => {
        console.log(e.target.value)
        if (isDefault(e.target.value)) {
            handles.setStep(3)
        } else {
            handles.setStep(4)
        }
        handles.setParentTrade(e.target.value)
    }
    const handleSocial = (e) => {
        console.log(e.target.value)
        if (isDefault(e.target.value)) {
            handles.setStep(4)
        }
        else
            handles.setStep(5);
        handles.setSocial(e.target.value)
    }

    const handleArtisan = (e) => {
        console.log(e.target.value)
        if (isDefault(e.target.value)) {
            handles.setStep(5)
        }
        else
            handles.setStep(6)
        handles.setArtisan(e.target.value)
    }

    const handleMentor = (e) => {
        console.log(e.target.value)
        if (isDefault(e.target.value)) {
            handles.setStep(6)
        }
        else
            handles.setStep(7)
        handles.setMentor(e.target.value)
    }
    const handleFriend = (e) => {
        console.log(e.target.value)
        if (isDefault(e.target.value)) {
            handles.setStep(7)
        }
        else
            handles.setStep(8)
        handles.setFriendSkill(e.target.value)
    }

    const handleEnemy = (e) => {
        console.log(e.target.value)
        if (isDefault(e.target.value)) {
            handles.setStep(8)
        }
        else
            handles.setEnemySkill(e.target.value)
        handles.setStep(states.rank !== "Tenderpaw" ? 9 : 10)
    }

    const handleSpecialty = (e) => {
        console.log(e.target.value)
        if (isDefault(e.target.value)) {
            handles.setStep(9)
        }
        else
            handles.setStep(10)
        handles.setSpecialty(e.target.value)
    }

    // TODO would be nice to refactor these into separate files, but quite closely tied to states and handles...
    const [showRank, setShowRank] = useState(false)
    const rankModal = <Modal className="p-0" show={(states.rank !== defaultChoice) && showRank} onHide={() => setShowRank(false)}>
        <Modal.Header className="bg-common">
            <Modal.Title>{states.rank}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="light">
            <h4>{ranks[states.rank].info}.</h4>
            <h5>What are you naturally talented in?</h5>
            <RecruitForm
                dropdown
                title="Skill"
                choice={states.talent}
                info={skillInfo[states.talent]}
                handle={(e) => handles.setTalent(e.target.value)}
                options={Object.keys(skillset)}
            />
            {hasSecondTalent(states.rank) &&
                <RecruitForm
                    dropdown
                    title="Skill"
                    choice={states.secondTalent}
                    info={skillInfo[states.secondTalent]}
                    handle={(e) => handles.setSecondTalent(e.target.value)}
                    options={Object.keys(skillset)}
                />
            }
        </Modal.Body>
        <Modal.Footer className="bg-common">
            <Button variant="secondary" onClick={(e) => {
                setShowRank(false)
                handles.setTalent(defaultChoice)
                handles.setSecondTalent(defaultChoice)
                handles.setRank(defaultChoice)
            }}>Cancel</Button>
            <Button disabled={isDefault(states.talent) || (hasSecondTalent(states.rank) && isDefault(states.secondTalent))} variant="primary" onClick={(e) => {
                setShowRank(false)
                handles.setStep(2)
            }}>Proceed</Button>
        </Modal.Footer>
    </Modal>
    const [showHome, setShowHome] = useState(false)
    const homeModal = <Modal show={states.home !== defaultChoice && showHome} onHide={() => setShowHome(false)} backdrop="static">
        <Modal.Header className="bg-common">
            <Modal.Title>{states.home}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="light">
            <h4>{homes[states.home].info}.</h4>
            <h5>What skill did you learn growing up in {states.home}?</h5>
            <RecruitForm
                dropdown
                title="Skill"
                handle={(e) => handles.setHomeSkill(e.target.value)}
                choice={states.homeSkill}
                info={skillInfo[states.homeSkill]}
                options={homes[states.home].skills}
            />
            <h5>What trait did growing up in {states.home} grant you?</h5>
            <RecruitForm
                dropdown
                title="Trait"
                handle={(e) => handles.setHomeTrait(e.target.value)}
                choice={states.homeTrait}
                info="TODO add trait info"
                options={homes[states.home].traits}
            />
        </Modal.Body>
        <Modal.Footer className="bg-common">
            <Button variant="secondary" onClick={() => {
                setShowHome(false);
                handles.setHomeSkill(defaultChoice);
                handles.setHomeTrait(defaultChoice);
                handles.setHome(defaultChoice);
            }}>Cancel</Button>
            <Button disabled={isDefault(states.homeSkill) || isDefault(states.homeTrait)} variant="primary" onClick={(e) => {
                setShowHome(false)
                handles.setStep(3)
            }}>Proceed</Button>
        </Modal.Footer>
    </Modal>
    return (<>
        <h1>Life Experience</h1>
        <RecruitForm
            dropdown
            title="Rank"
            handle={handleRank}
            options={Object.keys(ranks)}
            choice={states.rank}
            info={ranks[states.rank].info}
        />
        {rankModal}
        <RecruitForm disabled={states.step < 2}
            dropdown
            title="Home"
            handle={handleHome}
            choice={states.home}
            info="Choose a mouse town or city in which your character was born. Each city has its own culture as represented by the skills and traits it provides."
            options={Object.keys(homes)}
        />
        { homeModal}
        <RecruitForm disabled={states.step < 3}
            dropdown
            title="Family Trade"
            handle={handleParents}
            choice={states.parentTrade}
            info={isDefault(states.parentTrade) ? "What was your parents' trade?" : skillInfo[states.arentTrade]}
            // How solve double text?
            options={parentSkills}
        />
        <RecruitForm disabled={states.step < 4}
            dropdown
            title="Social"
            handle={handleSocial}
            choice={states.social}
            info={isDefault(states.social) ? "How do you convince people that you're right or to do what you need?" : skillInfo[states.social]}
            options={socialSkills}
        />
        <RecruitForm disabled={states.step < 5}
            dropdown
            title="Senior Artisan"
            handle={handleArtisan}
            choice={states.artisan}
            info={isDefault(states.artisan) ? "With whom did you apprentice for the Guard? What was that mouse's trade?" : skillInfo[states.artisan]}
            options={apprenticeSkills}
        />
        <RecruitForm disabled={states.step < 6}
            dropdown
            title="Mentor"
            handle={handleMentor}
            options={mentorSkills}
            choice={states.mentor}
            info={isDefault(states.mentor) ? "Who is your mentor in the Mouse Guard? What did your mentor stress in training?" : skillInfo[states.mentor]}
        />
        <RecruitForm disabled={states.step < 7}
            dropdown
            title="Friend"
            handle={handleFriend}
            choice={states.friendSkill}
            options={Object.keys(skillset)}
        />
        <RecruitForm disabled={states.step < 8}
            dropdown
            title="Enemy"
            handle={handleEnemy}
            choice={states.enemySkill}
            options={Object.keys(skillset)}
        />
        {
            !(states.rank === "Tenderpaw" || states.rank === defaultChoice) && <RecruitForm disabled={states.step < 9}
                dropdown
                title="Specialty"
                handle={handleSpecialty}
                choice={states.specialty}
                options={specialtySkills}
            />
        }
    </>
    )
}

export default LifeExperience