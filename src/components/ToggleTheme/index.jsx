import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import cn from "../../lib/utils";

export default function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme !== "light";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 md:right-5 right-20 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 " />
      ) : (
        <Moon className="h-6 w-6 text-blue-900 " />
      )}
    </button>
  );
}
