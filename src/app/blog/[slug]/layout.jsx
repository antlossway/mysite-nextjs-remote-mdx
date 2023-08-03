import GradientBlog from "@/components/(decoration)/GradientBlog";
import NewsLetter from "@/components/NewsLetter";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="mb-56">
      <GradientBlog />
      {children}
      <div className="wrapper-post">
        <NewsLetter />
      </div>
    </div>
  );
}
