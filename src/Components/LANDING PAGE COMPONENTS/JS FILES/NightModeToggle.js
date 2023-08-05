import React, { useState } from "react";
import "../CSS FILES/NightModeToggle.css";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

// Starting of the program
const NightModeToggle = () => {
  // Defining a boolean state which will be used to know the status of the mode
  const [isNightMode, setIsNightMode] = useState(false);

  const handleToggle = () => {
    setIsNightMode(!isNightMode);
  };

  // for shadow animation
  const buttonShadowColor = isNightMode ? "white" : "black";

  return (
    <div className={`app ${isNightMode ? "night-mode" : "light-mode"}`}>
      <div className="content">
        <button
          className="rounded-btn "
          type="button"
          onClick={handleToggle}
          style={{ boxShadow: `0 0 5px ${buttonShadowColor}` }}
        >
          {/* icons from ionicons */}
          {isNightMode ? (
            <BsFillSunFill style={{ width: "50px", height: "30px" }} />
          ) : (
            <BsFillMoonFill style={{ width: "50px", height: "30px" }} />
          )}
        </button>
      </div>
      <div className="text">
        <p>{isNightMode ? "Night Mode" : "Light Mode"}</p>
      </div>
    </div>
  );
};

export default NightModeToggle;
