import React from "react"
import { TodoIcon } from "."

export const CompleteIcon = ({ completed, onComplete }) => {
  return (
    <TodoIcon
      type="check"
      color={completed ? "green" : "gray"}
      onClick={onComplete}
    />
  )
}
