import { useEffect, useState } from "react";
import MostPopList from "../../components/FindQuestsPage/MostPopList";
import SearchResultsList from "../../components/FindQuestsPage/SearchResultsList";
import * as questService from "../../utilities/quest-api"
import { Quest } from "../../utilities/quest-api";
import Loader from "../../components/Loader/Loader";

export default function FindQuests() {
  const [popQuests, setPopQuests] = useState<Quest[] | null>(null)
  const [searchString, setSearchString] = useState("")
  const [searchRes, setSearchRes] = useState<Quest[]>([])
  const [showNoRes, setShowNoRes] = useState(false)

  useEffect(() => {
    async function getPopQuests() {
      const popQuests = await questService.getMostPopQuests();
      setPopQuests(popQuests);
    }
    getPopQuests();
  }, [])

  async function handleKeyPress(evt: React.KeyboardEvent<HTMLInputElement>) {
    if(evt.key === 'Enter'){
      const results = await questService.searchQuests(searchString);
      setSearchRes(results)
      results.length === 0 ? setShowNoRes(true) : setShowNoRes(false);
    }
  }

  async function handleTagClick(tagName: string) {
    const results = await questService.searchQuests(tagName);
    setSearchRes(results);
    results.length === 0 ? setShowNoRes(true) : setShowNoRes(false);
  }

  const tagStyle = "py-2 px-3 uppercase bg-white text-mq-purple font-extrabold rounded-md text-xs inline-block mx-1 my-1 cursor-pointer"

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
          value={searchString}
          onChange={(evt) => {
            if (!evt.target.value) {
              setSearchRes([])
            }
            setSearchString(evt.target.value)
            setShowNoRes(false)
          }}
          onKeyDown={handleKeyPress}
          name="search"
          className="xl:w-1/2 w-full rounded-full px-4 pr-10 p-2"
          type="text" 
          placeholder="Search..."
        />
        <div className="mt-2">
          <button onClick={() => handleTagClick("kids")}className={tagStyle}>Good for kids</button>
          <button onClick={() => handleTagClick("adults")}className={tagStyle}>good for adults</button>
          <button onClick={() => handleTagClick("families")}className={tagStyle}>good for families</button>
          <button onClick={() => handleTagClick("ca")}className={tagStyle}>ca adv.</button>
          <button onClick={() => handleTagClick("disneyland")}className={tagStyle}>disneyland</button>
          <button onClick={() => handleTagClick("short")}className={tagStyle}>short quests</button>
          <button onClick={() => handleTagClick("long")}className={tagStyle}>long quests</button>
          <button onClick={() => handleTagClick("easy")}className={tagStyle}>easy quests</button>
          <button onClick={() => handleTagClick("hard")}className={tagStyle}>hard quests</button>
          <button onClick={() => handleTagClick("mickeys")}className={tagStyle}>hidden mickeys</button>
          <button onClick={() => handleTagClick("queue")}className={tagStyle}>queue line quests</button>
          <button onClick={() => handleTagClick("riddles")}className={tagStyle}>riddles</button>
        </div>
      </div>

     <SearchResultsList searchRes={searchRes} /> 
     {showNoRes && <p className="text-center my-5 text-white">Sorry, no results for this search.</p>}

      <div className="flex flex-col text-center items-center p-3 pt-5 mt-5 pb-0 gap-20 justify-center">
        <h2 className="mq-title">Most Popular Quests</h2>
      </div>

      { popQuests ? <MostPopList popQuests={popQuests} /> : <Loader />}
    </main>
  );
}