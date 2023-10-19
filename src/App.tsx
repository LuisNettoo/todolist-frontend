import Header from "./components/Header"
import NewTaskBar from "./components/NewTaskBar"
import TasksList from "./components/TasksList"
import { GlobalStyles } from "./styles/global"

function App() {
  return (
    <>
      <Header />
      <NewTaskBar />
      <TasksList />
      <GlobalStyles />
    </>
  )
}

export default App
