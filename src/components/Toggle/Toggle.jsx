import React, { useContext } from "react";
import '../Toggle/Toggle.css'
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from '../../Context'

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>

      <Sun />
      <Moon />
      <div
        className="t-button"
        style={darkMode ? { right: "2px" } : { left: "2px" }}

      ></div>
    </div>
  );
};

export default Toggle;
