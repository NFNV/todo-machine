import { TodoProvider } from "../components/TodoContext"
import { AppUI } from "./AppUI"


// The main component of the application
function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;