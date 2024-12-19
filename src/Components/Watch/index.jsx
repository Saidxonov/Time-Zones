import { useState, useEffect } from "react";
import "./index.css";

function Watch() {
  const [time, setTime] = useState(new Date());

  useEffect(function () {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${hours}:${minutes}:${seconds} ${meridiem}`;
  }

  return (
    <div className="clock-wrapper">
      <div className="clock-container">
        <div className="container">
          <div className="clock">
            <span>{formatTime()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watch;
