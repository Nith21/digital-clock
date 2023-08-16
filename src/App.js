import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const date = new Date();
  const days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  // console.log(date.getTimezoneOffset())
  const [currentDate, setCurrentDate] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    setCurrentDate({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    });
  });

  function Hour(h) {
    if (h >= 12) {
      return h - 12;
    }
    return h;
  }

  const amPm = currentDate.hours >= 12 ? "PM" : "AM";

  function Zero(h) {
    const length = h.toString().length;
    if (length <= 1) {
      return "0" + h;
    }
    return h;
  }
  return (
    <>
      <div className="App">
        <div className="head">
          <h1>Digital - Clock</h1>
          <h1 className="day">
            {" "}
            <strong> {days[date.getDay()]} </strong>{" "}
          </h1>
        </div>
        <div className="timeContainer">
          <div className="time">{Hour(Zero(currentDate.hours))}</div>
          <span className="firstSpan">:</span>
          <div className="time">{Zero(currentDate.minutes)}</div>
          <span className="secondSpan">:</span>
          <div className="time seconds">{Zero(currentDate.seconds)}</div>
          <span className="thirdSpan">:</span>
          <span className="AMPM">{amPm}</span>
        </div>
      </div>
      {/* <div className="dayDiv">
        <span className="day">{days[date.getDay()]}</span>
      </div> */}
    </>
  );
}

export default App;
