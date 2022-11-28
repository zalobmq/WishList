import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/**
 * MODAL RESUL SEARCH ___ MUESTRA EL RESULTADO DE LA BUSQUEDA REALIZADA EN EL BUSCADOR.
 *
 * @param {Object} showM
 * @param {Object} onHide
 * @param {Object} wishItem
 * @returns
 */

function ModalResultSearch({ showM, onHide, wishItem }) {
  //---------------------------------------------------
  // FUNTIONS
  //---------------------------------------------------

  /**
   * Devuelve un string con el estado del deseo.
   * @param {boolean} state
   * @returns {String} Valor del deseo.
   */
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

  //---------------------------------------------------
  //---------------------------------------------------

  return (

    // PARAMETROS DEL MODAL
    <Modal
      show={showM}
      size="lg"
    >
      {/* MODAL-HEADER __ Cabecera con titulo del modal, el cual sera el nombre del deseo */}
      <Modal.Header className="head-modal-info">
        <Modal.Title>

          <div className="title-modal-info">
            <h2>
              NAME WISH:
              {wishItem.text}
            </h2>
          </div>
        </Modal.Title>
      </Modal.Header>

      {/* MODAL-BODY __ Datos del deseo */}

      <Modal.Body>
        <h4>
          <b>ESTATE: </b>
          {printState(wishItem.done)}
        </h4>
        <br />
        <h4>
          <b>DESCRIPTION: </b>
          {wishItem.description}
        </h4>

      </Modal.Body>

      {/* MODAL-FOOTER __ BOTON CERRAR LA VENTANA */}

      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalResultSearch;
