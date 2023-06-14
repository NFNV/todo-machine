import React, { useState } from "react"
import { TodoList } from "./components/TodoList"
import { TodoCounter } from "./components/TodoCounter"
import { TodoSearch } from "./components/TodoSearch"
import { TodoItem } from "./components/TodoItem"
import { CreateTodoButton } from "./components/CreateTodoButton"
import { Title } from "./components/Title"

// const defaultTodos = [
//   { text: "One", completed: false },
//   { text: "Two", completed: false },
//   { text: "Three", completed: false },
//   { text: "Four", completed: false },
//   { text: "Five", completed: false },
// ]

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos))

// localStorage.removeItem("TODOS_V1")

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem)

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", [])
  const [searchValue, setSearchValue] = useState("")

  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
  )

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text == text)
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text == text)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <>
      <Title />
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
