import { Container } from "react-bootstrap"

const Footer = () => {


    return (
        <footer className="sticky-bottom bg-common pt-3 pb-0 p-2 border-dark-y">
            <Container>
                <small>Andreas Nilsson © 2021
                <br />
                A huge thanks to Lorc, sbed and Delapouite, from game-icons.net for the amazing svg icons.
                </small>
            </Container>
        </footer>
    )
}

export default Footer