
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from 'react-router-dom'
import Torchguard from '../img/torchguard-white.svg'
import { User } from "react-feather"
import LoginButton from "./LoginButton"
import loginService from "../services/login"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"

const Header = ({ game }) => {


    const handleSignOut = () => {
        loginService.logout()
        window.location.href = "/"
    }

    return (
        <Navbar className="bg-common text-light border-dark-y" expand="lg">
            <Navbar.Brand className="text-light" href="/">Torchguard <img className="ml-2" src={Torchguard} height="50px" width="30px" alt="" /></Navbar.Brand>
            <Navbar.Toggle className="btn-moss" aria-controls="basic-navbar-nav" />
            <NavbarCollapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link className="text-light" to="/about">
                            About
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="text-light" to="/characters">
                            Characters
                        </Link>
                    </Nav.Link>
                </Nav>
                {window.localStorage.getItem('token') === null
                    ? <LoginButton styling="btn-moss" />
                    : <NavDropdown
                        alignRight
                        className="hide-arrow"
                        title={<><User size="25" color="white" /> <span className="text-light mt-3 font-family-arial">{window.localStorage.getItem('username').toUpperCase()}</span></>}
                        id="basic-nav-dropdown">
                        {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleSignOut}>Logout</NavDropdown.Item>
                    </NavDropdown >}
            </NavbarCollapse>

        </Navbar >
    )
}

export default Header