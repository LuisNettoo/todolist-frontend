import { useState, FormEvent } from "react"

import { Container } from "./styles"
import plusIcon from "../../assets/plus-icon.svg"

import { useTasks } from "../../hooks/useTasks"

function NewTaskBar() {
  const { createTask } = useTasks()

  const [title, setTitle] = useState("")

  const handleCreateNewTask = async (event: FormEvent) => {
    event.preventDefault()
    await createTask({title: title})

    setTitle("")
  }

  return (
    <Container onSubmit={handleCreateNewTask}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button 
        type="submit" 
      >
        Criar <img src={plusIcon} alt="Simbolo de Mais" />
      </button>
    </Container>
  )
}

export default NewTaskBar