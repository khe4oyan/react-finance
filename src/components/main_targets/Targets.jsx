import './targets.css';
import Target from '../main_targets_target/Target';
import Nothing from '../nothing/Nothing';

export default function Targets({balance, targetsList, setTargetsList}) {
  
  return (
    <div className='targets'>
      {
        targetsList.length > 0 ?
        targetsList.map((item, ind) => {
          return <Target setTargetsList={setTargetsList} ind={ind} balance={balance} data={item} key={`key-${ind}`}/>
        }) :
        <Nothing message={'No targets'}/>
      }
    </div>
  );
}