import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

/**
 * Esta funcion recibe el objeto wishes
 *
 */
function WishList({ wishes  , onUpdateWish}) {
  // console.log(wishes);
  return (
    <ul className="list-group">
      {wishes.map(({ id, text, done , description }) => (
        <WishItem 
        wish={{ id, text, done , description }} 
        key={`wishItem-${id}`} 
        onChangeWish = {(updatedWish) =>{
          //console.log(updatedWish);
          onUpdateWish(updatedWish);
        }}
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
      description: PropTypes.string.isRequired
    }),
  ),
  onUpdateWish: PropTypes.func,

};

WishList.defaultProps = {
  wishes: [],
  onUpdateWish: () => ({ id: '' , text: '' , done:false ,description: ''}),
};

export default WishList;
