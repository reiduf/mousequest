import castleUrl from '../../img/castle.webp';
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import * as questService from "../../utilities/quest-api"
import { AcceptedQuest } from "../../utilities/quest-api";
import SlideDeck from "../../components/StartPage/SlideDeck/SlideDeck"
import Loader from '../../components/Loader/Loader';

export default function StartQuest() {
    //questId grabbed from url
  const {questId} = useParams();
  const [quest, setQuest] = useState<AcceptedQuest | null>(null);
  const navigate = useNavigate(); 
    
  useEffect(() => {
    async function getQuest() {
      const quest = await questService.getAcceptedQuestById(questId!);
      setQuest(quest);
    }
    getQuest();
  }, [questId])

  function updateTask(idx: number) {
    if (!quest) return;
    const newQuest = {
      ...quest
    }
    newQuest.taskProgress[idx] = !(newQuest.taskProgress[idx]);
    setQuest(newQuest)
    questService.updateTask(quest, questId!);
  }

  async function handleUnaccept() {
    await questService.unacceptQuest(questId!);
    setQuest(null);
    navigate('/quests/accepted-quests');
  }
  
  if (!quest) {
    return (
      <main className="h-screen mq-bg">
        <h1 className="text-center text-5xl uppercase font-black tracking-wider mt-8 mb-2">Start Quest</h1>
        <Loader />
      </main>
    )
  }
  
  return (
    <>
      <main className="bg-mq-boring overflow-scroll md:h-screen h-[140vh]">
        <div className="relative flex justify-center items-center w-full mx-auto bg-center h-80 bg-no-repeat bg-cover" style={{backgroundImage: `url('${castleUrl}')`}}>
          <div className="h-1/2 2xl:w-1/2 flex items-center backdrop-blur-sm justify-center bg-white/60 w-5/6 rounded-md p-[0.65rem] text-center">
            <p className="text-2xl xl:text-4xl capitalize font-medium">{quest.quest.title}</p> 
          </div>
         
        </div>
        {/* gradient line wrapper */}
        <div className="h-[0.35rem] bg-gradient-to-r from-mq-purple to-mq-blue flex flex-col justify-end"></div>

        {/* Gray details section */}
        <div className="bg-mq-boring h-[35rem] flex flex-col items-center px-5">
          <SlideDeck updateTask={updateTask} questData={quest} handleUnaccept={handleUnaccept}/>
        </div>
      </main>
    </>
  )
}