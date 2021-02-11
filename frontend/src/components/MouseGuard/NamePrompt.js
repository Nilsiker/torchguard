import { Button, Modal } from "react-bootstrap"
import RecruitForm from "./RecruitForm"

const NamePrompt = ({ show, setShow, role, nameHandle, cancel, proceed }) => {


    return (
        <Modal show={show} onHide={() => setShow(false)} backdrop="static">
            <Modal.Header>
                <Modal.Title>{role}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h4>What is your {role.toLowerCase()}'s name?</h4>
                <RecruitForm
                    title="Name"
                    onChange={nameHandle}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={cancel}>Cancel</Button>
                <Button variant="primary" onClick={proceed}>Proceed</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NamePrompt