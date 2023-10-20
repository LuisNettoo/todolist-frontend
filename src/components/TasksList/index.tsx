// import NoTasksRegistered from "../NoTasksRegistered"
import NoTasksRegistered from "../NoTasksRegistered";
import TaskBox from "../TaskBox"
import { Container } from "./styles"

function TasksList() {
  return (
    <Container>
      <header>
        <div>Tarefas criadas <span>0</span></div>
        <div>Concluídas <span>0</span></div>
      </header>
      {1 ? (
        <>
          <TaskBox />
          <TaskBox />
          <TaskBox />
          <TaskBox />
        </>
      ) : (<NoTasksRegistered />)}
    </Container>
  )
}

export default TasksList