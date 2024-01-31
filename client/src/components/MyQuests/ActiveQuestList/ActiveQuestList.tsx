import ActiveQuest from "../ActiveQuest/ActiveQuest";
import { AcceptedQuest } from "../../../utilities/quest-api";

interface Props {
  activeQuests: AcceptedQuest[]
}

export default function ActiveQuestList({activeQuests}: Props) {
  const activeQuestList = activeQuests.map((quest, idx) => 
    <ActiveQuest questData={quest} key={idx} />  
  )

  return(
    <ul className="my-5 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {activeQuestList}
    </ul>
  )
}