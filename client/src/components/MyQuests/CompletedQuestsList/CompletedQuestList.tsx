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
    <ul>
      {completedQuestList}
    </ul>
  )
}