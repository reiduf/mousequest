import { AcceptedQuest } from "../../../utilities/quest-api";

interface Props {
  quest: AcceptedQuest,
  setActiveSlide: (taskIdx: number) => void,
}

const headerStyle = "text-center text-xl uppercase font-black tracking-wider mt-8 mb-2"


export default function StarterSlide({quest, setActiveSlide}: Props) {
  const overviewList = quest.taskProgress.map((task, idx) => 
    <div onClick={() => setActiveSlide(idx)} className="grid grid-cols-2 my-1 border-b-2 cursor-pointer">
      <p className="font-bold text-black">Task {idx + 1}:</p>
      <p key={idx} className={task ? "text-mq-purple" : ""}>{task ? "Completed" : "Not Completed"}</p>  
    </div>
  )

  return (
    <>
      <h1 className={headerStyle}>Description</h1>
      <p className="xl:max-w-4xl text-justify text-md leading-7">{quest.quest.description}</p>
      
      <h1 className={headerStyle}>Quest Progress Overview</h1>
      {overviewList}
      <button 
        className="bg-gradient-to-b breathe from-mq-purple to-mq-blue mt-7 px-7 mb-[40rem] md:max-w-[15rem] py-2 text-white rounded-md text-sm uppercase tracking-widest w-1/2 mx-auto font-bold"
        onClick={() => setActiveSlide(0)} 
      >
        Start Quest
      </button>
    </>
  )
}