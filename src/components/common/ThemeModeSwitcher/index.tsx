import { useThemeMode } from "../../../hooks/useThemeMode";
import { IconMoon, IconSun } from "../../../utils/getIcons";

const ThemeModeSwitcher = () => {
  const { theme, setTheme } = useThemeMode();
  return (
    <button
      title="Theme mode Switcher"
      role="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fill-white opacity-100 transition-[opacity] duration-500 hover:opacity-80"
    >
      {theme === "dark" && <IconSun />}
      {theme === "light" && <IconMoon />}
    </button>
  );
};

export default ThemeModeSwitcher;
