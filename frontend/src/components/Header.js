
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap"
import Torch from '../img/torch.svg'
import Mouse from '../img/mouse.svg'
import { useState } from "react"
import { User } from "react-feather"

const Header = () => {
    const [game, setGame] = useState("mouseguard")

    return (

        <Navbar className="header bg-mg text-light" expand="lg">
            <Navbar.Brand className="text-light" href="/">Torchguard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown
                        className="bg-mg"
                        title={game === "torchbearer"
                            ? <img src={Torch} height="30px" width="30px" alt="" />
                            : <img src={Mouse} height="30px" width="30px" alt="" />}>
                        <NavDropdown.Item href="/tb">
                            Torchbearer
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/mg">
                            Mouse Guard
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <NavDropdown
                alignRight
                className="text-mg hide-arrow"
                title={<><User size="25" color="white" /></>}
                id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown >
        </Navbar >

    )
}

export default Header