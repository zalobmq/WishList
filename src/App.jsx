import './App.css';
import React, { useState } from 'react';
import WishList from './components/WishList';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import WishInput from './components/WishInput';

/**
 * Definimos un array de deseos.
 *
 * Formado por un texto y un estado.
 */
const inicialWishes = [
  { text: 'Aprender React', done: false },
  { text: 'Aprender PHP', done: false },
  { text: 'Aprender Java', done: true },
  { text: 'Aprender HTML', done: false },
];

function App() {
   const [wishes , setWishes] = useState(inicialWishes);
  // console.log(inicialWishes[0].text);
  return (
    /* ESTO ES EL ELEMENTO PADRE */
    <>
      <div className="container-fluid" />
      <h1>My WishList</h1>
      <WishInput 

        onNewWish={(newWish) =>{
          console.log("Se ha lanzado el evento")
          setWishes([...wishes , newWish]);
        }}
      ></WishInput>
      <WishList wishes={wishes} />
    </>
  );
}

export default App;
