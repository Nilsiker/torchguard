
import { useState } from "react"
import { Button } from "react-bootstrap"
import RegisterModal from "./RegisterModal"

const RegisterButton = ({ styling, block }) => {
    const [showRegister, setShowRegister] = useState(false)
    const handleShow = () => setShowRegister(true)
    const handleClose = () => setShowRegister(false)

    return <>
        <Button block={block} variant="" className={styling} onClick={handleShow}>Register</Button>
        <RegisterModal show={showRegister} handleClose={handleClose} />
    </>
}

export default RegisterButton