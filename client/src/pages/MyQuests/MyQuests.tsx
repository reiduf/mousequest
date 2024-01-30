import ActiveQuestList from "../../components/MyQuests/ActiveQuestList/ActiveQuestList"
import CompletedQuestList from "../../components/MyQuests/CompletedQuestsList/CompletedQuestList"
import { Quest } from "../../utilities/quest-api";
import * as questService from "../../utilities/quest-api"
import { useState, useEffect } from "react";

export default function MyQuests() {
  const [activeQuests, setActiveQuests] = useState<Quest[]>([])
  const [completedQuests, setCompletedQuests] = useState<Quest[]>([])

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
        <h1 className="mq-title">Accepted Quests</h1>
      </div>
      <ActiveQuestList />
      <CompletedQuestList />
    </main>
  )
}