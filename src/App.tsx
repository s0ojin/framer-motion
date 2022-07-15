import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Exercise from "./components/Exercise";
import Home from "./components/Home";


function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise" element={<Exercise />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  )
}

export default App;
