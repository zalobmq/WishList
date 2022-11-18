import React, { useState, useEffect } from 'react';
import { v4 as Uuidv4 } from 'uuid';
import WishInput from './components/WishInput';
import WishList from './components/WishList';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const initialWishes = [
  { id: Uuidv4(), text: 'Aprender React', done: false, description: 'HOLA SOY DESCRIPCION' },
  { id: Uuidv4(), text: 'Dar de alta a los alumnos en Moodle', done: true, description: '' },
  { id: Uuidv4(), text: 'Preparar apuntes', done: false, description: '' },
  { id: Uuidv4(), text: 'Desayunar', done: true, description: '' },
];

const imgLogo = '/src/img/logo2.png';
const imgProfile = '/src/img/user.png';

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
      <div className='navBar-container'>
        <ul className='navBar-section'>
          <li className=' navBar-item navBar-item-logo'>
            <img className='navBar-item-logo' src={imgLogo}></img>
          </li>
          <li>
            
          </li>
          <li className='navBar-item navBar-item-profile'>
            <button className='bt-profile'>
            <img className='navBar-item-profile' src={imgProfile}></img>
            </button>
          </li>
        </ul>
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

