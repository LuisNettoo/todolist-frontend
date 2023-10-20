import { Container } from "./styles"
import TrashIcon from "../../assets/trash-icon"


function TaskBox() {
  return (
    <Container>
      <div>
        <input type="checkbox" />
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos similique minus eaque blanditiis, consequuntur id nisi amet accusantium minima a obcaecati voluptates possimus officia perspiciatis ratione placeat? Inventore, minus quod.</h2>
        <button><TrashIcon /></button>
      </div>
    </Container>
  )
}

export default TaskBox