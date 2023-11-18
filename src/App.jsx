
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./contexts/DataContexts";
import Home from "./view/Home";
import Cart from "./view/Cart";
import Pizza from "./view/Pizza";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
