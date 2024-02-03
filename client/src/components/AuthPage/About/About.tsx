import mickeyUrl from '../../../img/mickey.webp'

export default function About() {
  return (
    <main className="h-[95vh]">
      <div className=" bg-cover bg-[60%_0%] h-[60%] lg:bg-center lg:p-10 p-5 flex items-end shadow-xl" style={{backgroundImage: `url('${mickeyUrl}')`}}>
          <div className="2xl:w-1/3 xl:w-1/2 w-full h-fit bg-white/85 rounded-2xl backdrop-blur-sm text-center xl:p-8 p-5">
            <p className="lg:text-2xl uppercase text-sm font-semibold xl:text-left mb-1 italic">✨ Disneyland Scavenger hunts ✨</p>
            <p className="lg:text-7xl text-4xl font-black xl:text-left uppercase">powered by <span className="text-mq-purple">YOU!</span></p>
            {/* <blockquote className="text-left text-sm">Join the Mouse Quest Community for an immersive experience of community-crafted scavenger hunts throughout Disneyland and California Adventure. <br />Vote for your favorites, discover quests tailored to your interests or your family’s, or contribute by creating your own quests for the community to savor!</blockquote> */}
          </div>
      </div>
      <div className="h-[0.65rem] bg-gradient-to-r from-mq-purple to-mq-blue flex flex-col justify-end">
          <div className="h-1 bg-mq-boring"></div>
      </div>
    </main>
  )
}