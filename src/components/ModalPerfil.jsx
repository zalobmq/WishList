import React  from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function modalPerfil({ showM, onHide }) {
  return (
    <Modal
      show={showM}
      size="lg"
    >
      <Modal.Header className="head-modal-info">
        <Modal.Title>
          <div className="title-modal-info">
            <h2>Profile</h2>
          </div>

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          <b>Author: </b>
          Gonzalo Bretones-Mora Quero
        </h4>
        <br />
        <h4>
          <b>GitHub: </b>
          <a href="https://github.com/zalobmq/WishList">Zalobmq proyect</a>
        </h4>
        <br />
        <h4>
          <b>Proyect: </b>
          WishList with React
        </h4>
        <br />
        <h4>
          <b>Subject: </b>
          Web development in client environment
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default modalPerfil;
