import { Container } from "./styles"
import TrashIcon from "../../assets/trash-icon"
import { useTasks } from "../../hooks/useTasks";

interface TaskBoxProps {
  id: string;
  title: string;
}

function TaskBox({ id, title }: TaskBoxProps) {
  const { deleteTask } = useTasks()

  const handleDeleteTask = () => {
    deleteTask(id)
  }

  return (
    <Container>
      <div>
        <input type="checkbox"  />
        <h2>{title}</h2>
        <button onClick={handleDeleteTask}><TrashIcon /></button>
      </div>
    </Container>
  )
}

export default TaskBox