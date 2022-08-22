import React from 'react'
import { useState, useEffect } from 'react'
import { addTask, editTask } from '../features/tasks'
import { useDispatch } from 'react-redux'
import {v4 as uuid} from "uuid"
const initialForm = {
    name:"",
    description:"",
    id: null
}



const FormTask = ({dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(initialForm)
  
    const dispatch = useDispatch();

    useEffect(() => {
        if(dataToEdit){
          setForm(dataToEdit)
        }else{
          setForm(initialForm)
        }
    
      }, [dataToEdit])
      
    
     const handleChange = (e)=>{
       setForm({
        ...form,
        [e.target.name]: e.target.value
       })
    }

     const handleSubmit =(e)=>{
       e.preventDefault();

       if(form.id === null){
       
           dispatch(addTask({...form, id: uuid()}))
     }else{
           dispatch(editTask(form))
     }
      
       handleReset()
    }

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    };

 

    

    

    

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Name' value={form.name} onChange={handleChange}/>
        <input type="text" name='description' placeholder='Description' value={form.description} onChange={handleChange}/>
        <input type="submit" value={dataToEdit? "Actualizar tarea":"Añadir tarea"} />
    </form>
  )
}

export default FormTask