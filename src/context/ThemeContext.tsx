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

  function toggleEnableSystemMode() {
    setEnableSystemMode((prev) => !prev);
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  //   Use matchMedia to detect system color scheme changes
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    console.log(savedTheme, "saved");
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
  }, []);
  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, enableSystemMode, toggleEnableSystemMode }}
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
