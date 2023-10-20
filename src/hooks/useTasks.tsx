import { useState, useEffect, createContext, useContext, ReactNode } from "react"

import { api } from "../services/api"

interface Task {
  id: string;
  title: string;
  status: "todo" | "done";
}

type TaskInput = Omit<Task, "id" | "status">

interface TasksProviderProps {
  children: ReactNode
}

interface TasksContextData {
  tasks: Task[];
  createTask: (taskInput: TaskInput) => Promise<void>;
}

export const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData
)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    api.get("/tasks").then(response => {
      setTasks(response.data)
    })
  }, [])

  const createTask = async (taskInput: TaskInput) => {
    const response = await api.post("/tasks", {
      ...taskInput,
    })
    console.log(response)

    const { task } = response.data

    setTasks([task, ...tasks])
  }

  return (
    <TasksContext.Provider value={{tasks, createTask}}>
      {children}
    </TasksContext.Provider>
  )
}

export const useTasks = () => {
  const context = useContext(TasksContext)

  return context
}