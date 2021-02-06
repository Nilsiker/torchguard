import { Button, ButtonGroup, Form } from "react-bootstrap"

const RecruitForm = ({ text, dropdown, buttons, title, subtext, options, limit, onChange }) => {
        return (
            <Form className="recruit-form mx-auto">
                <Form.Group>
                    <Form.Label>{title}</Form.Label>
                    <Form.Label className="recruit-label text-darkred text-sub">
                        {subtext}
                    </Form.Label>

                    {buttons && <ButtonGroup vertical>
                        {options.map(b => <Button value={b} onClick={onChange}>{b}</Button>)}
                    </ButtonGroup>}

                    {dropdown && <Form.Control as="select" size="lg" className="recruit-textinput" onChange={onChange}>
                        {options.map(o => <option>{o}</option>)}
                    </Form.Control>}

                    {text && <Form.Control size="lg" className="recruit-textinput" onChange={onChange} />}

                </Form.Group>
            </Form>
        )
}

export default RecruitForm