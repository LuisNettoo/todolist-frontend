import NoTasksRegistered from "../NoTasksRegistered";
import TaskBox from "../TaskBox"

import { Container } from "./styles"

import { useTasks } from "../../hooks/useTasks";

function TasksList() {
  const { tasks } = useTasks()

  return (
    <Container>
      <header>
        <div>Tarefas criadas <span>0</span></div>
        <div>Concluídas <span>0</span></div>
      </header>
      {tasks ? (tasks.map(task => (
        <TaskBox key={task.id} title={task.title} />
      ))) : (<NoTasksRegistered />)}
      
    </Container>
  )
}

export default TasksList