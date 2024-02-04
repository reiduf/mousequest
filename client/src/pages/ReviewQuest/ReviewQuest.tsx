import castleUrl from '../../img/castle.webp';
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import * as questService from "../../utilities/quest-api"
import { AcceptedQuest } from "../../utilities/quest-api";
import Loader from '../../components/Loader/Loader';


export default function ReviewQuest() {
    //questId grabbed from url
  const {questId} = useParams();
  const [quest, setQuest] = useState<AcceptedQuest | null>(null);
  const [restarting, setRestarting] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const navigate = useNavigate(); 
    
  useEffect(() => {
    async function getQuest() {
      const quest = await questService.getAcceptedQuestById(questId!);
      setQuest(quest);
    }
    getQuest();
  }, [questId])

  async function handleUnaccept() {
    setDeleting(true)
    try {
      await questService.unacceptQuest(questId!);
      setQuest(null);
      navigate('/quests/accepted-quests');
    } finally {
      setDeleting(false)
    }
  }

  async function handleRestart() {
    setRestarting(true)
    try {
      await questService.restartQuest(questId!)
      setQuest(null);
      navigate(`/quests/accepted-quests/${questId}`);
    } finally {
      setRestarting(false)
    }
  }

  if (!quest) {
    return (
      <main className="h-screen mq-bg">
        <h1 className="text-center text-5xl uppercase font-black tracking-wider mt-8 mb-2">Review Completed Quest</h1>
        <Loader />
      </main>
    )
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
        <div className="h-[0.35rem] bg-gradient-to-r from-mq-purple to-mq-blue flex flex-col justify-end"></div>

        {/* Gray details section */}
        <div className="bg-mq-boring h-[35rem] flex flex-col items-center px-5">
          <h1 className={headerStyle}>Description</h1>
          <p className="xl:max-w-4xl text-justify text-md leading-7">{quest.quest.description}</p>
          
          <h1 className={headerStyle}>Total tasks completed</h1>
          <div className="2xl:w-1/6 xl:w-1/4 lg:w-1/3 w-3/4 text-center">
            {quest.taskProgress.length} / {quest.taskProgress.length}
          </div>
          <button 
            onClick={handleRestart}
            disabled={restarting}
            className={`${restarting ? "bg-gray-400" : "bg-gradient-to-b breathe from-mq-purple to-mq-blue"} mt-7 px-7 md:max-w-[15rem] py-2 text-white rounded-md text-sm uppercase tracking-widest w-1/2 mx-auto font-bold`}
          >
            {restarting ? "Restarting Quest..." : "Restart Quest"}
          </button>
          <button 
            className={`${deleting ? "bg-gray-400" : "bg-red-400"} mt-3 px-7 mb-[40rem] md:max-w-[15rem] py-2 text-white rounded-md text-sm uppercase tracking-widest w-1/2 mx-auto font-bold`}
            disabled={deleting}
            onClick={handleUnaccept} 
          >
            {deleting ? "Deleting Quest..." : "Delete quest"}
          </button>
        </div>
      </main>
    </>
  )
}