import HeightTransition from "@/components/(demo)/HeightTransition"
import NewsLetter from "@/components/NewsLetter"
import React from "react"

const page = () => {
  return (
    <div>
      <h1>Demo component</h1>
      {/* <HeightTransition>
        tailwindcss - transition height auto using max-height
      </HeightTransition> */}
      <NewsLetter />
    </div>
  )
}

export default page
