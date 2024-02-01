import { useState } from "react"
import {Task} from "../../../utilities/quest-api"
import { AcceptedQuest } from "../../../utilities/quest-api"

interface Props {
  taskData: Task,
  idx: number,
  setActiveSlide: (activeIndex: number | 'starter') => void,
  activeSlide: number | 'starter',
  taskListLength: number,
  updateTask: (idx: number) => void,
  quest: AcceptedQuest,
}

export default function Slide({taskData, idx, setActiveSlide, activeSlide, taskListLength, updateTask, quest}:Props) {
  const [showHint, setShowHint] = useState(false)

  function handleBackSlideClick() {
    setShowHint(false);
    if (activeSlide === 0) {
      setActiveSlide('starter')
    } else {
      setActiveSlide(activeSlide - 1)
    }
  }

  function handleForwardSlideClick() {
    setShowHint(false)
    if (activeSlide === taskListLength - 1) {
      return
    } else {
      setActiveSlide(activeSlide + 1)
    }
  }

  return(
    <>
      <div className="flex items-center justify-center gap-8">
        { activeSlide !== 'starter' &&
          <svg onClick={handleBackSlideClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 fill-black cursor-pointer">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
          </svg>
        }
        <div className={`${quest.taskProgress[idx] ? "bg-gray-300" : "bg-gradient-to-b from-mq-purple via-mq-purple to-mq-blue"} p-[0.3rem] rounded-lg my-5 lg:w-96 w-56 text-center`}>
          <h1 className={`${quest.taskProgress[idx] ? "text-gray-300" : "text-black"} p-3 bg-white rounded-md font-semibold text-xl`}>Task {idx +1} / {taskListLength}</h1>
        </div>
        <svg onClick={handleForwardSlideClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-10 h-10 ${activeSlide === taskListLength - 1 ? "fill-gray-400 cursor-default": "fill-black cursor-pointer"}`}>
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
        </svg>
      </div>
      
      <div className={`${quest.taskProgress[idx] ? "bg-gray-300" : "bg-gradient-to-t from-mq-purple via-mq-purple to-mq-blue"} p-[0.3rem] rounded-lg  xl:w-1/3 w-full`}>
        <div className={`${quest.taskProgress[idx] ? "text-gray-300" : "text-black"} bg-white lg:p-8 p-5 pt-6 rounded-t-md text-center lg:text-xl text-lg lg:leading-10 leading-8 w-full`}>
          <p>{taskData.description}</p>
        </div>
          {taskData.hint && 
            <>
              <div onClick={() => setShowHint(!showHint)} className={`${quest.taskProgress[idx] ? "bg-gray-300" : "bg-mq-purple"} py-3 cursor-pointer rounded-b-md`}>
                <div className="flex items-center justify-center gap-1">
                  <svg className="w-3 h-3 cursor-pointer stroke-white stroke-[3]" style={showHint ? {transform: "rotate(90deg)", transition: "transform 0.35s"} : {transition: "transform 0.35s"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                  </svg>
                  <p className="uppercase text-sm text-white font-black tracking-wider">Need a Hint?</p>
                </div>
                {showHint && <p className="text-xs uppercase leading-5 mt-2 text-center text-white px-2">{taskData.hint}</p>}
              </div>
            </>
          }
      </div>

      { quest.taskProgress[idx] ?
        <div className="flex flex-col items-center justify-center">
          <div className="text-white breathe-sm bg-mq-purple uppercase font-black tracking-wider p-5 mt-8 text-center rounded-xl">
            Task Complete!
          </div>
          <button 
            onClick={() => updateTask(idx)}
            className="bg-red-400 mt-7 md:max-w-[8rem] py-2 text-white rounded-md text-xs uppercase tracking-widest w-1/2 mx-auto font-bold" 
          >
            Undo
          </button>
        </div>
      :
        <button 
          onClick={() => updateTask(idx)}
          className="breathe bg-mq-purple mt-7 px-7 md:max-w-[15rem] py-2 text-white rounded-md text-sm uppercase tracking-widest w-1/2 mx-auto font-bold" 
        >
          Mark Complete
        </button>        
      }
    </>
  )
}