import { useContext } from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext'

export const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext)
  return (
    <h3 className="TodoCounter">
      You have completed {completedTodos} of {totalTodos} tasks.
    </h3>
  )
}