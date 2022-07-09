import accordion from './FAQ'
import { Accordion } from 'react-bootstrap'
const Faq = () => {
  return (
    <div className="mb-4">
    <h3 className="oh-desktop mb-2 titles" style={{ 'color': 'var(--red)' }}>
            <span className="d-inline-block wow slideInDown">
               FAQ
            </span>
        </h3>
        {
            accordion.map(({ id, title, body }) => {
                return (
                    <Accordion flush key={id}>
                        <Accordion.Item eventKey={id}>
                            <Accordion.Header>
                                <h4>
                                    {title}
                                </h4>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    {body}
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                )
            })
        }
    </div>
  )
}

export default Faq