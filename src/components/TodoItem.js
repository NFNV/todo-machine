import './TodoItem.css'

export const TodoItem = ({ text, completed }) => {
  return (
    <li className="todo-item">
      <span>✓</span>
      <p>{text}</p>
      <span>x</span>
    </li>
  )
}
