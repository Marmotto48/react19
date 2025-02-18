import { useRef } from "react";
import "./App.css";
import CustomInput from "./components/customInput";

function App() {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleClear = () => {
    inputRef.current.clear();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* <input ref={inputRef} type="text" placeholder="type here..." /> */}
      <CustomInput ref={inputRef} placeholder="type here..." />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleClear}>clear</button>
    </div>
  );
}

export default App;
