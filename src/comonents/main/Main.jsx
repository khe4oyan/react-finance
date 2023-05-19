import MainPanel from '../main_panel/MainPanel';
import Targets from "../main_targets/Targets";



export default function Main() {
  return (
    <main className='container'>
      <MainPanel />      
      <Targets />
    </main>
  );
}