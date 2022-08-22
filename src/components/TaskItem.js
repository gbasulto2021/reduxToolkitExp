import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask} from '../features/tasks'

const TaskItem = ({data, setDataToEdit}) => {
  const dispatch = useDispatch();
 
  const {id,name, description} = data;

  
   
  return (
    <div className='box'>
        <p>{name}</p>
        <p>{description}</p>
        <button onClick={(e)=> setDataToEdit(data)}>Editar</button>
        <button onClick={()=> dispatch(deleteTask(id))}>Eliminar</button>
        
    </div>
  )
}

export default TaskItem