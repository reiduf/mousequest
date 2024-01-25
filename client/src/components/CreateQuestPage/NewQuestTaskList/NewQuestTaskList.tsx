import TaskItem from "../TaskItem/TaskItem"

export default function NewQuestTaskList({tasks}) {
  const taskListItems = tasks.map((task, idx) => 
    <TaskItem key={idx} task={task} />
  )
  return (
    <div className="my-4">
      <h2 className="text-lg font-semibold uppercase">Quest Tasks</h2>
      <hr />
      <ul>
        {tasks.length < 1 ? taskListItems : <p className="text-center my-2 text-white">No tasks yet</p>}
      </ul>
    </div>
  )
}