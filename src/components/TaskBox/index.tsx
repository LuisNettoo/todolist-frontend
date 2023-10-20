import { Container } from "./styles"
import TrashIcon from "../../assets/trash-icon"

interface TaskBoxProps {
  title: string;
}

function TaskBox({ title }: TaskBoxProps) {
  return (
    <Container>
      <div>
        <input type="checkbox"  />
        <h2>{title}</h2>
        <button><TrashIcon /></button>
      </div>
    </Container>
  )
}

export default TaskBox