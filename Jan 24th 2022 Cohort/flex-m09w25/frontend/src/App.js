import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import { Home } from "./Home";

// 1. local state
// 2. State managed by Context
// 3. Global state - redux
// 4. Server state

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="*" exact element={<Login onLogin={dispatch} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
