import React, { useEffect, useState } from "react";
import DarkModeIcon from "../assets/dark-mode-button.png";
import LightModeIcon from "../assets/light-mode-button.png";

const DarkMode = () => {
  const getInitialTheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className="relative">
      <img
        src={DarkModeIcon}
        onClick={toggleTheme}
        alt="Enable dark mode"
        className={`w-12 absolute right-0 z-10 cursor-pointer transition-all duration-300 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={LightModeIcon}
        onClick={toggleTheme}
        alt="Enable light mode"
        className={`w-12 right-0 z-10 cursor-pointer transition-all duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default DarkMode;
