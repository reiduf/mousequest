import {Task} from "../../../utilities/quest-api"

interface Props {
  taskData: Task,
  idx: number,
  setActiveSlide: (activeIndex: number | 'starter') => void,
  activeSlide: number | 'starter',
  taskListLength: number,
}

export default function Slide({taskData, idx, setActiveSlide, activeSlide, taskListLength}:Props) {

  function handleBackSlideClick() {
    if (activeSlide === 0) {
      setActiveSlide('starter')
    } else {
      setActiveSlide(activeSlide - 1)
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
        <div className="bg-gradient-to-b from-mq-purple via-mq-purple to-mq-blue p-2 rounded-lg my-5">
          <h1 className="p-3 px-20 bg-white rounded-md font-semibold text-xl">Task {idx +1} / {taskListLength}</h1>
        </div>
        { activeSlide !== taskListLength - 1 &&
          <svg onClick={() => setActiveSlide(activeSlide + 1)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 fill-black cursor-pointer">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
          </svg>
        }
      </div>

      <p>{taskData.description}</p>
      {taskData.hint && <p>Hint: {taskData.hint}</p>}
    </>
  )
}