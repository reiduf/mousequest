import {Task} from "../../../utilities/quest-api"

interface Props {
  task: Task,
  seq: number,
  deleteTask: (idx: number) => void,
}

export default function TaskItem({task, seq, deleteTask}: Props) {
  return (
      <li className="bg-white flex justify-start items-start gap-8 text-left p-4 my-2 leading-7 pt-10 rounded-md relative">
        <div className="absolute top-0 left-0 rounded-tl-md flex">
          <div className="uppercase rounded-tl-md font-semibold text-sm tracking-widest bg-mq-purple text-white flex items-center justify-center p-1 px-3 ">
            Task {seq}
          </div>
          <div onClick={() => deleteTask(seq - 1)} className="uppercase rounded-br-md font-semibold text-sm tracking-widest bg-red-600 text-white flex items-center justify-center p-1 px-3 cursor-pointer">
            Delete
          </div>
        </div>
        <div className="text-pretty">
          <p>{task.description}</p>
          {task.hint && <p><span className="font-bold text-mq-purple">HINT: </span>{task.hint}</p>}
        </div>
      </li>

  )
}