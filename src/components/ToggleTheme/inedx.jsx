import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import cn from "../../lib/utils";

export default function ToggleTheme() {
  const [isDarkMode, setDarkmode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkmode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkmode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const onThemeButtonClick = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkmode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkmode(true);
    }
  };

  return (
    <button
      onClick={onThemeButtonClick}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-100 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
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
