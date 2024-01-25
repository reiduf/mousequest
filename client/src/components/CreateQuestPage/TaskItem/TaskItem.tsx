export default function TaskItem({task, key}) {
  return (
      <li>
        <h3>Task # {key + 1}</h3>
        <p>{task}</p>
      </li>

  )
}