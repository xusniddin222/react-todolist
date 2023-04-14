import React from 'react'
import uuid from 'react-uuid'

function FormTodo({input, setInput, todos, setTodos}) {
    const handleChange = (e)=>{
        setInput(e.target.value)
        // console.log(input);
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setTodos([...todos, {title:input, id:uuid(), completed:false}])
        setInput('')
    }
    // console.log(todos);  
  return (
    <form className='add-todo-form' onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your todo here...' required className='add-todo-input' onChange={handleChange} value={input}/>
        <button className='add-todo-button' type='submit' >Add</button>
    </form>
  )
}

export default FormTodo