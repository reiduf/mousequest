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
       <form onSubmit={handleAddTask} className="flex flex-col justify-center text-center mt-2 relative">
        <label className="font-black uppercase tracking-wider mb-2">Task Details</label>
        <span className="text-xs italic absolute font-semibold bottom-[4.5rem] left-0">*Min. 3 tasks required</span>
        <textarea placeholder="Task details..." className="p-3 mb-4 h-36 rounded-md" name="description" value={description} onChange={(evt) => setDescription(evt.target.value)}></textarea>
        <button className="my-5 bg-black px-7 py-2 text-white rounded-sm text-sm uppercase tracking-widest w-1/2 mx-auto font-bold" type="submit">Add Task</button>
      </form>
  )
}