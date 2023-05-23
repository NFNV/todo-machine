import React, { useState } from "react"
import "./TodoSearch.css"

export const TodoSearch = () => {
  const [searchValue, setSearchValue] = useState("")

  return (
    <input
      className="todo-search"
      placeholder="Filter here"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}
