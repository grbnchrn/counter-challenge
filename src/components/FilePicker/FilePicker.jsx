import React from "react";
function App() {
  const btnck = React.useRef();
  function handleButtonClick() {
    btnck.current.click();
  }
  return (
    <div id="file-app">
      <p>Please select an image</p>
      <p>
        <input
          data-testid="file-picker"
          type="file"
          accept="image/*"
          ref={btnck}
        />
        <button onClick={handleButtonClick}>Pick Image</button>
      </p>
    </div>
  );
}
