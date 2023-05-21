import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';

export default function App() {
  const [balance, setBalance] = useState(() => {
    const balance = localStorage.getItem('balance') ?? (() => {
      localStorage.clear();
      localStorage.setItem('balance', 0);
      return 0;
    })();

    return +balance;
  });

  useEffect(() => {
    localStorage.setItem('balance', balance);
  }, [balance]);

  return (
    <div className="App">
      <Header balance={balance} setBalance={setBalance}/>
      <Main balance={balance} setBalance={setBalance}/>
    </div>
  );
}