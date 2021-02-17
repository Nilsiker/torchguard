import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import loginService from '../services/login'

const LoginModal = ({ show, handleClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false)

    const handleSignIn = async (e) => {
        e.preventDefault()
        console.log("Trying to log in with:\nEmail: " + username + "\nPassword: " + password)
        try {
            const user = await loginService.login({
                username, password
            })
            console.log(user.username)
            console.log(user.token)
            window.localStorage.setItem('username', user.username)
            window.localStorage.setItem('token', user.token)
            window.location.href = "/"
        } catch (error) {
            console.log('Wrong credentials');
            console.log(error)
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 3000)
        }
    }

    return <Modal show={show} onHide={handleClose}>
        <Modal.Header className="text-secondary" closeButton>
            <h3>Log in</h3>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSignIn}>
                <Form.Group>
                    <Form.Label className="text-secondary">Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="text-secondary">Password</Form.Label>
                    <Form.Control
                        autoFocus
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit" variant="info" block>LOG IN</Button>
                {showError && <h5 className="text-danger mt-4">Invalid username or password.</h5>}
            </Form>
        </Modal.Body>
    </Modal>
}

export default LoginModal