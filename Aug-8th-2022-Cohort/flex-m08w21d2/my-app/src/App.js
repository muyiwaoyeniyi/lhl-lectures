import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from "./Home";
import Home from "./HomeClass";
import Pokemon from "./Pokemon";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/pokemon/:pokemonName" element={<Pokemon />} />
          <Route path="/" exact element={<Home height={100} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
