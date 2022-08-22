import React from 'react'
import { useSelector } from 'react-redux'
import FormTask from './FormTask';
import TaskItem from './TaskItem';
import { useState } from 'react';

const TasksList = () => {
      const stateTask = useSelector(state=> state.tasks)
      // console.log(stateTask);
      const [dataToEdit, setDataToEdit] = useState(null);

      
  return (
      <div>
          <h1>TasksList</h1>
          <div>
            <FormTask dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}/>
          </div>
          <br/>
          
          <div>
            {stateTask.length> 0 ?
            stateTask.map(task=> <TaskItem key={task.id} data={task} setDataToEdit={setDataToEdit}/>):
            "No hay tareas que mostrar"
            }
            
          </div>
      </div>
  )
}

export default TasksList