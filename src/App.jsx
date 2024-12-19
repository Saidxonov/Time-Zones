import { NavLink, Routes, Route } from "react-router-dom";
import Watch from "./Components/Watch/index.jsx";
import Timer from "./Components/Timer/index.jsx";
import TimeZone from "./Components/Time Zone/index.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="header">
          <div className="container">
            <div className="head">
              <ul>
                <li>
                  <NavLink to="/">Time</NavLink>
                </li>
                <li>
                  <NavLink to="/timer">Timer</NavLink>
                </li>
                <li>
                  <NavLink to="/time">Time Zone</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Watch></Watch>}></Route>
        <Route path="/timer" element={<Timer></Timer>}></Route>
        <Route path="/time" element={<TimeZone></TimeZone>}></Route>
      </Routes>
    </div>
  );
}

export default App;
