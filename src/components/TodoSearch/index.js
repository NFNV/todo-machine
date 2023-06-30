import { useContext } from "react"
import "./TodoSearch.css"
import { TodoContext } from '../TodoContext'

export const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext)

  return (
    <input
      placeholder="Find TODO"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}
