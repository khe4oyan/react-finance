import { useState } from 'react';
import './header.css';
import HeaderModal from '../header_modal/HeaderModal';


export default function Header({balance, setBalance}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className='header container'>
        <h2 className='header__balance'> ${balance} </h2>
        <button onClick={() => setShowModal(true)} className='header__button'>change</button>
      </header>
      {
        showModal &&
        <HeaderModal balance={balance} setBalance={setBalance} modalClose={() => {setShowModal(false)}}/>
      }
    </>
  );
}
