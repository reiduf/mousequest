interface Props {
  task: string,
  seq: number,
  deleteTask: (idx: number) => void,
}

export default function TaskItem({task, seq, deleteTask}: Props) {
  return (
      <li className="bg-white flex justify-start items-start gap-8 text-left p-4 my-2 leading-7 pt-10 rounded-md relative">
        <div className="absolute top-0 left-0 rounded-tl-md flex">
          <div className="uppercase rounded-tl-md font-semibold text-sm tracking-widest bg-black text-white flex items-center justify-center p-1 px-3 ">
            Task {seq}
          </div>
          <div className="uppercase font-semibold text-sm tracking-widest bg-blue-900 text-white flex items-center justify-center p-1 px-3 cursor-pointer">
            Edit
          </div>
          <div onClick={() => deleteTask(seq - 1)} className="uppercase rounded-br-md font-semibold text-sm tracking-widest bg-red-600 text-white flex items-center justify-center p-1 px-3 cursor-pointer">
            Delete
          </div>
        </div>
        <div className="text-pretty">{task}</div>
      </li>

  )
}