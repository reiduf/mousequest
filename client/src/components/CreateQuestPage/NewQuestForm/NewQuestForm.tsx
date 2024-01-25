import { useState } from "react";
import NewQuestTaskList from "../NewQuestTaskList/NewQuestTaskList";
import AddTaskForm from "../AddTaskForm/AddTaskForm"
import TagCheckbox from "../TagCheckbox/TagCheckbox"


export default function NewQuestForm() {
  const [tasks, setTasks] = useState<string[]>([]);

  function addTask(task: string) {
    setTasks([...tasks, task]);
  }

  return (
    <main className="flex flex-col justify-center items-center">

      <label className="font-black uppercase tracking-wider mb-2 mt-8" htmlFor="">Quest Title</label>
      <input placeholder="Quest title..." className="font-bold p-3 mb-3 text-center rounded-md w-full 2xl:w-1/3 md:w-1/2" name="title" />
      
      <label className="font-black uppercase tracking-wider my-3 mb-2" htmlFor="">Quest Description</label>
      <textarea placeholder="Quest description..." className=" p-3 mb-3 h-28 rounded-md w-full 2xl:w-1/3 md:w-1/2" name="title"></textarea>

      <label className="font-black uppercase tracking-wider my-3 mb-1" htmlFor="">Tags</label>
      <fieldset className="w-full 2xl:w-1/3 md:w-1/2">
        <TagCheckbox name="kids" label="Good for kids" />
        <TagCheckbox name="adults" label="Good for adults" />
        <TagCheckbox name="families" label="Good for families" />
        <TagCheckbox name="ca" label="CA Adv." />
        <TagCheckbox name="disneyland" label="Disneyland" />
        <TagCheckbox name="short" label="Short quests" />
        <TagCheckbox name="long" label="Long quests" />
        <TagCheckbox name="easy" label="Easy quests" />
        <TagCheckbox name="hard" label="Hard quests" />
        <TagCheckbox name="mickeys" label="Hidden mickey's" />
        <TagCheckbox name="queue" label="Queue Line Quests" />
      </fieldset>
      
      <AddTaskForm addTask={addTask} />
      <NewQuestTaskList tasks={tasks}/>
    </main>
  )
}