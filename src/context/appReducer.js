export default function appReducer (state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [...state.tasks, action.payload] }
    case 'DELETE_TASK':
      return { tasks: state.tasks.filter(({ id }) => id !== action.payload) }
    case 'UPDATE_TASK':
      const updateTask = action.payload
      const updateTasks = state.tasks.map(task => {
        if (task.id === updateTask.id) {
          task.title = updateTask.title
          task.description = updateTask.description
        }
        return task
      })
      return { tasks: updateTasks }
    case 'TOGGLE_TASK_DONE':
      const updatedTasks = state.tasks.map((task) => task.id === action.payload ? { ...task, done: !task.done } : task);
      return {  tasks: updatedTasks }
    default:
      return state
  }
}