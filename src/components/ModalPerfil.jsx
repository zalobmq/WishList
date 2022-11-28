import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/**
 * Modal de informacion del autor del proyecto y informacion del mismo.
 * @param {Object} showM
 * @param {Object} onHide
 *
 * @returns Modal con los datos de mi perfil.
 */
function MyVerticallyCenteredModal({ showM, onHide }) {
//---------------------------------------------------
  //---------------------------------------------------

  return (

  // PARAMETROS DEL MODAL

    <Modal
      show={showM}
      size="lg"
    >
      {/* MODAL-HEADER __ Cabecera con titulo del modal */}

      <Modal.Header className="head-modal-info">
        <Modal.Title>
          <div className="title-modal-info">
            <h2>Profile</h2>
          </div>

        </Modal.Title>
      </Modal.Header>

      {/* MODAL-BODY __ Datos del perfil */}

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

      {/* MODAL-FOOTER __ BOTONE PARA CERRAR LA VENTANA */}

      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
MyVerticallyCenteredModal.propTypes = {
  onHide: PropTypes.func,
  showM: PropTypes.bool,

};
MyVerticallyCenteredModal.defaultProps = {
  onHide: () => {},
  showM: true,

};
export default MyVerticallyCenteredModal;
