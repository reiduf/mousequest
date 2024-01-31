import { AcceptedQuest, Task } from "../../../utilities/quest-api";
import StarterSlide from "../StarterSlide/StarterSlide"
import { useState } from "react";
import Slide from "../Slide/Slide"

interface Props {
  questData: AcceptedQuest,
}

type TaskIndex = number;

export default function SlideDeck({questData}: Props) {
  const [activeSlide, setActiveSlide] = useState<TaskIndex | 'starter'>('starter');

  const activeTaskIndex = questData.quest.tasks.findIndex((_, idx) => activeSlide === idx);
  const activeTask: Task | undefined = questData.quest.tasks[activeTaskIndex]; 

  return (
    <>
      {activeSlide === 'starter' && <StarterSlide quest={questData} setActiveSlide={setActiveSlide} activeSlide={activeTaskIndex} />}
      {activeTask && <Slide taskData={activeTask} idx={activeTaskIndex} setActiveSlide={setActiveSlide} activeSlide={activeTaskIndex} taskListLength={questData.quest.tasks.length}/>}
    </>
  )
}