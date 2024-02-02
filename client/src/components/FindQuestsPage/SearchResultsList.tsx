import { Quest } from "../../utilities/quest-api"
import SearchResultQuest from "./SearchResultQuest"

export interface Props {
  searchRes: Quest[],
}

export default function SearchResultsList({searchRes}: Props) {
  const searchResList = searchRes.map((resQuest, idx) => 
    <SearchResultQuest key={idx} resQuestsData={resQuest} />
  )
  return (
    <ul className="my-5 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {searchResList}
    </ul>
  )
}