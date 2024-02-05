import { AcceptedQuest } from '../../../utilities/quest-api';
import castleUrl from '../../../img/castle.webp'
import { Link } from "react-router-dom"
import {DateTime} from 'luxon';

interface Props {
  questData: AcceptedQuest,
}

export default function ActiveQuest({questData}: Props) { 
  const numPendingTasks = questData.taskProgress.reduce((acc, value) => {
    !value ? acc++ : "" 
    return acc;
  } ,0);



  return (
    <Link to={`/quests/accepted-quests/${questData._id}`}>
      <li className="bg-white p-4 flex gap-4 rounded-md hover:scale-[1.01] cursor-pointer transition duration-150">
        <div className="w-32 h-32 bg-no-repeat bg-cover bg-center rounded-md" style={{backgroundImage: `url('${questData.quest.imageUrl ?? castleUrl}')`}}></div>
        <div className=" w-[60%] flex flex-col justify-between">
          <h2 className="uppercase font-black">{questData.quest.title}</h2>
          <div>
            <div>
              <span className="text-xs font-extrabold text-mq-purple uppercase mr-1">Tasks Remaining:</span> 
              <p className="text-[0.65rem] my-[-0.25rem] font-semibold">{numPendingTasks} / {questData.taskProgress.length}</p>
            </div>
            <div className="mt-2">
              <span className="text-xs font-extrabold text-mq-purple uppercase mr-1">Accepted:</span>
              <p className="text-[0.65rem] my-[-0.25rem] font-semibold">{DateTime.fromISO(questData.createdAt).toLocaleString(DateTime.DATETIME_SHORT)}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}