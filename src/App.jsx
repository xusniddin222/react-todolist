import { useState } from 'react'
import './App.css'
import FormTodo from './components/FormTodo'
import TodoList from './components/TodoList'
import './index.css'

function App() {
const [ input , setInput] = useState('')
const [todos  , setTodos] = useState([])

  return (
    <div className="App">
      <h1 className='title'>To Do list with React</h1>
      <FormTodo   input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
      <TodoList   todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
