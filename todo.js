// Build a simple todo app where the user can add new todos, update todos, delete todos, display the total number of todos.
const rootElement = document.getElementById('root')
function Todo() {
  const [todo, setTodo] = React.useState("")
  const [todos, setTodos] = React.useState([])

  const addNewTodo = () => {
    if (todo !== '') {
      setTodos([... todos, todo])
      console.log(todo)
      setTodo('')
    }
  }
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text
    })
    setTodos(newTodos)
  }

  const updateTodo = () => {}

  return (
    <div>
    <h1>Todo List App</h1>
    <div>
      <input type="text" placeholder="create new todo" value={todo} onChange={(event) => {setTodo(event.target.value)}}/>
      <button onClick={addNewTodo}>add</button>
    </div>
{/* display field */}
    <ul>
      {todos.map((todo)=>(
        <li key={todo}>{todo}{<button onClick={() => deleteTodo(todo)}>delete</button>}{<button onClick={updateTodo}>edit</button>}
        </li>
      ))}

    </ul>
    </div>
  )
}
ReactDOM.render(<Todo />, rootElement)


//onchange event handler triggers everytime my todo changes 
//onChange provides an events which is then use to get the value using event.target.value

//I used a spread operator to add todo items to the todos array because the todo state should never be mutated

//Array.map() method takes data transform to list view