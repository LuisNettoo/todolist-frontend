import { Container } from "./styles"
import plusIcon from "../../assets/plus-icon.svg"

function NewTaskBar() {
  return (
    <Container>
      <input type="text" placeholder="Adicione uma nova tarefa"/>
      <button type="submit">Criar <img src={plusIcon} alt="Simbolo de Mais" /></button>
    </Container>
  )
}

export default NewTaskBar