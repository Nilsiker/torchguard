
import { useState } from "react"
import { Button } from "react-bootstrap"
import { GitHub, LogIn } from "react-feather"
import LoginModal from "./LoginModal"

const LoginButton = ({ styling, block, icon }) => {
    const [showLogin, setShowLogin] = useState(false)
    const handleShow = () => setShowLogin(true)
    const handleClose = () => setShowLogin(false)

    return <>
        {icon
            ? <LogIn className="text-navlink mr-3" onClick={handleShow} />
            : <Button block={block} variant="" className={styling} onClick={handleShow}>Login</Button>}
        <LoginModal show={showLogin} handleClose={handleClose} />
    </>
}

export default LoginButton