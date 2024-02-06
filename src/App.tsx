import "./App.css";
import Navbar from "./components/Navbar";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`h-screen ${theme === "dark" ? "bg-dark" : "bg-light"} `}>
      <Navbar />
    </div>
  );
}

export default App;
