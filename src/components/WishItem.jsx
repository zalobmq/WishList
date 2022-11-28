import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MyVerticallyCenteredModal from './modalInfo';


/**
 * WishItem ___ ITEM DE LA LISTA, INCLUYE EL CHECKBOX Y LOS BOTONES DE INFO Y BORRAR.
 * 
 * @param {Object} wish
 * @param {Object} onChangeWish
 * @param {Object} alls
 * @returns 
 */

function WishItem({ wish, onChangeWish, alls }) {

//---------------------------------------------------
  //VARS
//---------------------------------------------------

  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState({});
  const parentToChild = () => {
    setData({
      id: wish.id,
      text: wish.text,
      done: wish.done,
      description: wish.description,
    });
  };

  function deleteWish(alls , wish){

    alls = alls.filter((item) => item.text !== wish.text);
  }
//---------------------------------------------------
//---------------------------------------------------

  return (
    <li className="list-group-item wishItem">
      <div className="input-group mb-3 ">
        <div className="input-group-text ">

        {/* CHECKBOX ___ Modifica el estado del deseo chekeado= Realizado , noCheckeado= No realizado */}
          <input
            className="form-check-input mt-0"
            type="checkbox"
            defaultChecked={wish.done}
            id={wish.id}
            onChange={(event) => {
              onChangeWish({
                id: wish.id,
                text: wish.text,
                done: event.target.checked,
                description: wish.description,
              });
            }}

          />

          {/* NOMBRE DEL DESEO  ___ MUESTRA EL NOMBRE QUE LE PUSIMOS AL DESEO AL CREARLO*/}

          <label className={classNames({ 'text-decoration-line-through , clr-complete': wish.done }, 'bx-ws')} htmlFor={wish.id}>
            {wish.text}
          </label>

          {/* BOTON INFO ___ MUESTRA UN MODAL CON LA INFORMACION DEL DESEO Y UN CAMPO DE TEXTO PARA EDITAR LA DESCRIPCION */}

          <button className="input-group-text ico-info-W" onClick={() => { setModalShow(true); parentToChild(); }}>

            {/* Icono del boton  */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </button>

          {/* MODALINFO ___ MODAL DE INFO Y EDITAR  */}
          <MyVerticallyCenteredModal
            showM={modalShow}
            onHide={() => setModalShow(false)}
            parentToChild={data}
            dsToParent={(infoWishAndEdit) => {
              onChangeWish({
                id: infoWishAndEdit.id,
                text: infoWishAndEdit.text,
                done: infoWishAndEdit.done,
                description: infoWishAndEdit.description,
              });
              setModalShow(false);
            }}

          />

          {/* BOTON DELETE ___ BORRA EL DESEO EN EL QUE APARECE ESTE BOTON */}

          <button className="input-group-text ico-delete-W " onClick={() => deleteWish(alls, wish)}>

            {/* Icono del boton  */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg>
          </button>

        </div>
      </div>
    </li>
  );
}


WishItem.propTypes = {
  wish: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onChangeWish: PropTypes.func,
};

WishItem.defaultProps = {
  wish: {
    id: '',
    text: '',
    done: false,
    description: '',
  },
  onChangeWish: () => { },
};

export default WishItem;
