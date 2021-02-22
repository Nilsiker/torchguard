import { Button, ButtonGroup, Card, Col, Form, Row } from "react-bootstrap"
import { HelpCircle } from "react-feather"

const SkillBox = ({ skill, preview }) => {


    return (<Card className="p-0 text-dark bg-input mb-2">
        <Row className="p-0">
            <Col xs={preview ? 12 : 6} sm={preview ? 12 : 7} md={12}>
                <ButtonGroup style={{ width: "100%" }} >
                    <Button variant="" block className="btn-skill btn-red">{skill.name + " " + skill.rating}</Button>
                    <Button variant="" className="btn-red"><HelpCircle size="15" /></Button>
                </ButtonGroup>
            </Col>

            {!preview && <><Col>
                <Row className="mx-3">
                    <h6>P: </h6>
                    <Form.Check />
                    <Form.Check />
                    <Form.Check />
                    <Form.Check />
                    <Form.Check />
                </Row>
                <Row className="mx-3">
                    <h6>F: </h6>
                    <Form.Check className="circle" />
                    <Form.Check />
                    <Form.Check />
                    <Form.Check />
                </Row>
            </Col></>}
        </Row>
    </Card>
    )
}

export default SkillBox