"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

const items = [
  {
    id: 1,
    name: "home",
    url: "/",
  },
  {
    id: 2,
    name: "blog",
    url: "/blog",
  },
  {
    id: 3,
    name: "bookmark",
    url: "/bookmark",
  },
];

export default function Navbar() {
  const { activePage, setActivePage } = useGlobalContext();
  // const [darkMode,setDarkMode] = useState('dark')
  const [darkMode, setDarkMode] = useState("");

  // first-time render, get darkMode value from localstorage, if set DarkMode with useState, will have error "ReferenceError: localStorage is not define"
  useEffect(() => {
    let value = localStorage.getItem("theme") || "dark";
    setDarkMode(value);
    setHtmlTheme(value);
    // console.log("debug first-time render useEffect setDarkMode: ", value)
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode);
    setHtmlTheme(darkMode);
    // console.log("debug useEffect called when darkMode change to: ", darkMode)
  }, [darkMode]);

  const setHtmlTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      document.documentElement.style.cssText =
        "transition: background-color 0.5s ease 0s;color-scheme: dark;";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.documentElement.style.cssText =
        "transition: background-color 0.5s ease 0s;color-scheme: light;";
    }

    // console.log("setHtmlTheme: ", theme)
  };

  // useEffect( () => {
  //   if (!('theme' in localStorage)) {
  //     localStorage.theme = darkMode
  //   }

  //   setHtmlTheme(localStorage.theme || 'dark') //set theme when page just loaded or toogle button clicked
  // },[darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prev) => (prev === "dark" ? "light" : "dark"));
    // localStorage.theme = darkMode
  };

  const linkClass =
    "px-6 py-3 rounded-full cursor-pointer hover:text-black dark:hover:text-white/70";
  const linkActive = "bg-slate-200/70 dark:bg-slate-700/70";

  return (
    <div className="fixed bottom-0 inset-x-0 mx-auto h-12 sm:h-16 mb-4 max-w-md px-2 ">
      <nav className="h-full w-full mx-auto px-4 rounded-full border border-black/40 bg-white/30 backdrop-blur-sm dark:border-white dark:bg-black/50 dark:text-white flex items-center justify-between capitalize text-xs sm:text-sm">
        {items.map((item) => (
          <Link
            href={item.url}
            key={item.id}
            className={
              activePage === item.name
                ? `${linkClass} ${linkActive}`
                : linkClass
            }
            onClick={() => setActivePage(item.name)}
          >
            {item.name}
          </Link>
        ))}

        <button onClick={toggleDarkMode}>
          {darkMode === "dark" ? (
            <SunIcon style="h-5 w-5 stroke-current stroke-1 fill-none     hover:fill-current hover:transition-all hover:duration-300 active:translate-y-1 " />
          ) : (
            <MoonIcon style="h-5 w-5 stroke-current stroke-1 fill-none hover:fill-current hover:transition-all hover:duration-300 active:translate-y-1 " />
          )}
        </button>
      </nav>
    </div>
  );
}
