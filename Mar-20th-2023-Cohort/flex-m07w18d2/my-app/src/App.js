import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

// side effects and useEffect

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
