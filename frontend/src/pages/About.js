import { Button, Card, Col, Row } from "react-bootstrap"
import Torch from '../img/torch.svg'
import Mouse from '../img/mouse.svg'
import { Link } from "react-router-dom"

const About = () => {


    return (<>
        <Row>
            <Col className="d-none d-sm-none d-md-none d-lg-block"></Col>
            <Col xl={5} lg={6} md={8} sm={10} xs={10} className="mx-auto">
                <Card className="text-light p-3 mb-2 text-left mx-auto" style={{ backgroundColor: "#000000CC" }}>
                    <Card.Title className="text-center">
                        <h2>What is Torchguard?</h2>
                        <hr style={{ borderColor: "white" }} />
                    </Card.Title>
                    <Card.Body className="mt-0 pt-0">
                        <h5><i>Torchguard</i> is a companion app for the great role-playing games <b className="text-red">Torchbearer</b> and <b className="text-moss">Mouse Guard</b>.</h5>
                        <h5>Planned features:</h5>
                        <ul>
                            <li>Character creation</li>
                            <li>Managing and saving characters</li>
                            <li>Dice rolling</li>
                        </ul>
                        <h5 className="text-danger">It is <b>NOT</b> meant to be a substitute for the game books.</h5>
                        <h5 className="text-warning">If you're from BWHQ and want this taken down, <a className="text-primary" href="mailto:nilsiker94@gmail.com">contact me</a> and I will comply immediately!</h5>
                        <h5 className="mb-2">If you use this app for any reason:</h5>
                        <div className="mx-auto text-center">
                            <Button variant="light" href="https://www.burningwheel.com/"><h4 className="mt-2 mx-auto">SUPPORT BWHQ</h4></Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="d-none d-sm-none d-md-none d-lg-block"></Col>
        </Row>
    </>
    )
}

export default About