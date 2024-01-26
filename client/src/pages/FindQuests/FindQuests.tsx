import { useEffect, useState } from "react";
import MostPopList from "../../components/FindQuestsPage/MostPopList";
import * as questService from "../../utilities/quest-service"
import { Quest } from "../../utilities/quest-service";

export default function FindQuests() {
  const [popQuests, setPopQuests] = useState<Quest[]>([])

  useEffect(() => {
    async function getPopQuests() {
      const popQuests = await questService.getMostPopQuests();
      setPopQuests(popQuests);
    }
    getPopQuests();
  }, [])

  return (
    <main className="mq-bg">
      <div className="flex justify-center">
        <h1 className="mq-title">Most Popular Quests</h1>
      </div>
      <MostPopList popQuests={popQuests} /> 
    </main>
  );
}