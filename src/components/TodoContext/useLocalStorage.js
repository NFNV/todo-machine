import { useEffect } from "react"
import { useState } from "react"

export const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)

        let parsedItem

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }

        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 2000)
  })

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item,
    saveItem,
    loading,
    error,
  }
}

// localStorage.removeItem("TODOS_V1")

// const defaultTodos = [
//   { text: "Item 1", completed: true },
//   { text: "Item 2", completed: false },
//   { text: "Item 3", completed: false },
//   { text: "Item 4", completed: false },
//   { text: "Item 5", completed: true },
// ]

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos))
