import { useState } from "react";
import NewQuestTaskList from "../NewQuestTaskList/NewQuestTaskList";
import AddTaskForm from "../AddTaskForm/AddTaskForm"
import TagCheckbox from "../TagCheckbox/TagCheckbox"
import * as questService from "../../../utilities/quest-service"


export default function NewQuestForm() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [title, setTitle] = useState("")
  const [questDesc, setQuestDesc] = useState("")
  const [tags, setTags] = useState({
    kids: false,
    adults: false,
    families: false,
    ca: false,
    disneyland: false,
    short: false,
    long: false,
    easy: false,
    hard: false,
    mickeys: false,
    queue: false,
    riddles: false,
  })

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const newTags = {
      ...tags,
      [evt.target.name]: evt.target.checked
    }
    setTags(newTags);
  }

  function deleteTask(deleteIdx: number) {
    // task isnt needed, use _ as placeholder
    const newTasks = tasks.filter((_, idx) => idx !== deleteIdx )
    setTasks(newTasks);
  }

  function addTask(task: string) {
    setTasks([...tasks, task]);
  }

  async function handleCreate() {
    const questData = {
      title,
      description: questDesc,
      tags,
      tasks,
    }
    await questService.createQuest(questData);
  }

  return (
    <main className="flex flex-col justify-center items-center">

      <label className="font-black uppercase tracking-wider mb-2 mt-4" htmlFor="">1. Add Quest Title</label>
      <input 
        placeholder="Quest title..." 
        className="font-bold p-3 mb-3 text-center rounded-md w-full 2xl:w-1/3 md:w-1/2" 
        name="title" 
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />

      <label className="font-black uppercase tracking-wider my-3 mb-2" htmlFor="">2. Add a Description for your quest</label>
      <textarea 
        placeholder="Quest description..." 
        className="p-3 mb-3 h-28 rounded-md w-full 2xl:w-1/3 md:w-1/2" 
        name="title"
        value={questDesc}
        onChange={(evt) => setQuestDesc(evt.target.value)}
      >
      </textarea>

      <label className="font-black uppercase tracking-wider my-3 mb-1" htmlFor="">3. Add Tags</label>
      <fieldset className="w-full 2xl:w-1/3 md:w-1/2">
        <TagCheckbox onChange={handleChange} checked={tags.kids} name="kids" label="Good for kids" />
        <TagCheckbox onChange={handleChange} checked={tags.adults} name="adults" label="Good for adults" />
        <TagCheckbox onChange={handleChange} checked={tags.families} name="families"  label="Good for families" />
        <TagCheckbox onChange={handleChange} checked={tags.ca} name="ca" label="CA Adv." />
        <TagCheckbox onChange={handleChange} checked={tags.disneyland} name="disneyland" label="Disneyland" />
        <TagCheckbox onChange={handleChange} checked={tags.short} name="short" label="Short quests" />
        <TagCheckbox onChange={handleChange} checked={tags.long} name="long" label="Long quests" />
        <TagCheckbox onChange={handleChange} checked={tags.easy} name="easy" label="Easy quests" />
        <TagCheckbox onChange={handleChange} checked={tags.hard} name="hard" label="Hard quests" />
        <TagCheckbox onChange={handleChange} checked={tags.mickeys} name="mickeys" label="Hidden mickey's" />
        <TagCheckbox onChange={handleChange} checked={tags.queue} name="queue" label="Queue Line Quests" />
        <TagCheckbox onChange={handleChange} checked={tags.riddles} name="riddles" label="Riddles" />
      </fieldset>
      <div className="my-4 w-full 2xl:w-1/3 md:w-1/2 text-center">
        <AddTaskForm addTask={addTask} />
        {tasks.length >= 3 && 
          <button 
            className="bg-mq-purple px-7 py-2 text-white rounded-sm text-sm uppercase tracking-widest w-1/2 mb-8 mx-auto font-bold" 
            onClick={handleCreate}
          >
            Create Quest
          </button>
        }
        <NewQuestTaskList deleteTask={deleteTask} tasks={tasks}/>
      </div>
    </main>
  )
}