import "./App.css";
import { useTheme } from "./context/ThemeContext";

import { Icon } from "@iconify/react";
function App() {
  const { theme, toggleTheme, enableSystemMode, toggleEnableSystemMode } =
    useTheme();
  return (
    <div className={`h-screen ${theme === "dark" ? "bg-dark" : "bg-light"} `}>
      <nav className='bg-gray-500 p-4 flex '>
        <button
          onClick={toggleTheme}
          className={`ml-auto text-white p-2 rounded ${
            theme === "dark" ? "bg-magneta " : "bg-primary"
          } `}
        >
          {theme === "light" ? (
            <Icon icon='mingcute:sun-fill' className='text-2xl' />
          ) : (
            <Icon icon='mingcute:moon-fill' className='text-2xl' />
          )}
        </button>
      </nav>
    </div>
  );
}

export default App;
