import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  enableSystemMode: boolean;
  toggleEnableSystemMode: () => void;
  selectTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [enableSystemMode, setEnableSystemMode] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return savedTheme ?? "dark";
  });

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function selectTheme(theme: Theme) {
    setTheme(theme);
    setEnableSystemMode(false);
    localStorage.setItem("systemMode", "false");
  }

  function toggleEnableSystemMode() {
    setEnableSystemMode(true);
    localStorage.setItem("systemMode", "true");
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const enableSystemModeLocalstorage =
      localStorage.getItem("systemMode") === "true";

    if (enableSystemModeLocalstorage) {
      setEnableSystemMode(true);
    }
  }, []);

  //   Use matchMedia to detect system color scheme changes
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (!savedTheme || enableSystemMode) {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      // Set initial theme based on system color scheme
      setTheme(darkModeMediaQuery.matches ? "dark" : "light");

      // Listen for changes in system color scheme
      const handleChange = (e: MediaQueryListEvent) => {
        setTheme(e.matches ? "dark" : "light");
      };

      darkModeMediaQuery.addEventListener("change", handleChange);

      // Cleanup event listener on component unmount
      return () => {
        darkModeMediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, [enableSystemMode]);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        enableSystemMode,
        toggleEnableSystemMode,
        selectTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
