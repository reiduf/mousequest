import MostPopQuest from "./MostPopQuest"

interface Props {
  popQuests: [{}]
}
export default function MostPopList({popQuests}: Props) {
  const popQuestList = popQuests.map((popQuest, idx) => 
    <MostPopQuest key={idx} popQuestData={popQuest} />
  )
  return (
    <ul className="my-5 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {popQuestList}
    </ul>
  )
}