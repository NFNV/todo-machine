export const TodoItem = ({ text, completed }) => {
  return (
    <li>
      <span>✓</span>
      <p>{text}</p>
      <span>x</span>
    </li>
  )
}
