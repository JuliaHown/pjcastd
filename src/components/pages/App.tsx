import {useState} from 'react'
import Forms from '../Forms'
import List from '../List'
import Timer from '../Timer';
import style from './App.module.scss';
import { ITarefa } from '../../types/tarefas'


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Forms setTarefas={setTarefas}/>
      <List tarefas={tarefas} />
      <Timer />
    </div>
  );
}

export default App;
