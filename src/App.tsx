import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Exercise from "./components/Exercise";
import Final from "./components/Final";
import Home from "./components/Home";
import Layout from "./components/Layout";


function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise" element={<Exercise />} />
      <Route path="/card" element={<Card />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/final" element={<Final />} />
    </Routes>
  )
}

export default App;
