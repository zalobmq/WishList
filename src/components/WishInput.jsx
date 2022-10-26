import React, { useRef } from 'react';
import { v4 as Uuidv4 } from 'uuid';

function WishInput({ onNewWish }) {
  let newWishText = '';
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
          if (event.key === 'Enter' &&  inputText.current.value.length > 0) {
            // console.log(newWishText);

            onNewWish({ id: Uuidv4(), text:  inputText.current.value, done: false });
            inputText.current.value = '';
          }
        }}
      />

    </fieldset>
  );
}

export default WishInput;
