import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap"

const Footer = () => {


    return (
        <footer className="fixed-bottom bg-mg pt-3 p-2">
            <Container>
                <span className="textarea-mg">Andreas Nilsson © 2021</span>
                <br />
                A huge thanks to Lorc and Delapouite, from game-icons.net for the amazing svg icons.
            </Container>
        </footer>
    )
}

export default Footer