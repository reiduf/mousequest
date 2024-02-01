import { AcceptedQuest } from "../../../utilities/quest-api";
import CompletedQuest from "../CompletedQuest/CompletedQuest"

interface Props {
  completedQuests: AcceptedQuest[]
}

export default function CompletedQuestList({completedQuests}: Props) {
  const completedQuestList = completedQuests.map((quest, idx) => 
    <CompletedQuest questData={quest} key={idx} />  
  )

  return(
    <ul className="my-5 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {completedQuestList}
    </ul>
  )
}