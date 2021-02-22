

import { useState } from "react";
import { Modal, Button, FormControl, InputGroup, Row, Col, } from "react-bootstrap"
import { HelpCircle } from "react-feather"

const RecruitForm = ({ title, dropdown, name, wise, disabled, options, choice, info, handle, nameChange, readOnly, placeholder, append, sm }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>

        <InputGroup className="rounded recruit-form my-3" style={disabled ? { opacity: "5%", minWidth: "100%" } : { minWidth: "100%" }}>
            {!wise && <InputGroup.Prepend>
                <Button variant="" onClick={handleShow} className="btn-red">{title}  <HelpCircle className="ml-1" size="15" /></Button>
            </InputGroup.Prepend>}
            {
                (readOnly && <>
                    <FormControl readOnly={readOnly} className="input-light" defaultValue={choice} value={choice} type="textarea" size={sm ? sm : "lg"} />
                </>
                )
                || (name &&
                    <FormControl className="input-light" defaultValue={choice} disabled={disabled} type="textarea" onChange={(e) => nameChange(e.target.value)} size={sm ? sm : "lg"} placeholder={placeholder ? placeholder : "Name..."} />
                )
                || (dropdown &&
                    <FormControl className="input-light" defaultValue={choice} disabled={disabled} as="select" size={sm ? sm : "lg"} onChange={handle}>
                        {options.map(o => <option key={o}>{o}</option>)}
                    </FormControl>)
                || (wise && <>
                    <FormControl className="input-light" defaultValue={choice} disabled={disabled} onChange={(e) => nameChange(e.target.value)} size={sm ? sm : "lg"} placeholder="Name..." />
                    <InputGroup.Append><InputGroup.Text className="bg-red text-light">-wise</InputGroup.Text></InputGroup.Append>
                </>)
            }
            {append && <InputGroup.Append><InputGroup.Text className="bg-red text-light">{append}</InputGroup.Text></InputGroup.Append>}

        </InputGroup>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className="bg-common" closeButton>
                <Modal.Title>{choice === "Choose..." ? title : choice}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="light">{info}</Modal.Body>
            <Modal.Footer className="bg-common">
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default RecruitForm