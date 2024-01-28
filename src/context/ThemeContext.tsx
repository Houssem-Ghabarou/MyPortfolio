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
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  // Use matchMedia to detect system color scheme changes
  useEffect(() => {
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
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
