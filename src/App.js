import React, { useState } from "react"
import { TodoList } from "./components/TodoList"
import { TodoCounter } from "./components/TodoCounter"
import { TodoSearch } from "./components/TodoSearch"
import { TodoItem } from "./components/TodoItem"
import { CreateTodoButton } from "./components/CreateTodoButton"
import { Title } from "./components/Title"

const defaultTodos = [
  { text: "Action 1", completed: true },
  { text: "Action 2", completed: false },
  { text: "Action 3", completed: false },
  { text: "Action 4", completed: false },
  { text: "Action 5", completed: false },
]

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [todos, setTodos] = useState(defaultTodos)

  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  return (
    <>
      <Title />
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
