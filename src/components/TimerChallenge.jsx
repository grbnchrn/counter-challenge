import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();

    const dialogRef = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerActive = timeRemaining>0 && timeRemaining<targetTime*1000;

    if(timeRemaining<=0){
        clearInterval(timer.current);
        dialogRef.current.showModal();
    }

    function resetTimer() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStartTimer() {
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
        }, 10);
    }

    function handleTimerStop() {
        dialogRef.current.showModal();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal
                ref={dialogRef}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset = {resetTimer}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button
                        onClick={
                            timerActive ? handleTimerStop : handleStartTimer
                        }
                    >
                        {!timerActive ? "Start" : "Stop"} Challenge
                    </button>
                </p>
                <p className={timerActive ? "active" : undefined}>
                    {timerActive ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    );
}
 