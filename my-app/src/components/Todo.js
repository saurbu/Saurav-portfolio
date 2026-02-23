import React, {useState} from 'react'

const Todo = props => {
    const [todoName, setTodoName] = useState('')
    const [todoList, setTodoList] = useState([])

    // const [todoState, setTodoState] = useState({userInput: '', todoList: []})

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value)
        // setTodoState({
        //    userInput: event.target.value,
        //    todoList: todoState.todoList 
        // })
    }

    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName))
        // setTodoState({userInput: todoState.userInput, todoList: todoState.todoList.contact(todoState.userInput)})
    }

    return (
      <div>
        <input type='text' placeholder='Todo' onChange={inputChangeHandler} value={todoName} />
        <button onClick={todoAddHandler}>Add todo</button>
        <ul>
          {todoList.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </div>
    )
}

export default Todo