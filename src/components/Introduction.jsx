import Image from "next/image";
import React from "react";

export default function Introduction({ width = 64, height = 64 }) {
  return (
    <div
      className="max-w-xl px-2 py-2 bg-transparent rounded-md shadow-md
        flex flex-col sm:flex-row items-center gap-4 dark:bg-black"
    >
      <Image
        src="/img/avatar1.png"
        alt="avatar"
        width={width}
        height={height}
        priority={true}
        className="rounded-full"
      />
      <div className="text-gray-800 dark:text-white/80 text-center sm:text-left">
        <h1 className="text-lg ">
          Hi, I'm <span className="font-bold">Quinn</span>, a web developer
        </h1>
        <p className="mt-2 text-gray-600">I love to build website. </p>
      </div>
    </div>
  );
}
