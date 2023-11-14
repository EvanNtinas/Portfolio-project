import React from "react";
import { useDarkMode } from "./DarkModeContext";
import { IoMdSunny } from "react-icons/io";
import { GiPumpkinMask } from "react-icons/gi";

function DarkModeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className='px-4 py-2 rounded-md flex'>
      {darkMode ? (
        <IoMdSunny size={30} className='text-customyellow' />
      ) : (
        <GiPumpkinMask size={30} className='text-orange-400' /> //Change to IoMdMoon for Moon icon.
      )}
    </button>
  );
}

export default DarkModeButton;
