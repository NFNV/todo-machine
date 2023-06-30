import React from "react"
import "./TodoForm.css"

export const TodoForm = () => {
  return (
    <form onSubmit={e => e.preventDefault()} className="TodoForm">
      <label>Write your new TODO</label>
      <textarea placeholder="TODO here"></textarea>
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--cancel" type="">
          Cancel
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">Add</button>
      </div>
    </form>
  )
}
