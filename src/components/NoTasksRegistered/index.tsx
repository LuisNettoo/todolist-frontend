import { Container } from "./styles"
import clipboard from "../../assets/clipboard.svg"

function NoTasksRegistered() {
  return (
    <Container>
      <img src={clipboard} alt="Ícon de prancheta" />
      <p><strong>Você ainda não tem tarefas cadastradas</strong><br />Crie tarefas e organize seus itens a fazer</p>
    </Container>
  )
}

export default NoTasksRegistered