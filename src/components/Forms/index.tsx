import React, { useCallback, useState } from 'react';
import Button from '../Button';
import style from './Forms.module.scss';
import { ITarefa } from '../../types/tarefas';

interface FormProps {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

const Form: React.FC<FormProps> = ({ setTarefas }) => {
  const [tarefa, setTarefa] = useState<string>('');
  const [tempo, setTempo] = useState<string>('00:00');

  const adicionarTarefa = useCallback((evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    setTarefas(tarefasAntigas => [
      ...tarefasAntigas,
      {
        tarefa,
        tempo
      }
    ]);
    setTarefa('');
    setTempo('00:00');
  }, [tarefa, tempo, setTarefas]);

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(evento) => setTarefa(evento.target.value)}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button texto='Adicionar' type='submit' />
    </form>
  );
}

export default Form;
