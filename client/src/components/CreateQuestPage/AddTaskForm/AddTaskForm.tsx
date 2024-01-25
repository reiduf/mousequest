import { useState } from "react";

export default function AddTaskForm({addTask}) {
  const [description, setDescription] = useState("");

  function handleAddTask(evt) {
    evt.preventDefault();
    addTask(description);
    setDescription("");
  }

  return(
    <form onSubmit={handleAddTask} className="flex flex-col w-full 2xl:w-1/3 md:w-1/2 justify-center text-center my-5">
      <label className="font-black uppercase tracking-wider mb-2" htmlFor="">Task Description</label>
      <textarea className="p-2 mb-3" name="description" value={description} onChange={(evt) => setDescription(evt.target.value)}></textarea>
      <button className="btn w-1/2 mx-auto" type="submit">Add Task</button>
    </form>
  )
}