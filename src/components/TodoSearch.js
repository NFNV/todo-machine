import "./TodoSearch.css"

export const TodoSearch = ({ searchValue, setSearchValue }) => {
  return (
    <input
      className="todo-search"
      placeholder="Filter here"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}
