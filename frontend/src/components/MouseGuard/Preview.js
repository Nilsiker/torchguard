import { useEffect, useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { defaultChoice } from "../../models/MouseGuard/RecruitmentHelpers"
import RecruitForm from "./RecruitForm"
import SkillBox from "./SkillBox"

const Preview = ({ mouse, step }) => {
    const skillsNoChoose = { ...mouse.skills }
    delete skillsNoChoose[defaultChoice]
    const nonZeroSkills = Object.keys(skillsNoChoose).filter(s => mouse.skills[s] !== 0)

    const traitsNoChoose = mouse.traits

    return (<>
        <Row className="mt-4 px-4">
            <Col>
                <h1>Character Info</h1>
                <hr style={{ borderColor: "white" }} />
            </Col>
        </Row>
        <Row className="mb-4 px-4">
            <Col xs={12} md={6}>
                <RecruitForm readOnly sm
                    title="Name"
                    choice={mouse.name} />
                <RecruitForm readOnly sm
                    title="Age"
                    choice={mouse.age} />
                <RecruitForm readOnly sm
                    title="Home"
                    choice={mouse.home} />
                <RecruitForm readOnly sm
                    title="Fur Color"
                    choice={mouse.furColor} />
                <RecruitForm readOnly sm
                    title="Guard Rank"
                    choice={mouse.rank} />
                <RecruitForm readOnly sm
                    title="Cloak Color"
                    choice={mouse.cloakColor} />
            </Col>
            <Col>
                <RecruitForm readOnly sm
                    title="Father"
                    choice={mouse.parents.father.name}
                    append={"the " + mouse.parents.father.trade} />
                <RecruitForm readOnly sm
                    title="Mother"
                    choice={mouse.parents.mother.name}
                    append={"the " + mouse.parents.mother.trade} />
                <RecruitForm readOnly sm
                    title="Senior Artisan"
                    choice={mouse.seniorArtisan.name}
                    append={"the " + mouse.seniorArtisan.trade} />
                <RecruitForm readOnly sm
                    title="Mentor"
                    choice={mouse.mentor.name}
                    append={"the " + mouse.mentor.trade} />
                <RecruitForm readOnly sm
                    title="Friend"
                    choice={mouse.friend.name}
                    append={"the " + mouse.friend.trade} />
                <RecruitForm readOnly sm
                    title="Enemy"
                    choice={mouse.enemy.name}
                    append={"the " + mouse.enemy.trade} />
            </Col>
        </Row>

        <Row className="mb-4 px-4">
            <Col>
                <h1>Abilities</h1>
                <h2>TODO make custom AbilityBox component</h2>
                <hr style={{ borderColor: "white" }} />
            </Col>
        </Row>
        <Row className="mb-4 px-4">
            <Col xs={12} md={4} className="ml-auto">
                <SkillBox preview
                    skill={{ name: "Nature", rating: mouse.nature.current + "/" + mouse.nature.max }} />
                <SkillBox preview
                    skill={{ name: "Will", rating: mouse.will }} />

                <SkillBox preview
                    skill={{ name: "Health", rating: mouse.health }} />

            </Col>
            <Col md={4} className="mr-auto">
                <SkillBox preview
                    skill={{ name: "Resources", rating: mouse.resources }} />
                <SkillBox preview
                    skill={{ name: "Circles", rating: mouse.circles }} />
            </Col>
        </Row>



        <Row className="mb-4 px-4">
            <Col>
                <h1>Wises</h1>
                <h2>TODO make custom WiseBox component</h2>
                <hr style={{ borderColor: "white" }} />
            </Col>
        </Row>
        <Row className="mb-4 px-4">
            <Col xs={12} md={6} className="ml-auto">
                <RecruitForm readOnly
                    title={mouse.wises[0] + "-wise"} />
                <RecruitForm readOnly
                    title={mouse.wises[1] + "-wise"} />
            </Col>
            <Col md={6} className="mr-auto">

                <RecruitForm readOnly
                    title={mouse.wises[2] + "-wise"} />
                <RecruitForm readOnly
                    title={mouse.wises[3] + "-wise"} />
            </Col>
        </Row>

        <Row className="mb-4 px-4">
            <Col>
                <h1>Skills</h1>
                <hr style={{ borderColor: "white" }} />
            </Col>
        </Row>
        <Row className="mb-4 px-4">
            <Col xs={12} md={4}>
                {nonZeroSkills.slice(0, nonZeroSkills.length / 3).map(k => (
                    <SkillBox preview
                        skill={{ name: k, rating: mouse.skills[k] }} />
                ))}
            </Col>
            <Col xs={12} md={4}>
                {nonZeroSkills.slice(nonZeroSkills.length / 3, 2 * nonZeroSkills.length / 3).map(k => (
                    <SkillBox preview
                        skill={{ name: k, rating: mouse.skills[k] }} />
                ))}
            </Col>
            <Col xs={12} md={4}>
                {nonZeroSkills.slice(2 * nonZeroSkills.length / 3).map(k => (
                    <SkillBox preview
                        skill={{ name: k, rating: mouse.skills[k] }} />
                ))}
            </Col>
        </Row>

        <Row className="mb-4 px-4">
            <Col>
                <h1>Traits</h1>
                <h2>TODO make custom TraitBox component</h2>
                <hr style={{ borderColor: "white" }} />
            </Col>
        </Row>
        <Row className="mb-4 px-4">
            <Col>
                {mouse.traits.map(t => <p>{t.name + " " + t.level}</p>)}
            </Col>
        </Row>

        <Row className="mb-4 px-4">
            <Col>
                <Link to="/mg/recruit/names/" className="no-decoration">
                    <Button block variant="" className="btn-red" size="lg">BACK TO NAMES & DETAILS</Button>
                </Link>
            </Col>
            <Col>
                <Link to="/characters" className="no-decoration">
                    {/* TODO confirm! and save to db */}
                    <Button block variant="" disabled={step < 13} className="btn-moss" size="lg" style={step < 13 ? { opacity: "5%" } : {}}>CONFIRM</Button>
                </Link>
            </Col>
        </Row>
    </>
    )
}

export default Preview