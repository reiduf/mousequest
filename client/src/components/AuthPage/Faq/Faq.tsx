import { useState } from "react"

interface Props {
  title: string,
  desc: string,
}

export default function Faq({title, desc}: Props) {
  const [showDesc, setShowDesc] = useState(false)
  return (
    <div className="bg-white  rounded-xl lg:max-w-2xl border-mq-purple border-4 lg:inline-flex flex-col mx-3 xl:w-1/4 lg:w-1/3 w-full lg:my-0 my-4">
      <div onClick={() => setShowDesc(!showDesc)} className="bg-mq-purple py-2 flex items-center lg:justify-center gap-3 px-2 cursor-pointer">
        <svg className="lg:w-6 lg:h-6 w-4 h-4 stroke-white stroke-2" style={showDesc ? {transform: "rotate(90deg)", transition: "transform 0.35s"} : {transition: "transform 0.35s"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
          <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
        </svg>
        <h1 className="font-black uppercase tracking-wide text-center xl:text-xl text-sm text-white">{title}</h1>
      </div>
      {showDesc &&
      <div className="p-6">
        <p className="mb-4 text-justify leading-7">{desc}</p>
      </div>
      }
    </div>
  )
}