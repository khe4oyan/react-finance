import { useState } from 'react';
import './App.css';
import Header from './comonents/header/Header';
import Main from './comonents/main/Main';

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
      <Header balance={balance} setBalance={setBalance}/>
      <Main balance={balance}/>
    </div>
  );
}