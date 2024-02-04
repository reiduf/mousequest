import { Quest } from "../../utilities/quest-api"
import LikedQuest from "./LikedQuest"

interface Props {
  likedQuests: Quest[]
}

export default function LikedQuestsList({likedQuests}: Props) {
  const likedQuestList = likedQuests.map((quest, idx) =>
    <LikedQuest key={idx} questData={quest} />
  )
  return (
    <ul className="my-5 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-20">
      {likedQuestList}
    </ul>
  )
}