import ActiveQuestList from "../../components/MyQuests/ActiveQuestList/ActiveQuestList"
import CompletedQuestList from "../../components/MyQuests/CompletedQuestsList/CompletedQuestList"
import { AcceptedQuest } from "../../utilities/quest-api";
import * as questService from "../../utilities/quest-api"
import { useState, useEffect } from "react";

export default function MyQuests() {
  const [activeQuests, setActiveQuests] = useState<AcceptedQuest[]>([])
  const [completedQuests, setCompletedQuests] = useState<AcceptedQuest[]>([])
  const [showCompletedList, setShowCompletedList] = useState(false);
  

  useEffect(() => {
    async function getAcceptedQuests() {
      const acceptedQuests = await questService.getAcceptedQuests();
      const activeQuests = acceptedQuests.activeList;
      const completedQuests = acceptedQuests.completedList;
      setActiveQuests(activeQuests);
      setCompletedQuests(completedQuests);      
    }
    getAcceptedQuests();
  }, [])

  const titleStyle = "text-xl lg:text-2xl font-black uppercase tracking-widest"
  return (
    <main className="mq-bg">
      <div className="flex justify-center">
        <h2 className={titleStyle}>Active Quests ({activeQuests.length})</h2>
      </div>
      <ActiveQuestList activeQuests={activeQuests} />

      <div onClick={() => setShowCompletedList(!showCompletedList)} className="flex justify-center items-center mt-8 gap-2 cursor-pointer">
        <svg className="w-6 h-6 stroke-black stroke-2" style={showCompletedList ? {transform: "rotate(90deg)", transition: "transform 0.35s"} : {transition: "transform 0.35s"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
          <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
        </svg>
        <h2 className={titleStyle}>
          Completed Quests ({completedQuests.length})
        </h2>
      </div>
      {showCompletedList && <CompletedQuestList completedQuests={completedQuests} />}
    </main>
  )
}