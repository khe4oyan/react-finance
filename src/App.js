import { useState } from 'react';
import './App.css';

export default function App() {
  const [balance, setBalance] = useState(() => {
    const balance = localStorage.getItem('balance') ?? (() => {
      localStorage.clear();
      localStorage.setItem('balance', 0);
      return 0;
    })();

    return +balance;
  });

  return (
    <div className="App">
      <header className='header container'>
        <button className='header__button header__button-rem'>rem</button>
        <h2 className='header__balance'> ${balance} </h2>
        <button className='header__button header__button-add'>add</button>
      </header>

      <main className='container'>
        <div className='panel'>
          <input className='panel__target-name' type='text' placeholder='target name'/>
          <input className='panel__target-price' type='text' placeholder='price'/>
          <button className='panel__add-btn'>add new target</button>
        </div>

        <div className='targets'>

          <div className='target'>
            <div className='target-info'>
              <h2 className='target-name'>Target name</h2>
              <p className='target-price'>target price</p>
              <p className='target-lacks'>100</p>
            </div>
            <div className='target-panel'>
              <button className='target-panel__btn target-panel__btn-edit'>edit</button>
              <button className='target-panel__btn target-panel__btn-delete'>delete</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}