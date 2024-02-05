import { useState, useRef } from "react";
import { Task } from "../../../utilities/quest-api"
import NewQuestTaskList from "../NewQuestTaskList/NewQuestTaskList";
import AddTaskForm from "../AddTaskForm/AddTaskForm"
import TagCheckbox from "../TagCheckbox/TagCheckbox"
import * as questService from "../../../utilities/quest-api"
import { useNavigate } from 'react-router-dom';


export default function NewQuestForm() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("")
  const [submitting, setSubmitting] = useState(false)
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
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  function handleChange(name: string, checked: boolean) {
    const newTags = {
      ...tags,
      [name]: checked
    }
    setTags(newTags);
  }

  function deleteTask(deleteIdx: number) {
    // task isnt needed, use _ as placeholder
    const newTasks = tasks.filter((_, idx) => idx !== deleteIdx )
    setTasks(newTasks);
  }

  function addTask(task: Task) {
    setTasks([...tasks, {
      description: task.description,
      hint: task.hint,
    }, ]);
  }

  async function handleCreate() {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', questDesc);
    formData.append('tags', JSON.stringify(tags));
    formData.append('tasks', JSON.stringify(tasks))
    if (fileInputRef.current?.files) {
      formData.append('photo', fileInputRef.current.files[0]);
    }

    setSubmitting(true)
    try {
      const newQuestId = await questService.createQuest(formData);
      navigate(`/quests/${newQuestId}`)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="flex flex-col justify-center items-center">
      <label className="font-black uppercase tracking-wider mb-2 mt-4" htmlFor="">1. <span className="text-mq-purple">Optional</span> - Add Quest Thumbnail </label>
      <label><input className="px-10 file:inline-flex file:mb-3 file:mx-3 file:text-xs file:bg-mq-purple file:text-white font-normal text-xs pr-0 file:tracking-wider file:p-2 file:rounded-md file:cursor-pointer file:border-0 file:uppercase file:items-center file:justify-center"accept="image/*" type="file" ref={fileInputRef} /></label>

     
      <label className="font-black uppercase tracking-wider mb-2 mt-4" htmlFor="">2. Add Quest Title <span className="text-red-400 font-normal">*</span></label>
      <input 
        maxLength={35}
        required
        placeholder="Quest title..." 
        className="font-bold p-3 mb-3 text-center rounded-md w-full 2xl:w-1/3 md:w-1/2" 
        name="title" 
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <p className={`${title.length === 35 && "text-red-400"} text-[0.65rem] mt-[-0.8rem] w-full 2xl:w-1/3 md:w-1/2 px-1 text-right`}>{35 - title.length} / 35 chars left</p>

      <label className="font-black uppercase tracking-wider my-3 mb-2" htmlFor="">3. Add a Description for your quest <span className="text-red-400 font-normal">*</span></label>
      <textarea 
        required
        placeholder="Quest description..." 
        className="p-3 mb-3 h-28 rounded-md w-full 2xl:w-1/3 md:w-1/2" 
        name="title"
        value={questDesc}
        onChange={(evt) => setQuestDesc(evt.target.value)}
      >
      </textarea>

      <label className="font-black uppercase tracking-wider my-3 mb-1" htmlFor="">4. Add Tags</label>
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
          className={`${submitting ? "bg-gray-400" : "bg-mq-purple"} px-7 py-2 text-white rounded-sm text-sm uppercase tracking-widest w-1/2 mb-8 mx-auto font-bold`} 
          onClick={handleCreate}
          disabled={submitting}
          >
            {submitting ? "Submitting Quest..." : "Create Quest" }
          </button>
        }
        
        <NewQuestTaskList deleteTask={deleteTask} tasks={tasks}/>
      </div>
    </main>
  )
}