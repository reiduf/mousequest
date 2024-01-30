import { FormEvent, useState } from "react";

interface Props {
  addTask: (task: {description: string, hint: string}) => void,
}

export default function AddTaskForm({addTask}: Props) {
  const [taskDetails, setTaskDetails] = useState({
    description: "",
    hint: "",
  });

  function handleChange(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    const newTaskDetails = {
      ...taskDetails,
      [evt.target.name]: evt.target.value,
    }
    setTaskDetails(newTaskDetails);
  }

  function handleAddTask(evt: FormEvent) {
    evt.preventDefault();
    addTask(taskDetails);
    setTaskDetails({
      description: "",
      hint: "",
    });
  }

  return(
       <form onSubmit={handleAddTask} className="flex flex-col justify-center text-center mt-2">
        <label className="font-black uppercase tracking-wider mb-2">4. Add tasks - at least 3!</label>
        <textarea placeholder="Task details..." className="p-3 mb-4 h-36 rounded-md" name="description" value={taskDetails.description} onChange={handleChange}></textarea>
        <label className="font-black uppercase tracking-wider mb-2">5. <span className="text-mq-purple">Optional</span> - add a hint for your task</label>
        <textarea placeholder="Hint details..." className="p-3 mb-4 h-36 rounded-md" name="hint" value={taskDetails.hint} onChange={handleChange}></textarea>
        <button className="my-5 bg-black px-7 py-2 text-white rounded-sm text-sm uppercase tracking-widest w-1/2 mx-auto font-bold" type="submit">Add Task</button>
      </form>
  )
}