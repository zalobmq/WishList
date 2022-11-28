import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

/**
 * MODAL INFO ___ INFORMACION DEL DESEO Y EDICION DE LA DESCRIPCION DEL MISMO.
 *
 * @param {Object} parentToChild
 * @param {Object} showM
 * @param {Object} onHide
 * @param {Object} dsToParent
 * @returns
 */
function MyVerticallyCenteredModal({
  parentToChild, showM, onHide, dsToParent,
}) {
//---------------------------------------------------
  // VARS
  //---------------------------------------------------

  const inputText = useRef();

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

  /**
   * Te permite guardar y editar la descripcion de un deseo.
   *
   * @returns Deseo modificado.
   */

  function saveEditDescription() {
    // console.log(`El valor añadiod es: ${inputText.current.value}`);
    if (inputText.current.value) {
      dsToParent({
        id: parentToChild.id,
        text: parentToChild.text,
        done: parentToChild.done,
        description: inputText.current.value,
      });
    }
    // console.log(`descripcion introducida en el wish: ${parentToChild.description}`);
  }

  //---------------------------------------------------
  //---------------------------------------------------

  return (

  // PARAMETROS DEL MODAL

    <Modal
      show={showM}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      {/* MODAL-HEADER __ Cabecera con titulo del modal */}

      <Modal.Header className="head-modal-info">
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="title-modal-info">
            <h2>Description wish</h2>
          </div>

        </Modal.Title>
      </Modal.Header>

      {/* MODAL-BODY __ Datos del deseo y campo para edirar */}

      <Modal.Body>
        <h4>
          <b>Name wish: </b>
          {parentToChild.text}
        </h4>
        <br />
        <h5>
          <b>State wish: </b>
          {printState(parentToChild.done)}
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
            ref={inputText}
          />

        </InputGroup>

      </Modal.Body>

      {/* MODAL-FOOTER __ BOTONES PARA GUARDAR Y CERRAR LA VENTANA */}

      <Modal.Footer>
        <Button className="bt-saveAndClouse" onClick={() => saveEditDescription()}>Save </Button>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
MyVerticallyCenteredModal.propTypes = {

  parentToChild: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};
MyVerticallyCenteredModal.defaultProps = {

  parentToChild: () => ({
    id: '', text: '', done: false, description: '',
  }),

};
MyVerticallyCenteredModal.propTypes = {
  onHide: PropTypes.func,
  showM: PropTypes.bool,
  dsToParent: ({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),

};
MyVerticallyCenteredModal.defaultProps = {
  onHide: () => {},
  showM: true,
  dsToParent: ({
    id: '',
    text: '',
    done: false,
    description: '',
  }),
};
export default MyVerticallyCenteredModal;
