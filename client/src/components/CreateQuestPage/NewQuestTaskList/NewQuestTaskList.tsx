import TaskItem from "../TaskItem/TaskItem"
import { Task } from "../../../utilities/quest-api"

interface Props {
  tasks: Task[],
  deleteTask: (idx: number) => void,
}

export default function NewQuestTaskList({tasks, deleteTask}: Props ) {
  const taskListItems = tasks.map((task: Task, idx: number) => 
    <TaskItem key={idx} seq={idx + 1} task={task} deleteTask={deleteTask} />
  )
  return (
    <div className="">
      <h2 className="font-black uppercase tracking-wider mt-5 mb-2">Quest Tasks</h2>
      <hr className="my-2 border-dashed border-2"/>
      <ul className="flex flex-col-reverse mb-20">
        {tasks.length !== 0 ? taskListItems : <p className="text-center my-6 mb-36 text-mq-purple">No tasks yet.</p>}
      </ul>

      
    </div>
  )
}