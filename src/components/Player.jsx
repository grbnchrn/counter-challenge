import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const [plName, setPlName] = useState(null);
  const plrName = useRef();
  /* const [submitted, setSubmitted] = useState(false); */

  /* function hanldeInputChange(event) {
    setSubmitted(false);
    setPlName(event.target.value);`
  } */

  function handleSubmitButton() {
    setPlName(plrName.current.value);
  }
  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? plName : "unknown entity"}</h2> */}
      <h2>Welcome {plName ?? "unknown entity"}</h2>
      <p>
        {/* <input type="text" value={plName} onChange={hanldeInputChange} /> */}
        <input type="text" ref = {plrName}/>
        <button onClick={handleSubmitButton}>Set Name</button> 
      </p>
    </section>
  );
}
