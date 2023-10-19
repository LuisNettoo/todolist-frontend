import NoTasksRegistered from "../NoTasksRegistered"
import { Container } from "./styles"

function TasksList() {
  return (
    <Container>
      <header>
        <div>Tarefas criadas <span>0</span></div>
        <div>Concluídas <span>0</span></div>
      </header>
      <NoTasksRegistered />
    </Container>
  )
}

export default TasksList