import { Card } from "react-bootstrap"

const NotFound = () => {


    return (
        <Card className="mt-5 p-5 bg-common text-light" >
            <Card.Title className="text-light"><h1>Error 404</h1></Card.Title>
            <hr style={{ borderColor: "white" }} />
            <Card.Body>
                <p> Unfortunately, this page doesn't exist... </p>

                <p>... Yet!</p>

                <a href="/" className="text-primary"><h2>Back to home</h2></a>
            </Card.Body>
        </Card>
    )
}

export default NotFound