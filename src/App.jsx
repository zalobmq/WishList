import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import { v4 as Uuidv4 } from 'uuid';
import WishInput from './components/WishInput';
import WishList from './components/WishList';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ModalPerfil from './components/ModalPerfil';


const imgLogo = '/src/img/logo2.png';
const imgProfile = '/src/img/user.png';

const initialWishes = [
  { id: Uuidv4(), text: 'Aprender React', done: false, description: 'HOLA SOY DESCRIPCION DE APRENDER ' },
  { id: Uuidv4(), text: 'Dar de alta a los alumnos en Moodle', done: true, description: 'HOLA SOY DESCRIPCION DE DAR ' },
  { id: Uuidv4(), text: 'Preparar apuntes', done: false, description: 'HOLA SOY DESCRIPCION DE PREPARAR ' },
  { id: Uuidv4(), text: 'Desayunar', done: true, description: 'HOLA SOY DESCRIPCION DE DESAYUNAR ' },
];






/**
 * Manage a wish list...
 * @returns HTML with a wish list.
 */
function App() {
  const [wishes, setWishes] = useState(initialWishes);
  const [modalShow, setModalShow] = React.useState(false);


  useEffect(() => {
    setWishes(JSON.parse(localStorage.getItem('wishes')) || initialWishes);
  }, []);

  useEffect(() => {
    localStorage.setItem('wishes', JSON.stringify(wishes));
  }, [wishes]);

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

            <Button variant="outline-warning" onClick={() => setModalShow(true)} className="bt-profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" className="ico-profile">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
              <b className="tl-profile">PROFILE</b>
            </Button>
          </li>
        </ul>
        <ModalPerfil
          showM={modalShow}
          onHide={() => setModalShow(false)}
        />
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

