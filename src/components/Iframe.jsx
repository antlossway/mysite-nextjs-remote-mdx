import React from "react"

const Iframe = ({ title, src, otherClass = "w-full h-[500px]", children }) => {
  return (
    <iframe
      className={otherClass}
      title={title}
      src={src}
      loading="lazy"
      allowFullScreen={true}
    >
      {children}
    </iframe>
  )
}

export default Iframe
