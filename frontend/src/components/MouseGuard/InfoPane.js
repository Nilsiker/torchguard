import { Card } from "react-bootstrap"

const InfoPane = ({ info }) => {


    return (
        <Card className="infopane mx-5 my-1">
            <Card.Body className="my-auto">
                <p className="my-auto">{info}</p>
            </Card.Body>
        </Card>
    )
}

export default InfoPane