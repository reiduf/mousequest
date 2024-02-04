import castleUrl from '../../img/castle.webp';
import picoUrl from '../../img/pico.jpg';
import * as userService from '../../utilities/users-service'
import * as questService from "../../utilities/quest-api"
import { Quest } from '../../utilities/quest-api';
import { useState, useEffect } from 'react';
import { AcceptedQuest } from '../../utilities/quest-api';
import CreatedQuestsList from '../../components/MyProfile/CreatedQuestsList';
import LikedQuestsList from '../../components/MyProfile/LikedQuestsList';
import Loader from '../../components/Loader/Loader';

interface Props {
  user: userService.User,
}

type Rank = "novice" | "explorer" | "detective" | "sleuth" | ""

const userValuesStyles = "p-1 flex flex-col items-center justify-end md:text-4xl text-2xl text-mq-purple font-extrabold"
const labelsStyles = "p-1 flex flex-col items-center justify-start font-semibold uppercase md:text-lg xl:text-xl text-lg"

export default function MyProfile({user}: Props) {
  const [completedQuests, setCompletedQuests] = useState<AcceptedQuest[] | null>(null);
  const [createdQuests, setCreatedQuests] = useState<Quest[] | null>(null);
  const [likedQuests, setLikedQuests] = useState<Quest[] | null>(null);
  const [userRank, setUserRank] = useState<Rank>("");
  const [showCreated, setShowCreated] = useState(false);
  const [showLiked, setShowLiked] = useState(false);

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

    async function getCreatedQuests() {
      const createdQuests = await questService.getCreatedQuests();
      setCreatedQuests(createdQuests);
    }
    getCreatedQuests();

    async function getLikedQuests() {
      const likedQuests = await questService.getLikedQuests();
      setLikedQuests(likedQuests);
    }
    getLikedQuests();
  }, [])
  
return (
  <main className="bg-mq-boring overflow-scroll md:h-screen h-[140vh]">
    <div className="relative flex justify-center items-center w-full mx-auto bg-center h-80 bg-no-repeat bg-cover" style={{backgroundImage: `url('${castleUrl}')`}}>
      <div className="lg:w-48 lg:h-48 h-32 w-32 bg-no-repeat bg-cover border-[3px] border-white rounded-full absolute bottom-[-5rem] lg:bottom-[-6rem]" style={{backgroundImage: `url('${picoUrl}')`}} ></div>          
    </div>
    <div className="h-[0.35rem] bg-gradient-to-r from-mq-purple to-mq-blue flex flex-col mb-28 justify-end"></div>
    
    <section className="px-5">
      <h1 className="text-center font-semibold text-3xl">{user.name}</h1>
 
    { completedQuests && createdQuests ?
      <div className="mt-10 grid grid-cols-3 text-center xl:w-1/2 lg:mx-auto">
        <span className={userValuesStyles}>{completedQuests.length}</span>
        <span className={` ${userValuesStyles} capitalize`}>{userRank}</span>
        <span className={userValuesStyles}>{createdQuests.length}</span>   
      
        <span className={labelsStyles}>Completed</span>
        <span className={labelsStyles}>Rank</span>
        <span className={labelsStyles}>Created</span>
      </div>
      :
      <Loader />
      }
      <hr className="my-10 px-5" />

      <div onClick={() => setShowCreated(!showCreated)} className="py-2 flex items-center justify-center gap-3 cursor-pointer">
        <svg className="w-5 h-5 stroke-black stroke-2" style={showCreated ? {transform: "rotate(90deg)", transition: "transform 0.35s"} : {transition: "transform 0.35s"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
          <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
        </svg>
        <h2 className="text-center font-black text-2xl uppercase">Created Quests ({createdQuests ? createdQuests.length : 0})</h2>
      </div>
      {showCreated && createdQuests && <CreatedQuestsList createdQuests={createdQuests} />}
      {!createdQuests && <Loader />}

      <div onClick={() => setShowLiked(!showLiked)} className="py-2 flex items-center justify-center gap-3 cursor-pointer">
        <svg className="w-5 h-5 stroke-black stroke-2" style={showLiked ? {transform: "rotate(90deg)", transition: "transform 0.35s"} : {transition: "transform 0.35s"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
          <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
        </svg>
        <h2 className="text-center font-black text-2xl uppercase">Liked Quests ({likedQuests ? likedQuests.length: 0})</h2>
      </div>

      {showLiked && likedQuests && <LikedQuestsList likedQuests={likedQuests} />}
      {!likedQuests && <Loader />}

    </section>
  </main>
)
}