import { AcceptedQuest } from "../../../utilities/quest-api";

interface Props {
  completedQuests: AcceptedQuest[]
}

export default function CompletedQuestList({completedQuests}: Props) {
  return(
    <ul>Completed Quests Container</ul>
  )
}