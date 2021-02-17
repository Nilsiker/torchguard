import { useEffect, useState } from "react"
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { bornTraits, defaultChoice, parentTraits, ranks, roadTraits } from "../../models/MouseGuard/RecruitmentHelpers"
import RecruitForm from "./RecruitForm"

const WisesAndTraits = ({ states, handles }) => {
    const [wises, setWises] = useState([])
    const [hasParentTrait, setHasParentTrait] = useState(false)
    const [hasRoadTrait, setHasRoadTrait] = useState(false)

    useEffect(() => {
        switch (states.rank) {
            case "Tenderpaw":
                setWises([""])
                setHasParentTrait(true)
                setHasRoadTrait(false)
                break
            case "Guardmouse":
                setWises(["", ""])
                setHasParentTrait(false)
                setHasRoadTrait(false)
                break
            case "Patrol Guard":
                setWises(["", ""])
                setHasParentTrait(false)
                setHasRoadTrait(false)
                break
            case "Patrol Leader":
                setWises(["", "", ""])
                setHasParentTrait(false)
                setHasRoadTrait(true)
                break
            case "Guard Captain":
                setWises(["", "", "", ""])
                setHasParentTrait(false)
                setHasRoadTrait(true)
                break
            default:
                setWises([])
                setHasParentTrait(false)
                setHasRoadTrait(false)
        }
        //TODO REMOVE DEBUG
        setWises(["", ""])
        console.log(wises.length)
    }, [states, wises.length])

    return (<Row className="my-4 px-4">
        <Col>
            <h1>Wises</h1>
            {wises.map(w =>
                <RecruitForm
                    //TODO setWise handle...
                    wise />
            )}
            <Link to="/mg/recruit/" className="no-decoration">
                <Button block variant="" className="mt-3 btn-red" size="lg">BACK TO START</Button>
            </Link>
        </Col>
        <Col>
            <h1>Traits</h1>
            {(states.nature1 === 0) &&
                <RecruitForm
                    title="Nature Trait"
                    dropdown
                    options={[defaultChoice, "Bold", "Generous", "Impetuous"]}
                    choice={states.natureTrait1}
                    handle={handles.setNatureTrait1} />}
            {(states.nature3 === 0) &&
                <RecruitForm
                    title="Nature Trait"
                    dropdown
                    options={[defaultChoice, "Fearless", "Brave", "Foolish"]}
                    choice={states.natureTrait2}
                    handle={handles.setNatureTrait2} />}
            <RecruitForm
                title="Born Trait"
                dropdown
                choice={states.bornTrait}
                options={bornTraits} />
            {hasParentTrait && <RecruitForm
                title="Parent Trait"
                dropdown
                choice={states.parentTrait}
                options={parentTraits} />}
            {hasRoadTrait && <RecruitForm
                title="Life on the Road"
                dropdown
                options={roadTraits} />}
            <Link to="/mg/recruit/names" className="no-decoration">
                <Button block variant="" disabled={states.step < 13} className="btn-moss" size="lg" style={states.step < 13 ? { opacity: "5%" } : {}}>TO NAMES</Button>
            </Link>
        </Col>
    </Row >
    )
}

export default WisesAndTraits