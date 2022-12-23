import Accordion from 'react-bootstrap/Accordion';

function AccordionC() {
  return (
    <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0">
        <Accordion.Header>View Details</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionC;