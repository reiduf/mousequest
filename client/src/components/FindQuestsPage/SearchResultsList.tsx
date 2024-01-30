import { Quest } from "../../utilities/quest-api"
import SearchResultQuest from "./SearchResultQuest"

export interface Props {
  popQuests: Quest[],
}

export default function SearchResultsList({popQuests}: Props) {
  const popQuestList = popQuests.map((popQuest, idx) => 
    <SearchResultQuest key={idx} popQuestData={popQuest} />
  )
  return (
    <ul className="my-5 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {popQuestList}
    </ul>
  )
}