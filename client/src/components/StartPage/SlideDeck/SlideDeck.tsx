import { AcceptedQuest } from "../../../utilities/quest-api";
import StarterSlide from "../StarterSlide/StarterSlide"

interface Props {
  questData: AcceptedQuest,
}

export default function SlideDeck({questData}: Props) {
  return (
    <StarterSlide quest={questData} />
  )
}