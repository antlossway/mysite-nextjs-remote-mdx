"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const ProjectCard = ({ title, description, tags, imageUrl, siteUrl }) => {
  const ref = useRef(null);
  //   indicate how far we scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]); //starting size and opacity is 0.8

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: scaleProgress }}
      className="mb-3 sm:mb-8 last:mb-0
      group "
    >
      <Link href={siteUrl} target="_blank">
        <section
          className="relative overflow-hidden sm:pr-8  sm:h-[20rem] rounded-lg
     bg-gray-100 dark:bg-gray-500 hover:bg-gray-200
     dark:hover:bg-gray-400 transition
      border-black/5 text-gray-700 dark:text-black"
        >
          {/* description part */}
          <div
            className="h-full pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 max-w-[50%]
      flex flex-col
      group-even:ml-[12rem] group-even:sm:ml-[20rem] "
          >
            <h3 className="text-xl font-semibold ">{title}</h3>
            <p className="mt-2 leading-relaxed ">{description}</p>
            <ul className="flex flex-wrap mt-auto gap-2">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="absolute top-10 -right-40
        group-hover:-translate-x-2 group-hover:translate-y-2
        group-hover:-rotate-2
        group-hover:scale-105

        group-even:right-[initial] group-even:-left-48
                group-even:group-hover:translate-x-2 group-even:group-hover:-translate-y-2
        group-even:group-hover:rotate-2
         w-[28.25rem] rounded-t-lg shadow-2xl"
          />
        </section>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
