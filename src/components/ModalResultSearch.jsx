import React  from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalResultSearch({ showM, onHide , wishItem}) {

  const wishTitleNotFound = "WISH NOT SAVED IN THE LIST";
  const wishStateNotFound = "Empty.";
  const wishDescriptionNotFound = "The wish is not saved in the list. Add it or Search for another wish.";

  let wishTitle = "hola";
  let wishState = "";
  let wishDescription = "";

  function printState(state) {
    const yes = 'Finished ✅';
    const no = 'Not finished ❌';
    const Empty = "Empty";

    if (wishItem.done != "Empty"){
      if (state) {
        // console.log(state);
        return yes;
      }
      // console.log(state);
      return no;
    }else{
      return Empty;
    }
    }
    
  return (
    <Modal
      show={showM}
      size="lg"
    >
      <Modal.Header className="head-modal-info">
        <Modal.Title>

          <div className="title-modal-info">
            <h2>NAME WISH: {wishItem.text}</h2>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4><b>ESTATE: </b>{printState(wishItem.done)}</h4>
        <br></br>
        <h4><b>DESCRIPTION: </b>{wishItem.description}</h4>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalResultSearch;
