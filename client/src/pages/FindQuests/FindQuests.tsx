import { useEffect, useState } from "react";
import MostPopList from "../../components/FindQuestsPage/MostPopList";
import SearchResultsList from "../../components/FindQuestsPage/SearchResultsList";
import * as questService from "../../utilities/quest-service"
import { Quest } from "../../utilities/quest-service";

export default function FindQuests() {
  const [popQuests, setPopQuests] = useState<Quest[]>([])

  useEffect(() => {
    async function getPopQuests() {
      const popQuests = await questService.getMostPopQuests();
      setPopQuests(popQuests);
    }
    getPopQuests();
  }, [])

  return (
    <main className="mq-bg">
      <h1 className="mq-title text-center mb-4">Search Quests</h1>
      <div className="w-full flex items-center flex-col justify-center">
        <label className="relative xl:w-1/2 w-full">
          <svg className="w-8 h-8 absolute top-1 right-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
          </svg>
        </label>
        <input 
          className="xl:w-1/2 w-full rounded-full px-4 pr-10 p-2"
          type="text" 
          placeholder="Search..."
        />
      </div>
      <SearchResultsList popQuests={popQuests} />

      <div className="flex flex-col text-center items-center p-3 pt-5 mt-5 pb-0 gap-20 justify-center">
        <h2 className="mq-title">Most Popular Quests</h2>
      </div>
      <MostPopList popQuests={popQuests} /> 
    </main>
  );
}