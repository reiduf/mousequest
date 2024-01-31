import { useState } from "react"
import {Task} from "../../../utilities/quest-api"

interface Props {
  taskData: Task,
  idx: number,
  setActiveSlide: (activeIndex: number | 'starter') => void,
  activeSlide: number | 'starter',
  taskListLength: number,
}

export default function Slide({taskData, idx, setActiveSlide, activeSlide, taskListLength}:Props) {
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
        <div className="bg-gradient-to-b from-mq-purple via-mq-purple to-mq-blue p-[0.3rem] rounded-lg my-5 lg:w-96 w-56 text-center">
          <h1 className="p-3 bg-white rounded-md font-semibold text-xl">Task {idx +1} / {taskListLength}</h1>
        </div>
        <svg onClick={handleForwardSlideClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-10 h-10 ${activeSlide === taskListLength - 1 ? "fill-gray-400 cursor-default": "fill-black"} cursor-pointer`}>
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
        </svg>
      </div>
      
      <div className="bg-gradient-to-b from-mq-purple via-mq-purple to-mq-blue p-[0.3rem] rounded-lg">
        <div className="bg-white lg:p-8 p-5 pt-6 rounded-md text-center lg:text-xl text-lg lg:leading-10 leading-8 lg:max-w-xl">
          <p>{taskData.description}</p>
          {taskData.hint && 
            <>
              <div onClick={() => setShowHint(!showHint)} className="flex items-center justify-center gap-1 mt-4 cursor-pointer">
                <svg className="w-3 h-3 cursor-pointer stroke-mq-purple stroke-[3]" style={showHint ? {transform: "rotate(90deg)", transition: "transform 0.35s"} : {transition: "transform 0.35s"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>
                <p className="uppercase text-sm text-mq-purple font-black tracking-wider">Need a Hint?</p>
              </div>
                {showHint && <p className="text-xs uppercase leading-5 mt-2">{taskData.hint}</p>}
            </>
          }
        </div>
      </div>
    </>
  )
}