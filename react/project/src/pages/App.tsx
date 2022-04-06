import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import StopWatch from '../components/stopwatch';
import { ITask } from '../types/task';
import style from './App.module.scss';


function App() {
  //state, with default state
  //returns  an array[ state, functionToAlterState]
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(

      task => ({
        ...task,
        selected:task.id === selectedTask.id?true:false
      })

    ));

  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}
       selectTask={selectTask}
      />
      <StopWatch />
    </div>
  );
}

export default App;
