import './target.css';

export default function Target() {
  /*
    need:
    incom:
      target name
      target price
      setTargetList: function for edit or delete buttons
    local:
      target-lacks
  */

  return (
    <div className='target'>
      <div className='target-info'>
        <h2 className='target-name'>Videocard</h2>
        <p className='target-price'>Price: 200</p>
        <p className='target-lacks'>Need more(200)</p>
      </div>
      <div className='target-panel'>
        <button className='target-panel__btn target-panel__btn-edit'>edit</button>
        <button className='target-panel__btn target-panel__btn-delete'>delete</button>
      </div>
    </div>
  );
}