import React, { useState, useEffect } from "react";
import "./index.css";

const RegionalTime = () => {
  const [time, setTime] = useState({
    newYork: "",
    tokyo: "",
    london: "",
  });

  useEffect(() => {
    function updateTime() {
      const currentTime = new Date();
      setTime({
        newYork: currentTime.toLocaleString("en-US", {
          timeZone: "America/New_York",
        }),
        tokyo: currentTime.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }),
        london: currentTime.toLocaleString("en-US", {
          timeZone: "Europe/London",
        }),
      });
    }

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="countries">
        <div className="country">
          <h1>{time.newYork}</h1>
          <p>New York</p>
        </div>
        <div className="country">
          <h1>{time.tokyo}</h1>
          <p>Tokio</p>
        </div>

        <div className="country">
          <h1>{time.london}</h1>
          <p>London</p>
        </div>
      </div>
    </div>
  );
};

export default RegionalTime;
