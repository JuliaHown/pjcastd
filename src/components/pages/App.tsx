import Forms from '../Forms'
import List from '../List'
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Forms />
      <List />
    </div>
  );
}

export default App;
