import React, { } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function WishItem({ wish, onChangeWish }) {
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
          <button className='input-group-text ico-info-W'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
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
