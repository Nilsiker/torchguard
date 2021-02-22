import { useEffect, useState } from "react"
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { bornTraits, defaultChoice, parentTraits, ranks, roadTraits } from "../../models/MouseGuard/RecruitmentHelpers"
import RecruitForm from "./RecruitForm"

const WisesAndTraits = ({ states, handles }) => {
    const [nbrOfWises, setNbrOfWises] = useState(0)
    const [hasParentTrait, setHasParentTrait] = useState(false)
    const [hasRoadTrait, setHasRoadTrait] = useState(false)

    useEffect(() => {
        switch (states.rank) {
            case "Tenderpaw":
                setNbrOfWises(1)
                setHasParentTrait(true)
                setHasRoadTrait(false)
                break
            case "Guardmouse":
                setNbrOfWises(2)
                setHasParentTrait(false)
                setHasRoadTrait(false)
                break
            case "Patrol Guard":
                setNbrOfWises(2)
                setHasParentTrait(false)
                setHasRoadTrait(false)
                break
            case "Patrol Leader":
                setNbrOfWises(3)
                setHasParentTrait(false)
                setHasRoadTrait(true)
                break
            case "Guard Captain":
                setNbrOfWises(4)
                setHasParentTrait(false)
                setHasRoadTrait(true)
                break
            default:
                setNbrOfWises(0)
                handles.setWise1("")
                handles.setWise2("")
                handles.setWise3("")
                handles.setWise4("")
                setHasParentTrait(false)
                setHasRoadTrait(false)
        }
    }, [states, handles])

    return (<><Row className="my-4 px-4">
        <Col xs={12} md={6}>
            <h1>Wises</h1>
            <RecruitForm
                wise
                nameChange={handles.setWise1} />
            {nbrOfWises > 1 && <RecruitForm
                wise
                nameChange={handles.setWise2} />}
            {nbrOfWises > 2 && <RecruitForm
                wise
                nameChange={handles.setWise3} />}
            {nbrOfWises > 3 && <RecruitForm
                wise
                nameChange={handles.setWise4} />}

        </Col>
        <Col>
            <h1>Traits</h1>
            {(states.nature1 === 0) &&
                <RecruitForm
                    title="Nature Trait"
                    dropdown
                    options={[defaultChoice, "Bold", "Generous", "Impetuous"]}
                    choice={states.natureTrait1}
                    handle={(e) => handles.setNatureTrait1(e.target.value)} />}
            {(states.nature3 === 0) &&
                <RecruitForm
                    title="Nature Trait"
                    dropdown
                    options={[defaultChoice, "Fearless", "Brave", "Foolish"]}
                    choice={states.natureTrait2}
                    handle={e => handles.setNatureTrait2(e.target.value)} />}
            <RecruitForm
                title="Born Trait"
                dropdown
                choice={states.bornTrait}
                options={bornTraits}
                handle={e => handles.setBornTrait(e.target.value)} />
            {hasParentTrait && <RecruitForm
                title="Parent Trait"
                dropdown
                choice={states.parentTrait}
                options={parentTraits}
                handle={e => handles.setParentTrait(e.target.value)} />}
            {hasRoadTrait && <RecruitForm
                title="Life on the Road"
                dropdown
                choice={states.roadTrait}
                options={roadTraits}
                handle={e => handles.setRoadTrait(e.target.value)} />}

        </Col>
    </Row >
        <Row className="mb-4 px-4">
            <Col>
                <Link to="/mg/recruit/" className="no-decoration">
                    <Button block variant="" className="btn-red" size="lg">BACK TO START</Button>
                </Link>
            </Col>
            <Col>
                <Link to="/mg/recruit/names" className="no-decoration">
                    <Button block variant="" disabled={states.step < 13} className="btn-moss" size="lg" style={states.step < 13 ? { opacity: "5%" } : {}}>TO NAMES</Button>
                </Link>
            </Col>
        </Row>
    </>
    )
}

export default WisesAndTraits