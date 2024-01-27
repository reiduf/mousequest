import castleUrl from '../../img/castle.webp';
import picoUrl from '../../img/pico.jpg';
import * as userService from '../../utilities/users-service'

interface Props {
  user: userService.User,
}

const userValuesStyles = "p-1 flex flex-col items-center justify-end md:text-4xl text-2xl text-mq-purple font-extrabold"
const labelsStyles = "p-1 flex flex-col items-center justify-start font-semibold uppercase md:text-lg xl:text-xl text-lg"

export default function MyProfile({user}: Props) {
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
        <span className={userValuesStyles}>7</span>
        <span className={userValuesStyles}>Explorer</span>
        <span className={userValuesStyles}>4</span>
        
        <span className={labelsStyles}>Completed</span>
        <span className={labelsStyles}>Rank</span>
        <span className={labelsStyles}>Created</span>
      </div>

    </section>
  </main>
)
}