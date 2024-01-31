import { AcceptedQuest } from "../../../utilities/quest-api";

interface Props {
  quest: AcceptedQuest,
}

const headerStyle = "text-center text-xl uppercase font-black tracking-wider mt-8 mb-2"


export default function StarterSlide({quest}: Props) {
  const overviewList = quest.taskProgress.map((task, idx) => 
    <div className="grid grid-cols-2 my-1">
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
    </>
  )
}