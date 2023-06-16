import React from "react"
import "./CreateTodoButton.css"

export const CreateTodoButton = () => {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("click!")
        console.log(event)
        console.log(event.target)
      }}
    >
      +
    </button>
  )
}
