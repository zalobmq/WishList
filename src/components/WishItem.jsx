import React, {useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MyVerticallyCenteredModal from './modalInfo';

function WishItem({ wish, onChangeWish }) {

  const [modalShow, setModalShow] = React.useState(false);

  const [data, setData] = useState({});
  
  const parentToChild = () => {
    setData({id: wish.id,
      text: wish.text,
      done: wish.done,
      description: wish.description});
  }

  return (
    <li className="list-group-item wishItem">
      <div class="input-group mb-3 ">
        <div class="input-group-text ">


          <input
            class="form-check-input mt-0"
            type="checkbox"
            defaultChecked={wish.done}
            id={wish.id}
            onChange={(event) => {
              onChangeWish({
                id: wish.id,
                text: wish.text,
                done: event.target.checked,
                description: wish.description
              });
            }}

          />

          <label className={classNames({ 'text-decoration-line-through , clr-complete': wish.done }, 'bx-ws')} htmlFor={wish.id}>
            {wish.text}
          </label>
          <button className='input-group-text ico-info-W' onClick={() => {setModalShow(true); parentToChild()}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
            </svg>
          </button>
          <MyVerticallyCenteredModal
            showM={modalShow}
            onHide={() => setModalShow(false)}
            parentToChild = {data}
            
            
          />


          <button className='input-group-text ico-delete-W '>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
            </svg>
          </button>

        </div>
      </div>
    </li>
  );

}

// DEFINIR UN DESEO
WishItem.propTypes = {
  wish: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired
  }),
  onChangeWish: PropTypes.func,
};

// DESEO POR DEFECTO
WishItem.defaultProps = {
  wish: {
    id: '',
    text: '',
    done: false,
    description: ''
  },
  onChangeWish: () => { },
};

export default WishItem;
