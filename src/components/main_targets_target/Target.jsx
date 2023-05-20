import { useState } from 'react';
import './target.css';

export default function Target({setTargetsList, ind, balance, data}) {
  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState(data[0]);
  const [editPrice, setEditPrice] = useState(data[1]);
  const targetLacks = data[1] - balance < 0 ? 0 : Math.abs(balance - data[1]); 

  const [targetLacksPrcent, barColor] = prcentCalculate(data[1], balance);

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
    setEditMode(false);
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
            <p className='target-price'>Price: {data[1]}</p>
            <div className='progress-bar'>
              <div style={{'width': `${targetLacksPrcent}%`}} className={`progress-bar__bar ${barColor}`}></div>
            </div>
            <p className={'target-lacks'}>Done({targetLacksPrcent}%) {targetLacksPrcent < 100 && `You need: ${targetLacks}`}</p>
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

function prcentCalculate(num1, num2) {
  let res = [Math.floor(( num2 / num1 ) * 100)];
  if (res[0] > 100) {
    res[0] = 100;
  }

  if (res[0] < 26) { res.push('progress-bar__bar-25')} else
  if (res[0] < 91) { res.push('progress-bar__bar-90')} else
  if (res[0] < 101) { res.push('progress-bar__bar-100')}

  return res;
}