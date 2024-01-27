import NewQuestForm from "../../components/CreateQuestPage/NewQuestForm/NewQuestForm";
import jungleUrl from '../../img/junglecrs-crop.jpg';

export default function CreateQuest() {
  return (
    <main>
      <div className="relative flex justify-center items-center w-full mx-auto lg:h-[30rem] h-80 bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url('${jungleUrl}')`}}>
        <div className="h-1/3 2xl:w-1/2 flex items-center backdrop-blur-sm justify-center bg-white/60 w-5/6 rounded-md p-2 text-center">
          <p className="xl:text-5xl text-4xl font-black uppercase tracking-wider">Create Quest</p> 
        </div>
      </div>
      <div className="h-[0.65rem] bg-gradient-to-r from-mq-purple to-mq-blue flex flex-col justify-end">
          <div className="h-1 bg-mq-boring"></div>
      </div>

      <div className="bg-mq-boring px-4">
         <NewQuestForm />
      </div>
    </main>
  );
}