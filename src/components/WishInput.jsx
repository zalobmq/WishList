import React, { useRef } from 'react';
import { v4 as Uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

/**
 * WishInput ___ BARRA PARA AÑADIR UN NUEVO DESEO.
 *
 * @param {Object} onNewWish
 * @returns
 */

function WishInput({ onNewWish }) {
  //---------------------------------------------------
  // VARS
  //---------------------------------------------------

  const inputText = useRef();

  //---------------------------------------------------
  // FUNTIONS
  //---------------------------------------------------

  /**
   * La funcion saveNewWishAndClear
    Añade un nuevo deseo a la lista y luego vacia el input para que se pueda añadir mas deseos,
    a demas controla que se haya escrito algun deseo para evitar que se añadan deseos vacios.

  Al crear un nuevo deseo se crea con un id= Autoincrementado , nombre= Introduciodo por el usuario
  estado= No realizado , descricion= vacia.

   * @returns Nuevo deseo
   */

  function saveNewWishAndClear() {
    if (inputText.current.value) {
      onNewWish({
        id: Uuidv4(), text: inputText.current.value, done: false, description: '',
      });

      inputText.current.value = '';
    }
  }

  //---------------------------------------------------
  //---------------------------------------------------

  return (
    <fieldset>

      {/* Icono inicial  */}

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </span>

        {/* Barra para añadir el nombre de un nuevo deseo  */}

        <input
          type="text"
          placeholder="Enter the new wish"
          name="IntroNewWish"
          className="form-control"
          ref={inputText}
          onKeyUp={(event) => {
            if (event.key === 'Enter' && inputText.current.value.length > 0) {
              onNewWish({
                id: Uuidv4(), text: inputText.current.value, done: false, description: '',
              });
              inputText.current.value = '';
            }
          }}

        />

        {/* Boton Añadir nuevo deseo */}

        <button
          type="button"
          id="bt"
          className="btn btn-outline-secondary btn-addW"
          onClick={saveNewWishAndClear}
        >
          ADD WISH
        </button>
      </div>

    </fieldset>

  );
}

WishInput.propTypes = {
  onNewWish: PropTypes.func,
};
WishInput.defaultProps = {
  onNewWish: () => { },
};

export default WishInput;
