import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function WishItem({ wish }) {
  return (
    <li className="list-group-item wishItem">
      <input type="checkbox" defaultChecked={wish.done} id={wish.text} />
      <label 
      className={ classNames({'text-decoration-line-through':wish.done,} //ESTE SE EJECUTA SI done=true
      )
    }
      htmlFor={wish.text}>{wish.text}</label>
    </li>
  );
}

//DEFINIR UN DESEO
WishItem.propTypes = {
  wish: PropTypes.shape({
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
};

//DESEO POR DEFECTO
WishItem.defaultProps = {
  wish: {
    text: '',
    done: false,
  },
};

export default WishItem;
