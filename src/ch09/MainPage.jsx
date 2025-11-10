import WarningBanner from "./WarningBanner";
import { useState } from "react";

function MainPage() {
  const [showWarning, setShowWarning] = useState(false);

  const handleToggleClick = () => {
    setShowWarning(prev => !prev);
  };

  return (
    <div>
      <WarningBanner warn={showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? "경고 숨기기" : "경고 표시하기"}
      </button>
    </div>
  );
}

export default MainPage;
