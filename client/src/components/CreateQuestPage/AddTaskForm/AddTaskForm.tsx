export default function AddTaskForm({setTasks}) {
  return(
    <form className="flex flex-col w-full 2xl:w-1/3 md:w-1/2 justify-center text-center my-5" action="">
      <label className="font-black uppercase tracking-wider mb-2" htmlFor="">Task Description</label>
      <textarea className="p-2 mb-3" name="" id=""></textarea>
      <button className="btn w-1/2 mx-auto" type="submit">Add Task</button>
    </form>
  )
}