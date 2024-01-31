import ActiveQuestList from "../../components/MyQuests/ActiveQuestList/ActiveQuestList"
import CompletedQuestList from "../../components/MyQuests/CompletedQuestsList/CompletedQuestList"
import { AcceptedQuest } from "../../utilities/quest-api";
import * as questService from "../../utilities/quest-api"
import { useState, useEffect } from "react";

export default function MyQuests() {
  const [activeQuests, setActiveQuests] = useState<AcceptedQuest[]>([])
  const [completedQuests, setCompletedQuests] = useState<AcceptedQuest[]>([])

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

  return (
    <main className="mq-bg">
      <div className="flex justify-center">
        <h2 className="mq-title">Active Quests ({activeQuests.length})</h2>
      </div>
      <ActiveQuestList activeQuests={activeQuests} />

      <div className="flex justify-center mt-8">
        <h2 className="mq-title">Completed Quests ()</h2>
      </div>
      <CompletedQuestList completedQuests={completedQuests} />
    </main>
  )
}