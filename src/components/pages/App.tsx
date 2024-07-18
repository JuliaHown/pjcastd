import Forms from '../Forms'
import List from '../List'
import Timer from '../Timer';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Forms />
      <List />
      <Timer />
    </div>
  );
}

export default App;
