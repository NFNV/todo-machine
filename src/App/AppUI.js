import { TodoList } from "../components/TodoList"
import { TodoCounter } from "../components/TodoCounter"
import { TodoSearch } from "../components/TodoSearch"
import { TodoItem } from "../components/TodoItem"
import { CreateTodoButton } from "../components/CreateTodoButton/index.js"
import { Title } from "../components/Title"
import { TodosLoading } from "../components/TodosLoading"
import { TodosError } from "../components/TodosError"
import { EmptyTodos } from "../components/EmptyTodos"
import { TodoContext } from "../components/TodoContext"

function AppUI() {
  return (
    <>
      <Title />
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({ loading, error, searchedTodos, completeTodo, deleteTodo }) => (
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <EmptyTodos />}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  )
}

export { AppUI }
