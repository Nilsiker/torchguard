import { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import signupService from '../services/signup'
import loginService from '../services/login'

const LoginModal = ({ show, handleClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [match, setMatch] = useState(false)
    const [showError, setShowError] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            await signupService.signup({ username, password })
            const loggedInUser = await loginService.login({
                username, password
            })
            window.localStorage.setItem('username', loggedInUser.username)
            window.localStorage.setItem('token', loggedInUser.token)
            window.location.href = "/"
        } catch (error) {
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 3000)
        }
    }

    return <Modal show={show} onHide={handleClose}>
        <Modal.Header  className="light text-light" closeButton>
            <h3>Register new account</h3>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleRegister}>
                <Form.Group>
                    <Form.Label className="text-secondary">Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your username must be at least 3 characters long.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="text-secondary">Password</Form.Label>
                    <Form.Control
                        autoFocus
                        type="password"
                        value={password}
                        onChange={e => { setPassword(e.target.value); setMatch(e.target.value === confirmPassword) }}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be at least 8 characters long.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="text-secondary">Confirm password</Form.Label>
                    <Form.Control
                        autoFocus
                        type="password"
                        onChange={e => { setConfirmPassword(e.target.value); setMatch(e.target.value === password) }}
                    />
                    <Form.Text id="passwordHelpBlock" className={match ? "text-muted" : "text-danger"}>
                        Passwords{!match && " do not"} match.
                        </Form.Text>
                </Form.Group>
                <Card className="bg-common">
                    <Card.Header className="text-light">
                        <h5>Losing your loot and artha is bad enough!</h5>
                    </Card.Header>
                    <Card.Body>
                        <h5 className="text-warning"><b className="text-danger">I <u>strongly</u> recommend you use a username and password you don't use elsewhere.</b> The user database is very simple in its design, and although it utilizes proper hashing and salting for your credentials, I would hate for your information to get compromised because I didn't implement a commercial-grade security system. </h5>
                        <Button disabled={username.length < 3 || password.length < 7 || !match} type="submit" variant="info" block>SIGN UP</Button>
                    </Card.Body>
                </Card>
                {showError && <h5 className="text-danger mt-4">An error occured when signing up. Make sure you were following the username and password restrictions.</h5>}
            </Form>
        </Modal.Body>
    </Modal>
}

export default LoginModal