import { useState } from 'react';
import './target.css';

export default function Target({setTargetsList, ind, balance, data}) {
  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState(data[0]);
  const [editPrice, setEditPrice] = useState(data[1]);
  const targetLacks = data[1] - balance < 0 ? 0 : Math.abs(balance - data[1]); 

  function del() {
    setTargetsList(prev => {
      return prev.filter((_, index) => { return index != ind});
    });
  }
  function edit() {
    setEditMode(true);
  }
  function cancel() {
    setEditMode(false);
  }
  function done() {
    setTargetsList(prev => {
      prev[ind] = [editName, editPrice];
      return [...prev];
    });
    cancel();
  }
  
  return (
    <div className='target'>
      <div className='target-info'>
        {
          editMode ?
          <>
            <input onChange={(e) => {setEditName(e.target.value)}} type='text' defaultValue={editName}/>
            <input onChange={(e) => {setEditPrice(e.target.value)}} type='number' defaultValue={editPrice}/>
          </> :
          <>
            <h2 className='target-name'>{data[0]}</h2>
            <p className='target-price'>Salary: {data[1]}</p>
            <p className={`target-lacks ${targetLacks == 0 && 'target-lacks-done'}`}>$({targetLacks})</p>
          </>
        }
      </div>
      <div className='target-panel'>
        {
          editMode ?
          <>
            <button onClick={done} className='target-panel__btn'>done</button>
            <button onClick={cancel} className='target-panel__btn'>cancel</button>
          </> :
          <>
            <button onClick={edit} className='target-panel__btn target-panel__btn-edit'>edit</button>
            <button onClick={del} className='target-panel__btn target-panel__btn-delete'>delete</button>
          </>
        }
      </div>
    </div>
  );
}