import { AcceptedQuest } from "../../../utilities/quest-api"
import { useState } from "react"

interface Props {
  quest: AcceptedQuest,
  setActiveSlide: (taskIdx: number) => void,
  handleUnaccept: () => Promise <void>,
}

const headerStyle = "text-center text-xl uppercase font-black tracking-wider mt-8 mb-2"


export default function StarterSlide({quest, setActiveSlide, handleUnaccept}: Props) {
  const [unaccepting, setUnaccepting] = useState(false)
  const isCompleted = quest.taskProgress.every(task => task)
  const overviewList = quest.taskProgress.map((task, idx) => 
    <>
      <div onClick={() => setActiveSlide(idx)} className="grid grid-cols-2 my-1 cursor-pointer">
        <p className="font-bold text-black pl-5">Task {idx + 1}:</p>
        <p key={idx} className={`${task ? "text-mq-purple" : ""} text-left`}>{task ? "Completed" : "Not Completed"}</p>  
      </div>
      <hr />
    </>
  )

  return (
    <>
      <h1 className={headerStyle}>Description</h1>
      <p className="xl:max-w-4xl text-justify text-md leading-7">{quest.quest.description}</p>
      
      <h1 className={headerStyle}>Quest Progress Overview</h1>
      <div className="2xl:w-1/6 xl:w-1/4 lg:w-1/3 w-3/4">
        {overviewList}
      </div>
      <button 
        className="bg-gradient-to-b breathe from-mq-purple to-mq-blue mt-7 px-7 md:max-w-[15rem] py-2 text-white rounded-md text-sm uppercase tracking-widest w-1/2 mx-auto font-bold"
        onClick={() => setActiveSlide(0)} 
      >
        {isCompleted ? "Review Quest" : "Start Quest"}
      </button>
      <button 
        className={`${unaccepting ? "bg-gray-400" : "bg-red-400"} mt-3 px-7 mb-[40rem] md:max-w-[15rem] py-2 text-white rounded-md text-sm uppercase tracking-widest w-1/2 mx-auto font-bold`}
        disabled={unaccepting}
        onClick={async () => {
          setUnaccepting(true);
          try {
            await handleUnaccept()
          } finally {
            setUnaccepting(false)
          }
        }} 
      >
        {unaccepting ? "Unaccepting Quest..." : "Unaccept Quest"}
      </button>
    </>
  )
}