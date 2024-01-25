import { FormEvent, useState } from "react";

interface Props {
  addTask: (task: string) => void,
}

export default function AddTaskForm({addTask}: Props) {
  const [description, setDescription] = useState("");

  function handleAddTask(evt: FormEvent) {
    evt.preventDefault();
    addTask(description);
    setDescription("");
  }

  return(
    <form onSubmit={handleAddTask} className="flex flex-col w-full 2xl:w-1/3 md:w-1/2 justify-center text-center my-5">
      <label className="font-black uppercase tracking-wider mb-2" htmlFor="">Task Description</label>
      <textarea placeholder="Task details..." className="p-3 mb-3 h-36 rounded-md" name="description" value={description} onChange={(evt) => setDescription(evt.target.value)}></textarea>
      <button className="btn w-1/2 mx-auto font-bold" type="submit">Add Task</button>
    </form>
  )
}