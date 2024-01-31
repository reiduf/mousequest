import { AcceptedQuest } from '../../../utilities/quest-api';
import castleUrl from '../../../img/castle.webp'
import {DateTime} from 'luxon';

// import { Link } from 'react-router-dom';

interface Props {
  questData: AcceptedQuest,
}



export default function ActiveQuest({questData}: Props) { 
  const numPendingTasks = questData.taskProgress.reduce((acc, value) => {
    !value ? acc++ : "" 
    return acc;
  } ,0);
  console.log(questData)

  return (
    // <Link to={`/quests/${popQuestData._id}`}>
    <li className="bg-white p-4 flex gap-4 rounded-md hover:scale-[1.01] cursor-pointer transition duration-150">
      <div className="w-32 h-32 bg-no-repeat bg-cover bg-center rounded-md" style={{backgroundImage: `url('${castleUrl}')`}}></div>
      <div className=" w-[60%] flex flex-col justify-between">
        <h2 className="uppercase font-black">{questData.quest.title}</h2>
        <div>
          <p className="flex text-xs items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
            <span className="font-extrabold text-mq-purple uppercase mr-1">Tasks Remaining:</span> {numPendingTasks} / {questData.taskProgress.length}
          </p>
          <p className="flex text-xs items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
            <span className="font-extrabold text-mq-purple uppercase mr-1">Accepted:</span>{DateTime.fromISO(questData.createdAt).toLocaleString(DateTime.DATETIME_MED)}
          </p>
 
        </div>
      </div>
    </li>
  // </Link>
  )
}