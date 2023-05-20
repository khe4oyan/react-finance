import './targets.css';
import Target from '../main_targets_target/Target';

export default function Targets({balance, targetsList, setTargetsList}) {
  
  return (
    <div className='targets'>
      <Target />
    </div>
  );
}