import style from './Button.module.scss';

type Buttonprops = {
  texto: string;
}

function Button({ texto }: Buttonprops) {
  return (
    <button className={style.btn}>{texto}</button>
  )
}

export default Button;