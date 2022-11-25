import React, { useRef, useState } from 'react';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function MyVerticallyCenteredModal({parentToChild, showM, onHide, dsToParent,}) {
  function printState(state) {
    const yes = 'Finished ✅';
    const no = 'Not finished ❌';

    if (state) {
      // console.log(state);
      return yes;
    }
    // console.log(state);
    return no;
  }
  const inputText = useRef();
  
  function saveEditDescription (){
    console.log("El valor añadiod es: "+inputText.current.value);
    if (inputText.current.value){

        dsToParent({id: parentToChild.id,
          text: parentToChild.text,
          done: parentToChild.done,
          description: inputText.current.value,
        });
    }
    console.log("descripcion introducida en el wish: "+parentToChild.description);
  }
  return (
    <Modal
      show={showM}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="head-modal-info">
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="title-modal-info">
            <h2>Description wish</h2>
          </div>

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          <b>Name wish: </b>
          {parentToChild.text}
        </h4>
        <br />
        <h5>
          <b>State wish: </b>
          {printState(parentToChild.done) }
        </h5>
        <br />
        <InputGroup>
          <InputGroup.Text>
            Edit description
          </InputGroup.Text>
          <Form.Control 
          as="textarea" 
          aria-label="With textarea" 
          defaultValue={parentToChild.description} 
          ref={inputText}/>

        </InputGroup>

      </Modal.Body>
      <Modal.Footer>
        <Button className="bt-saveAndClouse"  onClick={() =>  saveEditDescription()}>Save </Button>
        <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
      </Modal.Footer>
    </Modal>
  );
}
MyVerticallyCenteredModal.propTypes = {
  newwish: PropTypes.func,
};
MyVerticallyCenteredModal.defaultProps = {
  newwish: () => {},
};
export default MyVerticallyCenteredModal;
