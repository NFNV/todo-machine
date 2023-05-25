import "./TodoItem.css"

export const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  const itemClassName = completed ? "todo-item completed" : "todo-item"

  return (
    <li className={itemClassName}>
      <span onClick={onComplete}>✓</span>
      <p className="task-text">{text}</p>
      <span onClick={onDelete}>x</span>
    </li>
  )
}
