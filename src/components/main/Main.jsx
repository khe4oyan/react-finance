import { useEffect, useState } from 'react';
import Panel from '../main_panel/MainPanel';
import Targets from "../main_targets/Targets";
import './main.css'

export default function Main({balance}) {
  const [targetsList, setTargetsList] = useState(() => {
    // get user targets list and return it
    let list = JSON.parse(localStorage.getItem('targetsList'));
    if (list == undefined) {
      localStorage.setItem('targetsList', JSON.stringify([]));
      list = [];
    }
    return list;
  });

  useEffect(() => {
    localStorage.setItem('targetsList', JSON.stringify(targetsList));
  }, [targetsList]);

  return (
    <main className='main container'>
      <Panel setTargetsList={setTargetsList}/>
      <Targets balance={balance} targetsList={targetsList} setTargetsList={setTargetsList}/>
    </main>
  );
}