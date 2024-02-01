import castleUrl from '../../img/castle.webp';
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import * as questService from "../../utilities/quest-api"
import { AcceptedQuest } from "../../utilities/quest-api";


export default function ReviewQuest() {
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

  if (!quest) {
    return <main>Loading...</main>
  }


  function handleUnaccept() {
    questService.unacceptQuest(questId);
    setQuest(null);
    navigate('/quests/accepted-quests');
  }
  
  const headerStyle = "text-center text-xl uppercase font-black tracking-wider mt-8 mb-2"
  
  return (
    <>
      <main className="bg-mq-boring overflow-scroll md:h-screen h-[140vh]">
        <div className="relative flex justify-center items-center w-full mx-auto bg-center h-80 bg-no-repeat bg-cover" style={{backgroundImage: `url('${castleUrl}')`}}>
          <div className="h-1/2 2xl:w-1/2 flex items-center backdrop-blur-sm justify-center bg-white/60 w-5/6 rounded-md p-[0.65rem] text-center">
            <p className="text-2xl xl:text-4xl capitalize font-medium">{quest.quest.title}</p> 
          </div>
         
        </div>
        {/* gradient line wrapper */}
        <div className="h-[0.65rem] bg-gradient-to-r from-mq-purple to-mq-blue flex flex-col justify-end">
          <div className="h-[0.45rem] bg-mq-boring"></div>
        </div>

        {/* Gray details section */}
        <div className="bg-mq-boring h-[35rem] flex flex-col items-center px-5">
          <h1 className={headerStyle}>Description</h1>
          <p className="xl:max-w-4xl text-justify text-md leading-7">{quest.quest.description}</p>
          
          <h1 className={headerStyle}>Total tasks completed</h1>
          <div className="2xl:w-1/6 xl:w-1/4 lg:w-1/3 w-3/4 text-center">
            {quest.taskProgress.length} / {quest.taskProgress.length}
          </div>
          <button 
            className="bg-gradient-to-b breathe from-mq-purple to-mq-blue mt-7 px-7 md:max-w-[15rem] py-2 text-white rounded-md text-sm uppercase tracking-widest w-1/2 mx-auto font-bold"
          >
            Restart Quest
          </button>
          <button 
            className="bg-red-400 mt-3 px-7 mb-[40rem] md:max-w-[15rem] py-2 text-white rounded-md text-sm uppercase tracking-widest w-1/2 mx-auto font-bold"
            onClick={handleUnaccept} 
          >
            Unaccept Quest
          </button>
        </div>
      </main>
    </>
  )
}