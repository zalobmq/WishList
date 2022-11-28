import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

/**
 * WishList ___ LISTA DE TODOS LOS ITEMS / DESEOS GUARDADOS EN LA LISTA LOCAL.
 *
 * @param {Object} wishes
 * @param {Object} onUpdateWish
 * @returns
 */
function WishList({ wishes, onUpdateWish }) {
//---------------------------------------------------
  //---------------------------------------------------

  return (
    <ul className="list-group">
      {wishes.map(({
        id, text, done, description,
      }) => (
        <WishItem
          wish={{
            id, text, done, description,
          }}
          key={`wishItem-${id}`}
          onChangeWish={(updatedWish) => {
            // console.log(updatedWish);
            onUpdateWish(updatedWish);
          }}
          alls={wishes}
        />
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
      description: PropTypes.string.isRequired,
    }),
  ),
  onUpdateWish: PropTypes.func,

};

WishList.defaultProps = {
  wishes: [],
  onUpdateWish: () => ({
    id: '', text: '', done: false, description: '',
  }),
};

export default WishList;
