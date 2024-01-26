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
    {/* gradient line wrapper */}
    <div className="h-[0.65rem] bg-gradient-to-r from-mq-purple to-mq-blue flex flex-col mb-24 justify-end">
      <div className="h-1 bg-mq-boring"></div>
    </div>

    <h1 className={headerStyle}>{user.name}</h1>
  </main>
)
}