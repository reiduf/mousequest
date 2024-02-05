import { AcceptedQuest } from '../../../utilities/quest-api';
import castleUrl from '../../../img/castle.webp'
import { Link } from "react-router-dom"


// import { Link } from 'react-router-dom';

interface Props {
  questData: AcceptedQuest,
}



export default function CompletedQuest({questData}: Props) {
  return (
    <Link to={`/quests/completed-quests/${questData._id}`}>
      <li className="bg-gray-300 p-4 flex gap-4 rounded-md hover:scale-[1.01] cursor-pointer transition duration-150">
        <div className="w-32 h-32 bg-no-repeat bg-cover bg-center rounded-md" style={{backgroundImage: `url('${questData.quest.imageUrl ?? castleUrl}')`}}></div>
        <div className=" w-[60%] flex flex-col justify-between">
          <h2 className="uppercase font-black">{questData.quest.title}</h2>
        </div>
      </li>
    </Link>
  )
}