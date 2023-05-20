import { useState } from 'react';
import './mainPanel.css';

export default function MainPanel({setTargetsList}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  function add() {
    if (name != '' && price > 0) {
      setTargetsList((prev) => {
        return [...prev, [name, price]];
      });
      setName('');
      setPrice('');
    }
  }
 
  return (
    <div className='panel'>
      <input value={name} onChange={(e) => {setName(e.target.value)}} className='panel__target-name' type='text' placeholder='target name' />
      <input value={price} onChange={(e) => {setPrice(+e.target.value)}} className='panel__target-price' type='number' placeholder='price' />
      <button onClick={add} className='panel__add-btn'>add new target</button>
    </div>
  );
}