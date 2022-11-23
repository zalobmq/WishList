import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function MyVerticallyCenteredModal({ parentToChild, showM, onHide }) {
  function printState(state){
    const yes = "Finished ✅";
    const no = "Not finished ❌";

    if(state){
      //console.log(state);
      return yes;
    }else{
      //console.log(state);
      return no;
    }
  }
  return (
    <Modal
      show={showM}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="head-modal-info">
        <Modal.Title id="contained-modal-title-vcenter" >
        <div className="title-modal-info">
        <h2 >Description wish</h2>
        </div>
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4><b>Name wish: </b> {parentToChild.text}</h4>
        <br/>
        <h5><b>State wish: </b>{printState(parentToChild.done) }</h5>
        <br/>
        <InputGroup>
          <InputGroup.Text>
            Edit description
          </InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" defaultValue={parentToChild.description} />
        </InputGroup>

      </Modal.Body>
      <Modal.Footer>
        <Button className='bt-saveAndClouse' onClick={onHide}>Save & Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;