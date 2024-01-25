import { useState } from "react";
import NewQuestTaskList from "../NewQuestTaskList/NewQuestTaskList";
import AddTaskForm from "../AddTaskForm/AddTaskForm"


export default function NewQuestForm() {
  const [tasks, setTasks] = useState([""]);

  return (
    <main className="flex flex-col justify-center items-center">
      {/* <form action="" className="mt-8 flex flex-col justify-center items-center">
        <h2>New Quest Form</h2>
        <ul className="flex flex-col justify-center items-center">
        </ul>
        <button className="my-5 bg-mq-purple px-7 py-2 text-white rounded-sm text-sm uppercase tracking-widest" type="submit">Create Quest</button>
      </form> */}

      
      <NewQuestTaskList tasks={tasks}/>
      <AddTaskForm setTasks={setTasks} />
    </main>
  )
}