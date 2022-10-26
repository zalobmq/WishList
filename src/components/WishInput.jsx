import React, { useRef } from 'react';
import { v4 as Uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


function WishInput({ onNewWish }) {
  const newWishText = '';
  const inputText = useRef();
  return (
    <fieldset>
      <label>New wish</label>
      <br />

      <input
        type="text"
        placeholder="Introduce tu nuevo wish"
        ref={inputText}
        onKeyUp={(event) => {
          if (event.key === 'Enter' && inputText.current.value.length > 0) {
            // console.log(newWishText);

            onNewWish({ id: Uuidv4(), text: inputText.current.value, done: false });
            inputText.current.value = '';
          }
        }}
      />

    </fieldset>
  );
}

WishInput.propTypes = {
  onNewWish: PropTypes.func,
};
WishInput.defaultProps = {
  onNewWish: () => {},
};
export default WishInput;
