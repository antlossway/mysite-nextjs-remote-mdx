import Image from "next/image";
import React from "react";

export default function Introduction({ width = 64, height = 64 }) {
  return (
    <div
      className=" px-6 py-4
        flex flex-col sm:flex-row items-center gap-4
        "
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
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          I love to build website.{" "}
        </p>
      </div>
    </div>
  );
}
