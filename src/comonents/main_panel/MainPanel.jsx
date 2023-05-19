import './mainPanel.css';

export default function MainPanel() {
  return (
    <div className='panel'>
      <input className='panel__target-name' type='text' placeholder='target name' />
      <input className='panel__target-price' type='text' placeholder='price' />
      <button className='panel__add-btn'>add new target</button>
    </div>
  );
}