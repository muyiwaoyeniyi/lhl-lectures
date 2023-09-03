import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Users from "./Users";
import User from "./User";

// 1. local state
// 2. State managed by Context
// 3. Global state - redux
// 4. Server state

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Algorithms (complexity, approach, etc)
// Performance for web apps (caching, etc)
// Security for web apps (OWASP top 10)
// Advanced JavaScript stuff (prototype, good code organization patterns but w/o "frameworks")
// Server architecture and infrastructure (inc. DevOps stuff)
// What does it mean to have a production-level app (12-Factor apps, etc)
// Virtualization and Containerization (eg: Docker)
// Frameworks like Angular, Meteor, Ember, etc.
// Library: React (plus Redux/Flux or whatever)
// Javascript/ECMA ES6/2015
// Advanced but popular Functional Programming concepts
// Infrastructure (AWS) / DevOps - high level how to set up a "scalable app" in the cloud (white-boarding and discussing)
// Advanced Data Structures
// Modern JavaScript ecosystem 101 (because it's huge an confusing) … (Webpack, Grunt, Gulp, Babel, Browserify, etc)
