import { Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import "./App.css";
import Cart from "./view/Cart";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
