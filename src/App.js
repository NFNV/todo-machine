import { TodoList } from "./components/TodoList"
import { TodoCounter } from "./components/TodoCounter"
import { TodoSearch } from "./components/TodoSearch"
import { TodoItem } from "./components/TodoItem"
import { CreateTodoButton } from "./components/CreateTodoButton"
import { Title } from "./components/Title"

const defaultTodos = [
  { text: "Action 1", completed: false },
  { text: "Action 2", completed: false },
  { text: "Action 3", completed: false },
  { text: "Action 4", completed: false },
  { text: "Action 5", completed: false },
]

function App() {
  return (
    <>
      <Title />
      <TodoCounter completed={5} total={10} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
