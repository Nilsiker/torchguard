import { Button, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import RecruitForm from "./RecruitForm"

const NamesAndDetails = ({ states, handles }) => {


    return (<>
        <Row className="mt-4 px-4">
            <Col>
                <h1>Names & Details</h1>
            </Col>

        </Row>
        <Row className="mb-4 px-4">
            <Col xs={12} md={6}>
                <RecruitForm
                    title="Your Name"
                    nameChange={handles.setName}
                    choice={states.name}
                    name />
                <RecruitForm
                    title="Your Age"
                    nameChange={handles.setAge} // TODO validate with rank later
                    choice={states.age}
                    name />
                <RecruitForm
                    title="Fur Color"
                    nameChange={handles.setFurColor}
                    placeholder="Color..."
                    name />
                <RecruitForm
                    title="Father"
                    nameChange={handles.setFatherName}
                    name
                    append={"the " + states.parentTrade} />
                <RecruitForm
                    title="Mother"
                    nameChange={handles.setMotherName}
                    name
                    append={"the " + states.parentTrade} />
            </Col>
            <Col>
                <RecruitForm
                    title="Senior Artisan"
                    nameChange={handles.setArtisanName}
                    name
                    append={"the " + states.artisan} />
                <RecruitForm
                    title="Mentor"
                    nameChange={handles.setMentorName}
                    name
                    append={"the " + states.mentor} />
                <RecruitForm
                    title="Friend"
                    nameChange={handles.setFriendName}
                    name
                    append={"the " + states.friendSkill} />
                <RecruitForm
                    title="Enemy"
                    nameChange={handles.setEnemyName}
                    name
                    append={"the " + states.enemySkill} />
                <RecruitForm
                    title="Cloak Color"
                    nameChange={handles.setCloakColor}
                    placeholder="Color..."
                    name />

            </Col>
        </Row>
        <Row className="mb-4 px-4">
            <Col>
                <Link to="/mg/recruit/wisestraits" className="no-decoration">
                    <Button block variant="" disabled={states.step < 13} className="btn-red" size="lg" style={states.step < 13 ? { opacity: "5%" } : {}}>BACK TO WISES & TRAITS</Button>
                </Link>
            </Col>
            <Col>
                <Link to="/mg/recruit/preview" className="no-decoration">
                    <Button block variant="" disabled={states.step < 13} className="btn-moss" size="lg" style={states.step < 13 ? { opacity: "5%" } : {}}>PREVIEW</Button>
                </Link>
            </Col>
        </Row>
    </>
    )
}

export default NamesAndDetails