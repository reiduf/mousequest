import mickeyUrl from '../../../img/mickey.webp'
import Faq from "../Faq/Faq"

export default function About() {
  const faq1 = "MouseQuest is an immersive experience of community-crafted scavenger hunts throughout Disneyland and California Adventure. Vote for your favorites, discover quests tailored to your interests or your family’s, or contribute by creating your own quests for the community to savor!";
  const faq2 = "You can find quests that community memebers created on the find tab. Find a quest that fits your style and click accept. You will then have your own copy of the quest that traks your progress!"
  const faq3 = "Yes! There are several categories you can choose from, including Kid Friendly, Adult Friendly, Family Friendly, Easy, Hard, and many more!"
  return (
    <main className="h-[95vh] bg-mq-boring">
      <div className=" bg-cover bg-[60%_0%] lg:h-[60%] h-1/3 lg:bg-center lg:p-10 p-4 flex items-end shadow-xl" style={{backgroundImage: `url('${mickeyUrl}')`}}>
          <div className="2xl:w-1/3 xl:w-1/2 w-full h-fit bg-white/85 rounded-2xl backdrop-blur-sm text-center xl:p-8 p-3">
            <p className="lg:text-2xl uppercase text-xs font-semibold xl:text-left mb-1 italic">✨ Disneyland Scavenger hunts ✨</p>
            <p className="lg:text-7xl text-2xl font-black xl:text-left uppercase">powered by <span className="text-mq-purple">YOU!</span></p>
          </div>
      </div>
      <div className="h-[0.35rem] bg-gradient-to-r from-mq-purple to-mq-blue flex flex-col justify-end"></div>
      <h1 className="text-center font-black uppercase tracking-wider text-3xl mt-16 lg:mb-6 mb-0">About MouseQuest / FAQ</h1>
      <div className="bg-mq-boring h-[60%] p-4 w-full text-center">
        <Faq title={"What is MouseQuest?"} desc={faq1}/>
        <Faq title={"How does it work?"} desc={faq2}/>
        <Faq title={"Is it kid friendly?"} desc={faq3}/>
      </div>
    </main>
  )
}