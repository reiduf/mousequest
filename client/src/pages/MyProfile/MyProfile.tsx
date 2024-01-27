import castleUrl from '../../img/castle.webp';
import picoUrl from '../../img/pico.jpg';
import * as userService from '../../utilities/users-service'

const headerStyle = "text-center text-3xl uppercase font-black tracking-wider mt-8 mb-2"

interface Props {
  user: userService.User,
}

export default function MyProfile({user}: Props) {
return (
  <main className="bg-mq-boring overflow-scroll md:h-screen h-[140vh] ">
    <div className="relative flex justify-center items-center w-full mx-auto bg-center h-80 bg-no-repeat bg-cover" style={{backgroundImage: `url('${castleUrl}')`}}>
      <div className="lg:w-48 lg:h-48 h-32 w-32 bg-no-repeat bg-cover border-[5px] border-white rounded-full absolute bottom-[-5rem] lg:bottom-[-6rem]" style={{backgroundImage: `url('${picoUrl}')`}} ></div>          
    </div>
    <div className="h-[0.65rem] bg-gradient-to-r from-mq-purple to-mq-blue flex flex-col mb-24 justify-end">
      <div className="h-1 bg-mq-boring"></div>
    </div>
    
    <section className="px-5">
      <h1 className={`${headerStyle} text-mq-purple`}>{user.name}</h1>
      <div className="flex flex-col justify-center text-center px-5 mt-5">
        <p className="font-bold uppercase">My favorite thing(s) about Disneyland: </p>
        <p className="lg:w-1/3 mx-auto">{user.bio}</p>
      </div>

      <div className="h-1 bg-gradient-to-r from-mq-purple to-mq-blue flex flex-col my-8 justify-end md:w-1/2 mx-auto">
        <div className="h-[0.15rem] bg-mq-boring"></div>
      </div>

      <div>
        <nav className="mt-10 flex justify-center text-center gap-10 px-2">
          <li className="list-none font-black uppercase lg:text-lg text-sm">Completed Quests (#)</li>
          <li className="list-none font-black uppercase lg:text-lg text-sm">My Created Quests (#)</li>
        </nav>
      </div>
    </section>
  </main>
)
}