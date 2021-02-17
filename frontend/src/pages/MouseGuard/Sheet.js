import { useEffect, useState } from 'react'
import { Col, Jumbotron, Row } from 'react-bootstrap';

const Sheet = () => {
    const [mouse, setMouse] = useState({})

    useEffect(() => {
        fetch('http://localhost:3001/api/mice')
            .then(res => (res.json()))
            .then(out => setMouse(out[0])
            )
    })

    return (<Jumbotron className="sheet bg-common border-dark-y">
        <Row>
            <Col>
                <h1>{mouse.name}</h1>
                <h2>Age</h2>
                <h3>{mouse.age} ({1152 - mouse.birthYear})</h3>
                <h2>Home</h2>
                <h3> {mouse.home}</h3>
                <h2>Fur color</h2>
                <h3> {mouse.furColor}</h3>
                <h2>Guard rank</h2>
                <h3> {mouse.guardRank}</h3>
                <h2>Cloak color</h2>
                <h3> {mouse.cloakColor}</h3>
            </Col>
            <Col>
                <h2 className="mt-5">Belief</h2>
                <h3>{mouse.belief}</h3>
                <h2>Goal</h2>
                <h3> {mouse.goal}</h3>
                <h2>Instinct</h2>
                <h3> {mouse.instinct}</h3>
            </Col>
        </Row>
        

        
    </Jumbotron>)
}

export default Sheet
