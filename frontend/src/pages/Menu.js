import { Col, ListGroup, ListGroupItem, Nav, Row, Tab } from "react-bootstrap"
import { Download, Plus, Upload } from "react-feather"
import { Link } from "react-router-dom"
import Mouse from '../img/mouse.svg'
import Torch from '../img/torch.svg'

const Menu = () => {


    const torch = <img src={Torch} height="50px" width="50px" alt="torchbearer" />
    const mouse = <img src={Mouse} height="50px" width="50px" alt="mouseguard" />


    return (
        <Row>
            <Col xl={4}>
                <Tab.Container defaultActiveKey="mouse">
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="torch">{torch}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="mouse">{mouse}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="mouse">
                            <ListGroup>
                                <ListGroupItem className="bg-common border-dark-y">
                                    <h2>Mouse Guards</h2>
                                    <Row className="mt-4">
                                        <Link to="/mg/recruit" className="ml-auto no-decoration">
                                            <Col>
                                                <Plus color="white" />
                                                <h5 className="text-light">New</h5>
                                            </Col>
                                        </Link>
                                        <Link to="/mg/import" className="no-decoration">
                                            <Col>
                                                <Upload color="white" />
                                                <h5 className="text-light">Import</h5>
                                            </Col>
                                        </Link>
                                        <Link to="/mg/export" className="mr-auto no-decoration">
                                            <Col>
                                                <Download color="white" />
                                                <h5 className="text-light">Export</h5>
                                            </Col>
                                        </Link>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem className="input-light">Chungo the Tenderpaw</ListGroupItem>
                                <ListGroupItem>Venlon the Patrol Guard</ListGroupItem>
                                <ListGroupItem>Tila the Patrol Leader</ListGroupItem>
                            </ListGroup>
                        </Tab.Pane>
                        <Tab.Pane eventKey="torch">
                            <ListGroup>
                                <ListGroupItem className="bg-common border-dark-y">
                                    <h2>Adventurers</h2>
                                    <Row className="mt-4">
                                        <Col>
                                            <Plus />
                                            <p to="/mg/recruit">New</p>
                                        </Col>
                                        <Col>
                                            < Upload />
                                            <p>Import</p>
                                        </Col>
                                        <Col>
                                            < Download />
                                            <p>Export</p>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem>No adventurers found...</ListGroupItem>

                            </ListGroup>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Col>
            <Col>
                Preview of character here
            </Col>
        </Row>
    )
}

export default Menu