import { useState } from 'react';
import Panel from '../main_panel/MainPanel';
import Targets from "../main_targets/Targets";

export default function Main({balance}) {
  // balance use in Targets for calculating 
  
  const [targetsList, setTargetsList] = useState(() => {
    // get user targets list and return it
    let list = JSON.parse(localStorage.getItem('targetsList'));
    if (list == undefined) {
      localStorage.setItem('targetsList', JSON.stringify([]));
      list = [];
    }
    return list;
  });


  return (
    <main className='container'>
      <Panel />      
      <Targets />
    </main>
  );
}