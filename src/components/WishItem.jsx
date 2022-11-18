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
              });
            }}

          />
          <label
            className={classNames({ 'text-decoration-line-through , clr-complete': wish.done} ,'bx-ws'
            )}
            htmlFor={wish.id}
          >
            {wish.text}
          </label>
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
  }),
  onChangeWish: PropTypes.func,
};

// DESEO POR DEFECTO
WishItem.defaultProps = {
  wish: {
    id: '',
    text: '',
    done: false,
  },
  onChangeWish: () => { },
};

export default WishItem;
