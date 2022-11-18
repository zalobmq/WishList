/* import './App.css';
import React, { useState } from 'react';
import WishList from './components/WishList';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import WishInput from './components/WishInput';
import { v4 as Uuidv4 } from 'uuid';


 * Definimos un array de deseos.
 *
 * Formado por un texto y un estado.
 
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
    /* ESTO ES EL ELEMENTO PADRE 
    <>
      <div className="container-fluid" />
      <h1>My WishList</h1>
      <WishInput

        onNewWish={(newWish) => {
          console.log('Se ha lanzado el evento');
          setWishes([...wishes, newWish]);
        }}
      />
      <WishList 
      wishes={wishes}
      onUpdateWish = {(updatedWish) =>{
        //console.log(updatedWish);

        let updatedWish = [...wishes];

        setWishes(updatedWish);

      }} 
      />
    </>
  );
}

export default App;
 */
import React, { useState, useEffect } from 'react';
import { v4 as Uuidv4 } from 'uuid';
import WishInput from './components/WishInput';
import WishList from './components/WishList';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const initialWishes = [
  { id: Uuidv4(), text: 'Aprender React', done: false },
  { id: Uuidv4(), text: 'Dar de alta a los alumnos en Moodle', done: true },
  { id: Uuidv4(), text: 'Preparar apuntes', done: false },
  { id: Uuidv4(), text: 'Desayunar', done: true },
];

/**
 * Manage a wish list...
 * @returns HTML with a wish list.
 */
function App() {
  const [wishes, setWishes] = useState(initialWishes);

  useEffect(() => {
    console.log(`Render App x${wishes.length}`);
  });

  return (
    <div className="container-fluid container-wishlist">
      <div className='header'>
        <img className="logo" src='/src/img/wishlist.png'></img>
        <h1>- WishList -</h1>
      </div>
      <div className='interface'>
       <div className='wishInput-container'>
            <WishInput 
              onNewWish={(newWish) => {
                setWishes([...wishes, newWish]);
              }}
            />
            
        </div>
          <WishList
            wishes={wishes}
            onUpdateWish={(updatedWish) => {
              const updatedWishes = [...wishes];
              const modifyWish = updatedWishes.find((wish) => wish.id === updatedWish.id);
              modifyWish.text = updatedWish.text;
              modifyWish.done = updatedWish.done;
              setWishes(updatedWishes);
            }}
          />
      </div>
    </div>
  );
}

export default App;

