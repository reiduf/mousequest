import TaskItem from "../TaskItem/TaskItem"

interface Props {
  tasks: string[],
}

export default function NewQuestTaskList({tasks}: Props ) {
  const taskListItems = tasks.map((task: string, idx: number) => 
    <TaskItem key={idx} seq={idx + 1} task={task} />
  )
  return (
    <div className="my-4 w-full 2xl:w-1/3 md:w-1/2 text-center">
      <h2 className="font-black uppercase tracking-wider mb-2">✅ Quest Tasks ✅</h2>
      <hr className="my-2 border-dashed border-2"/>
      <ul className="flex flex-col-reverse">
        {tasks.length !== 0 ? taskListItems : <p className="text-center my-6 text-white font-thin">No tasks yet.</p>}
      </ul>
      {tasks.length !== 0 && <hr className="my-2 border-dashed border-2 mb-20"/>}
      
    </div>
  )
}