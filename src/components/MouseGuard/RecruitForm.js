import { useState } from "react"
import { Form, FormControl, InputGroup, } from "react-bootstrap"

const RecruitForm = ({title, dropdown, heading, options, placeholder, current, handle }) => {

    return (<>
        <Form className="recruit-form mx-auto">
            <Form.Label className="recruit-label text-darkred text-sub">
                {heading}
            </Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>{title}</InputGroup.Text>
                </InputGroup.Prepend>
                {
                    dropdown
                        ? <FormControl value={current} as="select" size="lg" className="recruit-textinput" onChange={handle}>
                            {options.map(o => <option key={o}>{o}</option>)}
                        </FormControl>

                        : <FormControl type="textarea" onChange={handle} size="lg" placeholder={placeholder} className="recruit-textinput" />
                }
            </InputGroup>
        </Form>
    </>
    )
}

export default RecruitForm