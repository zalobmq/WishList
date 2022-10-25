import React from 'react';

function WishInput({ onNewWish }) {

  let newWishText='';
  return (
    <fieldset>
    <label>New wish</label>
    <br></br>
    <input type="text" 
    placeholder="Introduce tu nuevo wish"
    onChange={(event) =>{
      newWishText = event.target.value;
    }}

    onKeyUp = {(event) =>{
      if(event.key === 'Enter' && newWishText.length > 0){
        //console.log(newWishText);

        onNewWish({text: newWishText , done:false});
        newWishText = ''; 
      }
    }}
    >

    </input>

    </fieldset>
  )
}

export default WishInput;
