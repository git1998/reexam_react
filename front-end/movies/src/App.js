import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Signup from "./components/Signup";
import MovieList from "./components/list";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/list" element={<MovieList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
