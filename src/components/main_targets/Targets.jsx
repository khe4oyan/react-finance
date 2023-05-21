import './targets.css';
import Target from '../main_targets_target/Target';
import Nothing from '../nothing/Nothing';

export default function Targets({setBalance, balance, targetsList, setTargetsList}) {
  return (
    <div className='targets'>
      {
        targetsList.length > 0 ?
        targetsList.map((data, ind) => {
          return <Target setBalance={setBalance} setTargetsList={setTargetsList} ind={ind} balance={balance} data={data} key={`key-${ind}`}/>
        }) :
        <Nothing message={'No targets'}/>
      }
    </div>
  );
}