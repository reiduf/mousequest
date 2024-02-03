import castleUrl from '../../img/castle.webp';
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import * as questService from "../../utilities/quest-api"
import { Quest } from "../../utilities/quest-api";
import { useNavigate } from 'react-router-dom';




export default function QuestDetail() {
  //questId grabbed from url
  const {questId} = useParams();
  const [quest, setQuest] = useState<Quest | null>(null);
  const [userLiked, setUserLiked] = useState(false);
  const [userAccepted, setUserAccepted] = useState(false);
  const navigate = useNavigate();
    
  
  useEffect(() => {
    async function getQuest() {
      //use params of quest id here for getquestbyid
      const res = await questService.getQuestById(questId!);
      const quest = res.quest;
      const isAccepted = res.isAccepted;
      setQuest(quest);
      setUserLiked(res.userLiked);
      setUserAccepted(isAccepted)
    }
    getQuest();
  }, [questId])

  if (!quest) {
    return <main>Loading...</main>
  }

  async function handleLike() {
    const res = await questService.updateLikes(questId!);
    const newQuest = res.quest
    setUserLiked(res.userLiked)
    setQuest(newQuest);
  }

  async function handleAccept() {
    await questService.acceptQuest(questId!);
    navigate('/quests/accepted-quests');
  }

  // "as keyof ..." for ts key type clarifcation
  const tagsList = Object.keys(quest.tags).filter(tag => quest.tags[tag as keyof Quest["tags"]]).map(tag => 
        <p 
          key={tag}
          className="bg-mq-purple p-1 cursor-pointer px-3 rounded-md inline-flex m-1 justify-center gap-2 uppercase text-sm text-white font-extrabold tracking-wide"
        >{tag}</p>
        )


  const infoButtonStyle = "shadow-md font-black tracking-wide uppercase flex gap-1 text-xs items-center rounded-sm py-1 px-2"
  const headerStyle = "text-center text-xl uppercase font-black tracking-wider mt-8 mb-2"

  return (
    <>
      <main className="bg-mq-boring overflow-scroll md:h-screen h-[140vh]">
        <div className="relative flex justify-center items-center w-full mx-auto bg-center h-80 bg-no-repeat bg-cover" style={{backgroundImage: `url('${castleUrl}')`}}>
          <div className="h-1/2 2xl:w-1/2 flex items-center backdrop-blur-sm justify-center bg-white/60 w-5/6 rounded-md p-2 text-center">
            <p className="text-2xl xl:text-4xl capitalize font-medium">{quest.title}</p> 
          </div>
          <div className="absolute font-bold left-3 bottom-3 flex gap-3">
            <button onClick={handleLike} className={`${infoButtonStyle} ${userLiked ? "bg-mq-blue text-white" : "bg-white text-mq-purple"} cursor-pointer`} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${userLiked ? "fill-white" : "fill-black"} w-4 h-4`}>
                  <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                </svg>
                {quest.likes} Likes
            </button>
            <button onClick={handleAccept} className={`${infoButtonStyle} bg-white text-mq-purple`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-4 h-4">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
              {quest.accepted} Accepted
            </button>
          </div>
          {quest.likes > 100 && 
            <p className="breathe-sm absolute flex gap-1 text-md tracking-wide items-center bg-mq-purple text-white uppercase font-bold py-1 px-2 rounded-md top-3 right-3 shadow-lg">
              ✨ Crowd Favorite!
            </p>
          }
        </div>

        {/* gradient line wrapper */}
        <div className="h-[0.65rem] bg-gradient-to-r from-mq-purple to-mq-blue flex flex-col justify-end">
          <div className="h-[0.45rem] bg-mq-boring"></div>
        </div>

        {/* Gray details section */}
        <div className="bg-mq-boring h-[35rem] flex flex-col items-center px-5">

          <h2 className={headerStyle}>Quest Description</h2>
          <p className="xl:max-w-4xl text-justify text-md leading-7">{quest.description}</p>
          
          <h2 className={headerStyle}>Tags</h2>
          <div>
            {tagsList}
          </div>

          <h2 className={headerStyle}>Total tasks</h2>
          <p className="flex text-lg items-center gap-1">
              {quest.tasks.length}
          </p>

          <h2 className={headerStyle}>Author</h2>
          <p className="flex text-lg items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
              </svg>
              {quest.author.name}
          </p>


          {!userAccepted ?
           <button 
            className="bg-gradient-to-b breathe from-mq-purple to-mq-blue mt-7 px-7 mb-[40rem] md:max-w-[15rem] py-2 text-white rounded-md text-sm uppercase tracking-widest w-1/2 mx-auto font-bold"
            onClick={handleAccept} 
            >
            Accept Quest
          </button>
          :
           <button 
            className="bg-gray-400 mt-7 px-7 mb-[40rem] md:max-w-[15rem] py-2 text-white rounded-md text-xs uppercase tracking-widest w-1/2 mx-auto font-bold"
            disabled
            >
            You've Already Accepted This quest
          </button>
          }
        </div>
      </main>
    </>
  )
}