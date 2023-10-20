import Header from "./components/Header"
import NewTaskBar from "./components/NewTaskBar"
import TasksList from "./components/TasksList"

import { GlobalStyles } from "./styles/global"

import { TasksProvider } from "./hooks/useTasks"

function App() {
  return (
    <TasksProvider>
      <Header />
      <NewTaskBar />
      <TasksList />
      <GlobalStyles />
    </TasksProvider>
  )
}

export default App
