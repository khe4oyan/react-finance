import './target.css';

export default function Target() {
  return (
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
  );
}