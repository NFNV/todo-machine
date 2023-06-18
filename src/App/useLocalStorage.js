import { useState } from "react"
import { useEffect } from "react"

export const useLocalStorage = (itemName, [initialValue]) => {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(true)

  useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName)
    let parsedItem
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      parsedItem = initialValue
    } else {
      parsedItem = JSON.parse(localStorageItem)
    }
  })

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return { item, saveItem, loading, error }
}
