import './target.css';

export default function Target({setTargetsList, ind, balance, data}) {
  const targetLacks = data[1] - balance < 0 ? 0 : Math.abs(balance - data[1]); 

  return (
    <div className='target'>
      <div className='target-info'>
        <h2 className='target-name'>{data[0]}</h2>
        <p className='target-price'>Salary: {data[1]}</p>
        <p className='target-lacks'>$({targetLacks})</p>
      </div>
      <div className='target-panel'>
        <button className='target-panel__btn target-panel__btn-edit'>edit</button>
        <button className='target-panel__btn target-panel__btn-delete'>delete</button>
      </div>
    </div>
  );
}