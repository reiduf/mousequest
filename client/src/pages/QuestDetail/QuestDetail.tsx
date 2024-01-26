import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import * as questService from "../../utilities/quest-service"
import { Quest } from "../../utilities/quest-service";

export default function QuestDetail() {
  //questId grabbed from url
  const {questId} = useParams();
  const [quest, setQuest] = useState<Quest | null>(null)
  
  useEffect(() => {
    async function getQuest() {
      //use params of quest id here for getquestbyid
      const quest = await questService.getQuestById(questId!);
      setQuest(quest);
    }
    getQuest();
  }, [questId])


  return (
    <>
      <h1>Quest Details</h1>
      { quest ? 
        <p>{quest.description}</p> 
        :
        <p>Loading...</p>
      }
    </>
  )
}