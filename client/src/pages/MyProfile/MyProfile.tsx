import castleUrl from '../../img/castle.webp';
import picoUrl from '../../img/pico.jpg';
import * as userService from '../../utilities/users-service'
import * as questService from "../../utilities/quest-api"
import { useState, useEffect } from 'react';
import { AcceptedQuest } from '../../utilities/quest-api';

interface Props {
  user: userService.User,
}

type Rank = "novice" | "explorer" | "detective" | "sleuth" | ""

const userValuesStyles = "p-1 flex flex-col items-center justify-end md:text-4xl text-2xl text-mq-purple font-extrabold"
const labelsStyles = "p-1 flex flex-col items-center justify-start font-semibold uppercase md:text-lg xl:text-xl text-lg"

export default function MyProfile({user}: Props) {
  const [completedQuests, setCompletedQuests] = useState<AcceptedQuest[]>([])
  const [userRank, setUserRank] = useState<Rank>("")

  useEffect(() => {
    async function getAcceptedQuests() {
      const acceptedQuests = await questService.getAcceptedQuests();
      const completedQuests = acceptedQuests.completedList;
      setCompletedQuests(completedQuests); 
      if (completedQuests.length <= 3) {
        setUserRank("novice")
      } else if (completedQuests.length < 7) {
        setUserRank("explorer");
      } else if (completedQuests.length < 11) {
        setUserRank("detective");
      } else {
        setUserRank("sleuth");
      }
    }
    getAcceptedQuests();
  }, [])
  
return (
  <main className="bg-mq-boring overflow-scroll md:h-screen h-[140vh] ">
    <div className="relative flex justify-center items-center w-full mx-auto bg-center h-80 bg-no-repeat bg-cover" style={{backgroundImage: `url('${castleUrl}')`}}>
      <div className="lg:w-48 lg:h-48 h-32 w-32 bg-no-repeat bg-cover border-[3px] border-white rounded-full absolute bottom-[-5rem] lg:bottom-[-6rem]" style={{backgroundImage: `url('${picoUrl}')`}} ></div>          
    </div>
    <div className="h-[0.65rem] bg-gradient-to-r from-mq-purple to-mq-blue flex flex-col mb-28 justify-end">
      <div className="h-[0.45rem] bg-mq-boring"></div>
    </div>
    
    <section className="px-1">
      <h1 className="text-center font-semibold text-3xl">{user.name}</h1>
 
      <div className="mt-10 grid grid-cols-3 text-center xl:w-1/2 lg:mx-auto">
        <span className={userValuesStyles}>{completedQuests.length}</span>
        <span className={` ${userValuesStyles} capitalize`}>{userRank}</span>
        <span className={userValuesStyles}>4</span>
        
        <span className={labelsStyles}>Completed</span>
        <span className={labelsStyles}>Rank</span>
        <span className={labelsStyles}>Created</span>
      </div>

    </section>
  </main>
)
}