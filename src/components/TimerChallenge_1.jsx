import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timExpired, setTimExpired] = useState(false);

  const timer = useRef();
  const dialogRef = useRef();
  function handleStartTimer() {
    timer.current = setTimeout(() => {
      /* setTimExpired((prevStateTimeExpired) => !prevStateTimeExpired); */
      setTimExpired(true);
      dialogRef.current.showModal();
      setTimerStarted(false);
    }, targetTime * 1000);
    setTimExpired(false);
    setTimerStarted(true);
  }
  function handleTimerStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }
  return (
    <>
      <ResultModal ref={dialogRef} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleTimerStop : handleStartTimer}>
            Start Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
