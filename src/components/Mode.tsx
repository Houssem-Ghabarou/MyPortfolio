import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";

const Mode = () => {
  const { theme, selectTheme, enableSystemMode, toggleEnableSystemMode } =
    useTheme();

  const [toggleSelection, setToggleSelection] = useState(false);

  const toggleSelectionHandler = () => {
    setToggleSelection(!toggleSelection);
  };

  let icon;
  if (enableSystemMode) {
    icon = <HiMiniComputerDesktop className='text-2xl' />;
  } else {
    icon =
      theme === "light" ? (
        <MdOutlineLightMode className='text-2xl' />
      ) : (
        <MdOutlineDarkMode className='text-2xl' />
      );
  }
  return (
    <div className=' flex justify-center relative'>
      <button
        onClick={toggleSelectionHandler}
        className={`ml-auto text-white p-2 rounded bg-dark `}
      >
        {icon}
      </button>

      {toggleSelection && (
        <ul
          className={`absolute top-full mt-4 mr-[5.5rem] rounded-md flex flex-col gap-3 p-1   bg-white `}
        >
          <li className='li-mode' onClick={() => selectTheme("dark")}>
            <MdOutlineDarkMode className='text-2xl' />
            <span> Dark</span>
          </li>

          <li className='li-mode' onClick={() => selectTheme("light")}>
            <MdOutlineLightMode className='text-2xl' />
            <span> Light</span>
          </li>
          <li className='li-mode' onClick={() => toggleEnableSystemMode()}>
            <HiMiniComputerDesktop className='text-2xl' />
            <span> System</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Mode;
