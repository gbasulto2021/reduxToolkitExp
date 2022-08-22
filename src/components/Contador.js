import { useSelector, useDispatch } from "react-redux";
import {increment,decrement,reset,incrementByAmount,decrementByAmount} from "../features/contador"
import { useState } from "react";
const Contador = () => {
    const stateContador = useSelector(state=> state.contador.value)
    const dispatch = useDispatch();

    const [input, setInput] = useState(0)
    const [amount, setAmount] = useState(0)
    

    const handleChange =(e)=>{
        setInput(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        setAmount(input)
        setInput(0)
       
    
    }

 
  return (
    <div className="contador">
    <h3>{stateContador}</h3>
    <button onClick={()=> dispatch(increment())}>+</button>
    <button onClick={()=> dispatch(decrement())}>-</button>
    <button onClick={()=> dispatch(reset())}>0</button>
    <button onClick={()=> dispatch(incrementByAmount(Number(amount)))}>{amount > 0 ? `+ ${amount}` : "?"}</button>
    <button onClick={()=> dispatch(decrementByAmount(Number(amount)))}>{amount > 0 ? `- ${amount}` : "?"}</button>
    <form onSubmit={handleSubmit}>
        <input type="text" name="amount" value={input} onChange={handleChange} />
      
    </form>
    </div>
  )
}

export default Contador