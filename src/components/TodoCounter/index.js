import './TodoCounter.css'

export const TodoCounter = ({ total, completed }) => {
  return (
    <h3 className="TodoCounter">
      You have completed {completed} of {total} tasks.
    </h3>
  )
}
