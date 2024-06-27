import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <HomePage />
      </div>
    </>
  );
}

export default App;
