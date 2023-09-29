import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const useThemeMode = () => {
  const [theme, setTheme] = useState<string>(
    getLocalStorage("theme") as string,
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme as string);
    setLocalStorage("theme", theme as string);
  }, [theme]);

  return { theme, setTheme };
};
