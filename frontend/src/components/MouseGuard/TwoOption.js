
import { useState } from "react"
import { Card, ToggleButton, ToggleButtonGroup } from "react-bootstrap"

const TwoOption = ({ name, q, option1, option2, choice, handle, disabled }) => {
    const [value, setValue] = useState(choice)

    return (<>
        <Card className="textarea-light my-3" style={disabled ? { opacity: "5%" } : {}}>
            <Card.Body>
                {q}
            </Card.Body>
            <Card.Footer>
                <ToggleButtonGroup size="lg" name={name} radioGroup type="radio" onChange={handle}>
                    <ToggleButton variant="" name={name} className={value === 1 ? "btn-moss" : "btn-dark"} value={{ name, choice: 1 }} onClick={(e) => setValue(e.target.disabled ? -1 : 1)}>{option1}</ToggleButton>
                    <ToggleButton variant="" name={name} className={value === 0 ? "btn-red" : "btn-dark"} value={{ name, choice: 0 }} onClick={(e) => setValue(e.target.disabled ? -1 : 0)}>{option2}</ToggleButton>
                </ToggleButtonGroup>
            </Card.Footer>
        </Card>
    </>
    )
}

export default TwoOption