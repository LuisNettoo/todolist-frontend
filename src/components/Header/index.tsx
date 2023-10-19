import { Container } from "./styles"
import logoTodo from "../../assets/logo-todo.svg"

function Header() {
  return (
    <Container>
      <img src={logoTodo} alt="Logo do site" />
    </Container>
  )
}

export default Header