

export default function TaskItem({task, seq}) {
  return (
      <li className="bg-white flex justify-start items-start gap-8 text-left p-4 my-2 leading-7 pt-10 rounded-md relative">
        <div className="uppercase font-semibold text-sm tracking-widest bg-black text-white flex items-center justify-center p-1 px-3 absolute top-0 left-0 rounded-tl-md rounded-br-md">Task {seq}</div>
        <div className="text-pretty">{task}</div>
      </li>

  )
}