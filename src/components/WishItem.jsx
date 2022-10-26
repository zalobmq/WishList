import React, { } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function WishItem({ wish, onChangeWish }) {
  return (
    <li className="list-group-item wishItem">
      <input
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
        className={classNames({ 'text-decoration-line-through': wish.done }, // ESTE SE EJECUTA SI done=true
        )}
        htmlFor={wish.id}
        >
        {wish.text}
      </label>
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
  onChangeWish: () => {},
};

export default WishItem;
