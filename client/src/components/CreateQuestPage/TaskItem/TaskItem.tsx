

export default function TaskItem({task, seq}) {
  return (
      <li className="bg-white p-3">
        <h3>Task #{seq}</h3>
        <p>{task}</p>
      </li>

  )
}