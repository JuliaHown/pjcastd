import style from './Timer.module.scss'
import Button from "../Button"
import Clock from './Clock'

export default function Timer() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button texto='Começar!' />
    </div>
  )
}
