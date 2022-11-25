import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import { v4 as Uuidv4 } from 'uuid';
import WishInput from './components/WishInput';
import WishList from './components/WishList';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ModalPerfil from './components/ModalPerfil';
import ModalSearch from './components/modalSearch';


const imgLogo = '/src/img/logo2.png';

const initialWishes = [

];

/**
 * Manage a wish list...
 * @returns HTML with a wish list.
 */
function App() {

  const [wishes, setWishes] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalSearch, setModalSearchShow] = React.useState(false);



  useEffect(() => {
    setWishes(JSON.parse(localStorage.getItem('wishes')) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('wishes', JSON.stringify(wishes));
  }, [wishes]);

  useEffect(() => {
    console.log(`Render App x${wishes.length}`);
  });

  return (
    <div className="container-fluid container-wishlist">
      <div className="navBar-container">
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
        {/* MODAL PERFIL */}
        <ModalPerfil
          showM={modalShow}
          onHide={() => setModalShow(false)}
        />
        {/* MODAL VENTANA BUSCAR */}
        <ModalSearch
          showM={modalSearch}
          onHide={() => setModalSearchShow(false)}
        />
      </div>
      {/* BOTON DE BUSCAR */}
      <div className="interface ">
        <Button variant="outline-danger"  className="bt-search" onClick={() => setModalSearchShow(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16" className="ico-profile">
            <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
            <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
          </svg>
          <b className="tl-profile">WINDOWS SEARCH WISH</b>
        </Button>
      </div>
      <div className="interface">
        {/* CAMPO DE TEXTO PARA AÑADIR NUEVO DESEO */}
        <div className="wishInput-container">
          <WishInput
            onNewWish={(newWish) => {
              setWishes([...wishes, newWish]);
            }}
          />

        </div>
        {/* LISTA DE LOS DESEOS GUARDADOS  */}
        <WishList
          wishes={wishes}
          onUpdateWish={(updatedWish) => {
            const updatedWishes = [...wishes];
            const modifyWish = updatedWishes.find((wish) => wish.id === updatedWish.id);
            modifyWish.text = updatedWish.text;
            modifyWish.done = updatedWish.done;
            modifyWish.description = updatedWish.description;

            setWishes(updatedWishes);
          }}
        />
      </div>
    </div>
  );
}

export default App;
