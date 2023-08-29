import React from "react";
import { skillsData } from "@/lib/data";

export default function Skills() {
  return (
    <div className="flex flex-wrap gap-x-10">
      {skillsData.map((skill, index) => (
        <div key={index}>
          <h3 className="text-sm font-medium dark:text-white">{skill.title}</h3>
          <ul className="list-disc text-sm ">
            {skill.skills.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
