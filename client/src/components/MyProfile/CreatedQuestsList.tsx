import { Quest } from "../../utilities/quest-api"
import CreatedQuest from "./CreatedQuest"

interface Props {
  createdQuests: Quest[]
}

export default function CreatedQuestsList({createdQuests}: Props) {
  const createdQuestList = createdQuests.map((quest, idx) =>
    <CreatedQuest key={idx} questData={quest} />
  )
  return (
    <ul className="my-5 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {createdQuestList}
    </ul>
  )
}