import './header.css';

export default function Header({balance, setBalance}) {
  function add() {
    // open modal window
  }
  
  function rem() {
    // open modal window
  }

  return (
    <header className='header container'>
      <button onClick={rem} className='header__button header__button-rem'>rem</button>
      <h2 className='header__balance'> ${balance} </h2>
      <button onClick={add} className='header__button header__button-add'>add</button>
    </header>
  );
}
