
import { useState } from "react"
import { Button, ButtonGroup, Card, FormControl, InputGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap"

const TwoOption = ({ name, q, current, option1, option2, handle, disabled }) => {
    const [value, setValue] = useState(-1)

    return (<>
        <Card className="textarea-mg my-3">
            <Card.Body>
                {q}
            </Card.Body>
            <Card.Footer>
                <ToggleButtonGroup size="lg" name={name} radioGroup type="radio" onChange={handle}>
                    <ToggleButton className={current === 1 ? "input-mg" : "btn-dark"} value={1}>{option1}</ToggleButton>
                    <ToggleButton className={current === 2 ? "btn-mg" : "btn-dark"} value={2}>{option2}</ToggleButton>
                </ToggleButtonGroup>
            </Card.Footer>
        </Card>
    </>
    )
}
 
export default TwoOption