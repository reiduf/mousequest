import TaskItem from "../TaskItem/TaskItem"

export default function NewQuestTaskList({tasks}) {
  const taskListItems = tasks.map((task, idx) => 
    <TaskItem key={idx} seq={idx + 1} task={task} />
  )
  return (
    <div className="my-4 w-full 2xl:w-1/3 md:w-1/2 text-center">
      <h2 className="font-black uppercase tracking-wider mb-2">Quest Tasks</h2>
      <hr />
      <ul>
        {tasks.length !== 0 ? taskListItems : <p className="text-center my-2 text-white">No tasks yet</p>}
      </ul>
    </div>
  )
}