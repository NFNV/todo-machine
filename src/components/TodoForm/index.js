import React, { useContext, useState } from "react"
import { TodoContext } from "../TodoContext"
import "./TodoForm.css"

export const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext)

  const [newTodoValue, setNewTodoValue] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onCancel = (e) => {
    setOpenModal(false)
  }

  const onChange = (e) => setNewTodoValue(e.target.value)

  return (
    <form onSubmit={onSubmit} className="TodoForm">
      <label>Write your new TODO</label>
      <textarea placeholder="TODO here" value={newTodoValue} onChange={onChange}></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Add
        </button>
      </div>
    </form>
  )
}
