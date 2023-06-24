import React, { useState } from "react"
import { useLocalStorage } from "./useLocalStorage"
import { AppUI } from "./AppUI"

// localStorage.removeItem("TODOS_V1")

// const defaultTodos = [
//   { text: "Item 1", completed: true },
//   { text: "Item 2", completed: false },
//   { text: "Item 3", completed: false },
//   { text: "Item 4", completed: false },
//   { text: "Item 5", completed: true },
// ]

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos))

// The main component of the application
function App() {
  // State variables

  // todos: Represents an array of todo items
  // saveTodos: Function to save/update the todos in local storage
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", [])

  // searchValue: Represents the value entered in the search input field
  const [searchValue, setSearchValue] = useState("")

  // Calculate the number of completed todos

  // completedTodos: Filters the todos array and counts the number of todo items with 'completed' property as true
  const completedTodos = todos.filter((todo) => !!todo.completed).length

  // Calculate the total number of todos

  // totalTodos: Represents the total number of todo items in the todos array
  const totalTodos = todos.length

  // Filter todos based on the search value

  // searchedTodos: Filters the todos array based on the searchValue using case-insensitive matching
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
  )

  // Function to mark a todo item as completed

  // completeTodo: Marks a todo item as completed by modifying the 'completed' property of the todo with matching text
  const completeTodo = (text) => {
    // Create a copy of the todos array
    const newTodos = [...todos]

    // Find the index of the todo item with matching text
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)

    // Update the completed property of the found todo item to true
    newTodos[todoIndex].completed = true

    // Save the updated todos array in local storage and update the state
    saveTodos(newTodos)
  }

  // Function to delete a todo item

  // deleteTodo: Removes a todo item from the todos array by finding its index and using the splice method
  const deleteTodo = (text) => {
    // Create a copy of the todos array
    const newTodos = [...todos]

    // Find the index of the todo item with matching text
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)

    // Remove the todo item from the new array using splice
    newTodos.splice(todoIndex, 1)

    // Save the updated todos array in local storage and update the state
    saveTodos(newTodos)
  }

  // Render the main UI of the application
  return (
    <AppUI
      error={error}
      loading={loading}
      completedTodos={completedTodos} // Pass the number of completed todos to the AppUI component
      totalTodos={totalTodos} // Pass the total number of todos to the AppUI component
      searchValue={searchValue} // Pass the search value to the AppUI component
      setSearchValue={setSearchValue} // Pass the setSearchValue function to the AppUI component
      searchedTodos={searchedTodos} // Pass the filtered todos to the AppUI component
      completeTodo={completeTodo} // Pass the completeTodo function to the AppUI component
      deleteTodo={deleteTodo} // Pass the deleteTodo function to the AppUI component
    />
  )
}

export default App
