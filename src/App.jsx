import './App.css';
import React, { useState } from 'react';
import WishList from './components/WishList';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import WishInput from './components/WishInput';
import { v4 as Uuidv4 } from 'uuid';

/**
 * Definimos un array de deseos.
 *
 * Formado por un texto y un estado.
 */
const inicialWishes = [
  { id: Uuidv4(), text: 'Aprender React', done: false },
  { id: Uuidv4(), text: 'Aprender PHP', done: false },
  { id: Uuidv4(), text: 'Aprender Java', done: true },
  { id: Uuidv4(), text: 'Aprender HTML', done: false },
];

function App() {
  const [wishes, setWishes] = useState(inicialWishes);
  // console.log(inicialWishes[0].text);
  return (
    /* ESTO ES EL ELEMENTO PADRE */
    <>
      <div className="container-fluid" />
      <h1>My WishList</h1>
      <WishInput

        onNewWish={(newWish) => {
          console.log('Se ha lanzado el evento');
          setWishes([...wishes, newWish]);
        }}
      />
      <WishList wishes={wishes} />
    </>
  );
}

export default App;
