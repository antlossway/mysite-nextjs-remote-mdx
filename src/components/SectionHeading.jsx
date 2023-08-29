import React from "react";

export default function SectionHeading({ children }) {
  return (
    <h2 className="mt-12 mb-4 text-base text-black font-medium dark:text-white">
      {children}
    </h2>
  );
}
