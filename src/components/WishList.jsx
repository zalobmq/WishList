import React from 'react';
import PropTypes from 'prop-types';
import { v4 as Uuidv4 } from 'uuid';
import WishItem from './WishItem';

/**
 * Esta funcion recibe el objeto wishes
 *
 */
function WishList({ wishes }) {
  // console.log(wishes);
  return (
    <ul className="list-group">
      {wishes.map(({ id, text, done }) => (
        <WishItem wish={{ id, text, done }} key={`wishItem-${id}`} />
      ))}
    </ul>
  );
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ),
};

WishList.defaultProps = {
  wishes: [],
};

export default WishList;
