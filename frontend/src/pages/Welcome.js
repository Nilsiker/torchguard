import { Button, Card, Col, Row } from "react-bootstrap"
import Torch from '../img/torchguard-white.svg'
import LoginButton from "../components/LoginButton"
import RegisterButton from "../components/RegisterButton"
import loginService from "../services/login"

const Welcome = () => {
    const handleLogout = async () => {
        await loginService.logout()
        window.location.reload();
    }

    return (
        <Row className="text-justify">
            <Col md={5} xl={4} className="ml-auto">
                <Card className="mb-3 bg-common border-dark-y">
                    <Card.Header className="text-center">
                        <u><h3>Welcome to Torchguard</h3></u>
                        <img src={Torch} height="150px" width="150px" alt="torchguard icon" />
                        <i><h4>The Digital Character Sheet</h4></i>
                    </Card.Header>
                    <Card.Body>
                        <h5>With this app I hope to bring you an intuitive and flexible way to keep track of your characters when playing Torchbearer or Mouse Guard.</h5>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={5} md={6} className="mr-auto">
                {!loginService.loggedIn()
                    ?
                    <Card className="bg-common border-dark-y">
                        <Card.Header>
                            <h3>Getting started</h3>
                        </Card.Header>
                        <Card.Body>
                            <h5>To fully utilize Torchguard, you should consider registering an account. If you already have one, simply login! </h5>
                            <Row className="my-3">
                                <Col>
                                    <LoginButton block="true" styling="btn-moss" />
                                </Col>
                                <Col>
                                    <RegisterButton block="true" styling="btn-red" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    :
                    <Card className="bg-common border-dark-y">
                        <Card.Header>
                            <h3>Greetings, {loginService.currentUser().username}!</h3>
                        </Card.Header>
                        <Card.Body>
                            <h5>You are logged in and ready to burn characters!</h5>
                            <h5><b>Mouse Guards:</b> 0</h5>
                            <h5><b>Adventurers:</b> 0</h5>
                            <Row className="my-3">
                                <Col xs={8}>
                                    <Button block className="btn-moss" href="/characters">Characters</Button>
                                </Col>
                                <Col>
                                    <Button block className="btn-red" onClick={handleLogout}>Logout</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                }
                {!loginService.loggedIn()
                    ?
                    <Card className="mt-3 bg-common border-dark-y">
                        <Card.Header>
                            <h3>What if I don't want an account...?</h3>
                        </Card.Header>
                        <Card.Body>
                            <h5>If you for any reason don't want to register an account, that's totally cool! You can use Torchguard without an account. </h5>
                            <h5>After creating a character, make sure to export it and save it to your local device. When running account-less, the character repository clears when the page is closed.</h5>
                            <h5>So, whenever you need to bring your character back in the app, import it!</h5>
                        </Card.Body>
                    </Card>
                    :
                    <Card className="mt-3 bg-common border-dark-y">
                        <Card.Header>
                            <h3>TODO: Character list preview</h3>
                        </Card.Header>
                        <Card.Body>
                            <h5>And clicking a character will take you straight to Sheet view! </h5>
                        </Card.Body>
                    </Card>
                }
            </Col>
        </Row>
    )
}

export default Welcome