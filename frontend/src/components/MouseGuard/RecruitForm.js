

import { useState } from "react";
import { Modal, Button, FormControl, InputGroup, Row, Col, } from "react-bootstrap"
import { HelpCircle } from "react-feather"

const RecruitForm = ({ title, dropdown, text, disabled, options, nameChange, choice, info, choiceChange }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>
        <InputGroup className={"rounded recruit-form my-3 " + (disabled ? "recruit-disabled" : "")}>
            <InputGroup.Prepend>
                <Button variant="" onClick={handleShow} className="rounded btn-mg btn-outline-light">{title}  <HelpCircle className="ml-1" size="15" /></Button>
            </InputGroup.Prepend>
            <Col className="p-0">
                {
                    text && <>
                        <FormControl className="input-mg" disabled={disabled} type="textarea" onChange={(e) => nameChange(e.target.value)} size="lg" placeholder="Name..." />
                        
                    </>
                }

                {
                    dropdown &&
                    <FormControl className="input-mg" disabled={disabled} as="select" size="lg" onChange={choiceChange}>
                        {options.map(o => <option key={o}>{o}</option>)}
                    </FormControl>
                }
            </Col>
        </InputGroup>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{choice === "Choose..." ? title : choice}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{info}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default RecruitForm