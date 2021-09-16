import { createContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import appReducer from './appReducer'

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'title one',
      description: 'some description',
      done: false
    },
    {
      id: '2',
      title: 'title two',
      description: 'some description two',
      done: false
    }
  ],
}

export const GlobalContext = createContext(initialState)

export const ContextProvider = ({children}) => {


  const [state, dispatch] = useReducer(appReducer, initialState)

  const addTask = (task) => dispatch({ type: 'ADD_TASK', payload: { ...task, id: uuidv4() } })
  
  const deleteTask = (taskId) => dispatch({ type: 'DELETE_TASK', payload: taskId })

  const editTask = (task) => dispatch({ type: 'UPDATE_TASK', payload: task })

  const toggleTaskDone = (id) => dispatch({ type: 'TOGGLE_TASK_DONE', payload: id })

  return <GlobalContext.Provider value={{ ...state, addTask, deleteTask, editTask, toggleTaskDone }}>
    {children}
  </GlobalContext.Provider>
}