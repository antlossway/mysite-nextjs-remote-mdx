import React from "react"
import style from "./HeightTransition.module.css"

const HeightTransition = ({ children }) => {
  return (
    <>
      <div className={style.example}>
        <div>transition height auto using CSS grid</div>
      </div>

      <div className="p-4 m-8 rounded-lg bg-slate-500 grid grid-rows-0 hover:grid-rows-1 transition-[grid-template-rows] duration-1000  ">
        <div className="text-white overflow-hidden">
          tailwindcss - attempt to transition height auto using grid
        </div>
      </div>

      <div className="p-4 m-8 rounded-lg bg-blue-500 group  ">
        <div className="text-white overflow-hidden max-h-0 group-hover:max-h-[500px] transition-max-height duration-500 ">
          {children}
        </div>
      </div>
    </>
  )
}

export default HeightTransition
